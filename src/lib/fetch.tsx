import { FieldValues, UseFormSetError } from 'react-hook-form';
import { ParseBackendValidation, parseToFormData } from './utils';

type FetchOption<T> = {
  url: string;
  success?: boolean | string;
  error?: string | false;
  revalidate?: number;
  setErrors?: UseFormSetError<FieldValues>;
  headers?: Record<string, any>;
  popup?: boolean;
  toFormData?: boolean;
} & (
  | { method?: 'GET' | 'DELETE' }
  | {
      method?: 'POST' | 'PUT' | 'PATCH';
      body?: T | FormData;
    }
);

export const fetchRequest = async <T extends FieldValues, O>({
  url,
  success,
  error,
  method,
  revalidate,
  setErrors,
  headers,
  popup,
  toFormData,
  ...rest
}: FetchOption<T>): Promise<O | undefined> => {
  const body = 'body' in rest ? rest.body : undefined;
  const isServer = typeof window !== 'undefined';
  const toast = isServer && (await import('react-toastify')).toast;
  const isFormData = body instanceof FormData;

  try {
    const res = await fetch(url, {
      method: method || 'GET',
      headers: {
        ...(!isFormData &&
          !toFormData && { 'Content-Type': 'application/json' }),
        ...(headers && headers),
      },
      ...(method !== 'GET' &&
        (!isFormData
          ? {
              body: JSON.stringify(body),
            }
          : {
              body: parseToFormData(body as { [key: string]: any }),
            })),
      ...(revalidate && { next: { revalidate } }),
    });

    if (res.status === 401) {
        
      throw new Error('Unauthorized');
    }

    const data = await res.json();
    if (!res.ok && error !== false) {
      if (setErrors) {
        ParseBackendValidation<T, O>({ data, setErrors, returnErrors: true });
      }
      if (toast && popup) {
        toast.error(
          error ||
            data?.message ||
            'Something went wrong! Please try again later.'
        );
      }
      return data;
    }

    return data;
  } catch (err) {
    const newError = err as Error;
    if (toast && error !== false) {
      toast.error(
        error ||
          newError.message ||
          'Something went wrong! Please try again later.'
      );
    }
  }
  return undefined;
};
