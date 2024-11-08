import {
  AuthMiddleware,
  ErrorMessage,
  SuccessMessage,
} from '@/backend/Middleware/ErrorHandler';
import { getCookies, verifyToken } from '@/backend/lib/utils';
import { NextRequest, type NextResponse } from 'next/server';
import fs from 'fs';
import { pipeline, Readable } from 'stream';
import { promisify } from 'util';
const pump = promisify(pipeline);
import { prisma } from '@/backend/lib/helper';
import { PageConfig } from 'next';

type PasswordData = {
  category: string;
  name: string;
  password: string;
  url: string;
  notes: string;
  image: string;
  description: string;
};

const filePath = '/uploads';

function convertWebStreamToNodeReadable(webStream: ReadableStream<Uint8Array>) {
  const reader = webStream.getReader();
  return new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) {
        this.push(null);
      } else {
        this.push(value);
      }
    },
  });
}

export const POST = AuthMiddleware(async (req: NextRequest) => {
  if (req.method !== 'POST')
    return ErrorMessage('POST method only supported!', 400);

  const form_data = await req.formData();

  const formdata = Object.fromEntries(form_data);

  const password_data = formdata as PasswordData;

  const imageFile = form_data.get('image') as unknown as File;

  console.log(formdata, 'working');

  // const validationResult =
  //   await getAddPasswordSchema().safeParseAsync(password_data);
  // if (!validationResult.success)
  //   return ErrorMessage(
  //     JSON.parse(validationResult.error.message)?.[0].message
  //   );

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  const createFilePath = `${filePath}/${Date.now() + imageFile.name}`;

  const paths = `http://localhost:3000/${createFilePath}`;

  await pump(
    convertWebStreamToNodeReadable(imageFile?.stream()),
    fs.createWriteStream(createFilePath)
  );

  const token = getCookies(req);

  if (!token) return ErrorMessage('token not Found!', 403);

  const user = verifyToken(token);

  if (user instanceof Error) return ErrorMessage('Token not Verified', 401);

  // const addpassword = await prisma.addPassword.create({
  //   data: {
  //     password: password_data.password,
  //     catagory: password_data.category,
  //     description: password_data.description,
  //     image: paths,
  //     name: password_data.name,
  //     url: password_data.url,
  //     notes: password_data.notes,
  //     userId: user._id,
  //   },
  // });
  return SuccessMessage('Password is created successfully.', 201);
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
