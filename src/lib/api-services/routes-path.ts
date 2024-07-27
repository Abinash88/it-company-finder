export const BACKEND_URL = process.env.BACKEND_API_URL;
export const SAME_API_URL = process.env.SAME_API_URL;

interface SERVICE_PATH_PARAMS {
  id?: number;
  query?: string;
}

export const PATH_WITHOUT_PREFIX = {
  POST_LOGIN: '/auth/login',
  POST_SIGNUP: '/auth/signup',
  POST_TOKEN: '/auth/token',
  GET_USER: '/auth/me',
  GET_PASSWORD: '/password/get_password',
  ADD_PASSWORD: '/password/add_password',
  DEL_PASSWORD: (id: SERVICE_PATH_PARAMS) => `/password/delete_password${id}`,
  GET_SINGLE_USER: (id: SERVICE_PATH_PARAMS) => `/user/${id}`,
};

const PATH_WITH_PREFIX = Object.entries(PATH_WITHOUT_PREFIX).map(
  ([key, value]) => {
    if (typeof value === 'function') {
      return {
        [key]: (args: Parameters<typeof value>) =>
          `${SAME_API_URL}${value(args as unknown as SERVICE_PATH_PARAMS)}`,
      };
    }
    return {
      [key]: `${SAME_API_URL}${value}`,
    };
  }
);

export const PATH = Object.assign({}, ...PATH_WITH_PREFIX) as {
  [key in keyof typeof PATH_WITHOUT_PREFIX]: (typeof PATH_WITHOUT_PREFIX)[key];
};
