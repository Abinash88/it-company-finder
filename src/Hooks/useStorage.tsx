'use client';

type TStorage = 'cookie' | 'local' | 'session';

type TOptions<TStorage> = TStorage extends 'cookie'
  ? {
      path?: string;
      domain?: string;
      expires?: number;
      secure?: boolean;
      sameSite?: 'strict' | 'lax' | 'none';
      httpOnly?: boolean;
    }
  : undefined;

export default function useStorage<T>(type: TStorage = 'local') {
  if (typeof window === 'undefined') return null;
  const set = (key: string, value: T, options?: TOptions<typeof type>) => {
    if (type === 'cookie') {
      const cookieString = `${key}=${stringifyOrReturn(value)};`;

      if (options && options?.path) {
        document.cookie = `${cookieString} path=${options.path};`;
        return;
      }
    }
    if (type === 'local') {
      localStorage.setItem(key, stringifyOrReturn(value));
    }
    if (type === 'session') {
      sessionStorage.setItem(key, stringifyOrReturn(value));
    }
  };

  const get = <T,>(key: string): T | null => {
    if (type === 'cookie') {
      return getCookie(key);
    }
    if (type === 'local') {
      return getLocal(key);
    }
    if (type === 'session') {
      return getSession(key);
    }
    return null;
  };

  const remove = (key: string) => {
    if (type === 'cookie') {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
    if (type === 'local') {
      localStorage.removeItem(key);
    }
    if (type === 'session') {
      sessionStorage.removeItem(key);
    }
  };

  return { set, get, remove };
}

const getCookie = <T,>(key: string): T | null => {
  if (typeof window === 'undefined') return null;
  if (typeof document === 'undefined') return null;

  const cookie = document.cookie
    .split(';')
    .find((cookie) => cookie.includes(key));
  console.log(document.cookie);
  if (cookie) {
    try {
      return JSON.parse(cookie.split('=')[1] || '');
    } catch {
      return cookie.split('=')[1] as unknown as T;
    }
  }
  return null;
};

const getLocal = <T,>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch {
      return value as unknown as T;
    }
  }
  return null;
};

const getSession = <T,>(key: string): T | null => {
  const value = sessionStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch {
      return value as unknown as T;
    }
  }
  return null;
};

const stringifyOrReturn = <T,>(value: T): string => {
  try {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    return (value as number).toString();
  } catch {
    return (value as number).toString();
  }
};
