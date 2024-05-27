'use client'

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFileHandler = (): {
    fileLists: FileList | null;
    handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
    blobImage: string;
    clearFile: () => void;
    valueData: string;
} => {

    const [blobImage, setBlobImage] = useState('');
    const [fileLists, setFileLists] = useState<FileList | null>(null)
    const [valueData, setValueData] = useState('')

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files;
        if (files && files.length === 0) return null;
        const checkFile = files?.[0];
        const allowedTypes = ['image/jpg', 'image/png', 'image/jpeg', 'image/pdf'];
        if (checkFile && !allowedTypes.includes(checkFile?.type)) {
            toast.error("File type not allowed");
            return null;
        }
        const allowedSize = 2 * 1024 * 1024;
        if (checkFile && checkFile.size > allowedSize) {
            toast.error('File size exceeded!');
            return null;
        }
        const fileImage = checkFile ? URL.createObjectURL(checkFile) : null;
        if (fileImage)
            setBlobImage(fileImage)
        if (files)
            setFileLists(files);
        const value = e.target.value;
        setValueData(value)
    }

    const clearFile = () => {
        setBlobImage('');
        setFileLists(null);
    }
    console.log(blobImage)
    return { fileLists, handleFile, blobImage, clearFile, valueData };
}

export default useFileHandler