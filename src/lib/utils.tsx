
import { twMerge } from "tailwind-merge"
import { ClassValue, clsx } from "clsx"

export const cn = (...classes: ClassValue[]) => {
    return twMerge(clsx(classes))
}

export const selectCatagory = [
    { id: 0, catagory: '-select catagory-' },
    { id: 1, catagory: 'PaymentCard' },
    { id: 2, catagory: 'Web Account' },
    { id: 3, catagory: 'File Store' },
    { id: 4, catagory: 'Secure Note' },
    { id: 5, catagory: 'Unix' },
    { id: 6, catagory: 'Windows' },
    { id: 7, catagory: 'Bank Account' },
    { id: 8, catagory: 'Socal Security Number' },
];