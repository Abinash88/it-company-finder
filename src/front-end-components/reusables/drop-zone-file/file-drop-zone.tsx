import { CloudUpload, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Dropzone, {
  type DropzoneProps,
  type DropzoneRef,
  type FileRejection,
} from 'react-dropzone';
import { toast } from 'react-toastify';
import Avatar from '../avatars';
import { handleChangeToMB } from '@/lib/helper';

type ServerFiles = {
  id: string;
  name: string;
  url: string;
  size: number;
};

type FileDropZoneTypes = {
  onValueChange: React.Dispatch<React.SetStateAction<(File | ServerFiles)[]>>;
  // (file: (File | ServerFiles)[]) => void;
  fileTypes?: string[];
  multiple?: boolean;
  disabled?: boolean;
  value?: (File | ServerFiles)[];
  accept?: DropzoneProps['accept'];
  maxSize?: DropzoneProps['maxSize'];
  maxFiles?: DropzoneProps['maxFiles'];
};

export const ImageComp = ({
  item,
  name,
}: {
  item: string;
  name: string | undefined;
}) => {
  return (
    <Image
      loading='lazy'
      src={item}
      alt={name || 'Image'}
      width={500}
      height={500}
      className='w-[60px] h-[55px]'
    />
  );
};

const isFileWithPreview = (
  file: File | ServerFiles
): file is File & { preview: string } => {
  if (file instanceof File) {
    return 'preview' in file && typeof file.preview === 'string';
  } else return false;
};

const FileDropZone = React.forwardRef<DropzoneRef, FileDropZoneTypes>(
  (props, ref) => {
    const {
      onValueChange,
      value,
      multiple = false,
      disabled = false,
      maxSize = 1024 * 1023 * 2,
      maxFiles = 1,
      accept,
    } = props;
    // const [fileList, setFileList] = useState<(File | ServerFiles)[]>([]);

    const onDropFile = (
      acceptedFile: File[],
      rejectedFile: FileRejection[]
    ) => {
      if (!multiple && maxFiles === 1 && acceptedFile.length > 1) {
        toast.error(`Cannot upload more than 1 file!.`);
        return;
      }

      if ((value?.length ?? 0) + acceptedFile.length > maxFiles) {
        toast.error(`Cannot upload more than ${maxFiles} files`);
        return;
      }

      const acceptFile = acceptedFile.map((file) => {
        if (file instanceof File) {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
        }

        return file;
      });

      const arrayFile = value ? [...value, ...acceptFile] : acceptFile;
      onValueChange(arrayFile);

      if (rejectedFile.length > 0) {
        rejectedFile.forEach((reject) => {
          if (reject.file.size > maxSize) {
            toast.error(`File ${maxSize} exceeds the size of 2mb size limit!.`);
            return;
          }
        });
      }
    };

    const removeImage = (index: number) => {
      if (!value) return;
      const images = [...value];
      images.splice(index, 1);
      console.log(images, index);
      onValueChange(images || []);
    };

    return (
      <>
        <Dropzone
          maxFiles={maxFiles}
          multiple={(maxFiles && maxFiles > 1) || multiple}
          ref={ref}
          disabled={disabled}
          accept={accept}
          onDrop={onDropFile}
          maxSize={maxSize}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                className='rounded-sm flex cursor-pointer justify-center border-2 border-input p-2'
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className='flex justify-center items-center flex-col gap-3 text-dark-300'>
                    <CloudUpload className='size-4' />
                    <p className='font-medium text-sm'>Drop your file here</p>
                  </div>
                ) : (
                  <div className='flex justify-center items-center flex-col gap-3 text-dark-300'>
                    <CloudUpload className='size-4' />
                    <p className='font-medium text-sm'>
                      Click here or <span className='text-red-500'>drag</span>
                      and <span className='text-red-500'>drop</span> file for
                      upload
                    </p>
                  </div>
                )}
              </div>
            );
          }}
        </Dropzone>
        <div className='flex flex-col gap-3 '>
          {value?.map((file, index) => (
            <DisplayImage
              src={file}
              alt=''
              handleRemove={() => removeImage(index)}
              className=''
            />
          ))}
        </div>
      </>
    );
  }
);

export default FileDropZone;

export const DisplayImage = ({
  src,
  alt,
  className,
  handleRemove,
}: {
  src: File | ServerFiles;
  alt?: string;
  className?: string;
  handleRemove?: (file: File) => void;
}) => {
  return (
    <>
      {isFileWithPreview(src) && (
        <div className='flex items-center gap-4 border rounded-md w-full justify-between'>
          <div className='flex items-center gap-3'>
            <Avatar
              className={className}
              radius='5px'
              size='50px'
              src={src.preview}
            />
            <span className='3xl:text-sm text-xs'>
              {handleChangeToMB(src.size)} Mb
            </span>
          </div>
          <X
            onClick={() => {
              if (handleRemove) handleRemove(src);
            }}
            className='w-5 h-5 text-dark-300 mr-4 cursor-pointer'
          />
        </div>
      )}
    </>
  );
};
