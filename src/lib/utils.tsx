
import { twMerge } from "tailwind-merge"
import { ClassValue, clsx } from "clsx"
import { toast } from "react-toastify";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";

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


export const parseToFormData = (data: { [key: string]: any }) => {
    const formdata = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value?.forEach((item) => {
                if (String(item))
                    formdata.append(key, String(item));
            })
        } else if (value instanceof FileList) {
            for (let i = 0; i < value.length; i++) {
                formdata.append(key, value[i]);
            }
        } else if (typeof value === "object" && value !== null) {
            formdata.append(key, JSON.stringify(value));
        } else if (String(value) && typeof value !== 'undefined') {
            formdata.append(key, String(value));
        }
    })
    return formdata;
}


export const HanleError = (error: unknown) => {
    if (error instanceof Error) {
        console.log(error.message || 'Unknown error occurred')
        return error;
    } else if (typeof error === 'string') {
        console.log(error || 'Unknown error occurred')
        return new Error(error);

    }
    console.log(`Unhandled Error type: ${typeof error}`)
    return new Error(`Unhandled Error type: ${typeof error}`)
}


export const ParseBackendValidation = async <T extends FieldValues, O>({ data, setErrors, returnErrors }: {
    data: T,
    setErrors: UseFormSetError<T>,
    returnErrors?: boolean
}) => {

    const isServer = typeof window !== 'undefined';
    const toast = isServer && (await import('react-toastify')).toast
    const errors = data as Partial<T> & O;

    Object.entries(data).forEach(([key, value]) => {

        setErrors(
            key as keyof T as Path<T>,
            {
                type: 'manual',
                message: value as string | "Something went wrong!",
            },
            {
                shouldFocus: true,
            }
        )
    })
    if (toast) {
        toast.error('Please fix current errors and try again.')
    }

    if (returnErrors) return errors;
    return undefined;
}



interface Orderable {
    order: number;
}

export const AccendingOrder = <T extends Orderable>({
    array,
    type = 'accending',
}: {
    array: T[];
    type?: 'accending' | 'decending';
}): T[] => {
    const newArray = [...array];
    for (let i = 0; i < newArray.length; i += 1) {
        for (let j = newArray.length - 1; j >= i; j -= 1) {
            const first = newArray?.[i]?.order;
            const seconed = newArray?.[j]?.order;
            const whichType =
                type === 'accending'
                    ? first && seconed && first > seconed
                    : first && seconed && first < seconed;
            if (whichType) {
                const temp = newArray[i];
                const secArr = newArray[j];
                if (secArr) newArray[i] = secArr;
                if (temp) newArray[j] = temp;
            }
        }
    }
    return newArray;
};


export const BACKEND_URL = process.env.BACKEND_API_URL

interface SERVICE_PATH_PARAMS {
    id: number;
    query: string
}

export const PATH_WITHOUT_PREFIX = {
    POST_LOGIN: '/login',
    POST_SIGNUP: '/signup',
    POST_TOKEN: '/token',
    GET_USER: '/user',
    GET_SINGLE_USER: (id: SERVICE_PATH_PARAMS) => `/user/${id}`,
}


const PATH_WITH_PREFIX = Object.entries(PATH_WITHOUT_PREFIX).map(([key, value]) => {
    if (typeof value === 'function') {
        return {
            [key]: (args: Parameters<typeof value>) => `${BACKEND_URL}${value(args as unknown as SERVICE_PATH_PARAMS)}`
        }
    }
    return {
        [key]: `${BACKEND_URL}${value}`
    }
});


export const PATH = Object.assign({}, ...PATH_WITH_PREFIX) as {
    [key in keyof typeof PATH_WITHOUT_PREFIX]: (typeof PATH_WITHOUT_PREFIX)[key]
}