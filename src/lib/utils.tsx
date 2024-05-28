
import { twMerge } from "tailwind-merge"
import { ClassValue, clsx } from "clsx"
import { toast } from "react-toastify";

export const cn = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes))
}


export const handleError = ({ error, popup = true }: { error: any, popup?: boolean }) => {
    const err = error as Error;
    const newError = err.message || "An unexpected error occurred.";
    if (popup) toast.error(newError);
    console.log(newError);
}

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success('Copied!')
    } catch (err) {
        toast.success('Filled to copy!')
        handleError({ error: err });
    }
}

