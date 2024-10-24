import { CloudUpload, X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Dropzone, {
  type DropzoneProps,
  type DropzoneRef,
  type FileRejection,
} from 'react-dropzone';
import Avatar from '../avatars';
import { toast } from 'react-toastify';

type ServerFiles = {
  id: string;
  name: string;
  url: string;
  size: number;
};

type FileDropZoneTypes = {
  name?: string;
  setFiles: (file: File[]) => void;
  fileTypes?: string[];
  multiple?: boolean;
  disabled?: boolean;
  isFile?: boolean;
  files?: File[] | string;
  accept?: DropzoneProps['accept'];
  maxSize?: DropzoneProps['maxSize'];
  maxFiles?: DropzoneProps['maxFiles'];
};

type FileListTypes = { file: File | undefined; preview: string };

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

const isFileWithPreview = (file: File): file is File & { preview: string } => {
  if (file instanceof File) {
    return 'preview' in file && typeof file.preview === 'string';
  }
  return false;
};

const FileDropZone = React.forwardRef<DropzoneRef, FileDropZoneTypes>(
  (props, ref) => {
    const {
      name,
      setFiles,
      files,
      fileTypes,
      multiple = false,
      disabled = false,
      isFile = false,
      maxSize = 1024 * 1023 * 2,
      maxFiles = 1,
      accept,
    } = props;
    const [fileList, setFileList] = useState<File[]>([]);

    const onDropFile = (
      acceptedFile: File[],
      rejectedFile: FileRejection[]
    ) => {
      if (!multiple && maxFiles === 1 && acceptedFile.length > 1) {
        toast.error(`Cannot upload more than 1 file!.`);
        return;
      }

      if ((fileList?.length ?? 0) + acceptedFile.length > maxFiles) {
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

      const arrayFile = fileList ? [...fileList, ...acceptFile] : acceptFile;
      setFileList(arrayFile);

      if (rejectedFile.length > 0) {
        rejectedFile.forEach((reject) => {
          if (reject.file.size > maxSize) {
            toast.error(`File ${maxSize} exceeds the size of 2mb size limit!.`);
            return;
          }
        });
      }
    };

    useEffect(() => {
      setFiles(fileList);
    }, [fileList]);

    const removeImage = (file: File) => {
      setFileList((prev) => {
        return [...prev].filter(
          (item) => JSON.stringify(item) !== JSON.stringify(file)
        );
      });
    };

    return (
      <>
        <Dropzone
          maxFiles={maxFiles}
          multiple={(maxFiles && maxFiles > 1) || multiple}
          ref={ref}
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
          {fileList?.map((file) => (
            <DisplayImage
              src={file}
              alt=''
              handleRemove={removeImage}
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
  src: File;
  alt?: string;
  className?: string;
  handleRemove?: (file: File) => void;
}) => {
  return (
    isFileWithPreview(src) && (
      <div className='flex items-center gap-4 border rounded-md w-full justify-between'>
        <Avatar
          className={className}
          radius='5px'
          size='50px'
          src={src.preview}
        />
        <X
          onClick={() => {
            if (handleRemove) handleRemove(src);
          }}
          className='w-5 h-5 text-dark-300 mr-4 cursor-pointer'
        />
      </div>
    )
  );
};
