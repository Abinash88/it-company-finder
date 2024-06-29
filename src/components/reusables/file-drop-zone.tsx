import { ImageValidator } from '@/lib/schema/validators'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaX } from 'react-icons/fa6'
import { FiUploadCloud } from 'react-icons/fi'

type FileDropZoneTypes = {
  name?: string
  setFiles: (file: File[]) => void
  fileTypes?: string[]
  multiple?: boolean
  disabled?: boolean
  isFile?: boolean
  files: File[] | string
}

type FileListTypes = { file: File | undefined; preview: string }

export const ImageComp = ({
  item,
  name,
}: {
  item: string
  name: string | undefined
}) => {
  console.log(item)
  return (
    <Image
      loading='lazy'
      src={item}
      alt={name || 'Image'}
      width={500}
      height={500}
      className='w-[60px] h-[55px]'
    />
  )
}

const FileDropZone = ({
  name,
  setFiles,
  files,
  fileTypes,
  multiple = false,
  disabled = false,
  isFile = false,
}: FileDropZoneTypes) => {
  const [File, setFile] = useState<FileListTypes>({
    file: undefined,
    preview: '',
  })
  const [fileList, setFileList] = useState<any>()
  const [image, setImage] = useState('')
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      ...(isFile
        ? {
            'application/pdf': [],
          }
        : {
            'image/*': [],
          }),
    },
    onDrop: (dropFile) => {
      setFiles(dropFile)
      setFile({ file: dropFile[0], preview: URL.createObjectURL(dropFile[0]) })
    },
  })

  useEffect(() => {
    if (typeof files !== 'string') {
      setFileList(() =>
        files.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        })
      )
    }
    if (typeof files == 'string') {
      setImage(files)
    }
  }, [files])

  const handleDelete: React.MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation()
    setFile({ file: undefined, preview: '' })
    setFileList([])
  }

  console.log(fileList)

  return (
    <div {...getRootProps()}>
      <div className='border-dashed border cursor-pointer rounded-sm  border-gray-500  h-[65px]'>
        <input {...getInputProps()} />
        {fileList?.length || image ? (
          <div className='flex w-full items-center gap-2 justify-between px-4'>
            {fileList ? (
              fileList?.map((item: { preview: string }) => (
                <ImageComp item={item.preview} name={name} />
              ))
            ) : (
              <>
                <ImageComp item={image} name={name} />
              </>
            )}
            <FaX
              onClick={handleDelete}
              className='cursor-pointer hover:text-red-500 hover:bg-red-100  p-0.5 text-lg'
            />
          </div>
        ) : (
          <div className=' w-full h-full flex-col flex items-center justify-center'>
            <FiUploadCloud className='text-3xl text-gray-500' />
            <h5 className='text-xs'>Upload File</h5>
            <p className='text-[10px] text-gray-500'>
              Drop file here or click <b>browser</b> through your device
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FileDropZone
