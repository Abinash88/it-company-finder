import { StaticImageData } from 'next/image';

export interface ResponseMessageDataTypes<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ResponseGetPasswordTypes {
  id: string;
  catagory: string;
  name: string;
  password: string;
  url: string;
  notes: string;
  image: string | StaticImageData;
  description: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
