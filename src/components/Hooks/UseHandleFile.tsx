
import { toast } from "react-toastify";

export const useHandleFile = (e: React.ChangeEvent<HTMLInputElement>): { fileLists: FileList | null, value: string, fileImage: string | null } | null => {
    const fileLists = e?.target?.files;
    if (fileLists && fileLists.length === 0) return null;
    const checkFile = fileLists?.[0];
    const allowedTypes = ['image/jpg', 'image/png', 'image/jpeg', 'image/pdf'];
    if (checkFile && !allowedTypes.includes(checkFile?.type)) {
        toast.error("File type not allowed");
        return null;
    }
    const allowedSize = 2 * 1024 * 1024;
    if (checkFile && checkFile.size > allowedSize) {
        toast.error("File size exceeded!");
        return null;
    }
    const value = e.target.value;
    const fileImage = checkFile ? URL.createObjectURL(checkFile) : null;
    return { fileLists, value, fileImage };
}
