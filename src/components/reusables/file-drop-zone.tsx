import React from 'react'
import { FileUploader } from 'react-drag-drop-files'

type FileDropZoneTypes = {
  name: string
  onChange: () => void
  fileTypes:string[]
}

const FileDropZone = ({ name, onChange, fileTypes }: FileDropZoneTypes) => {
  return (
    <div>
      <FileUploader onChange={onChange} types={fileTypes} name={name} />
    </div>
  )
}

export default FileDropZone
