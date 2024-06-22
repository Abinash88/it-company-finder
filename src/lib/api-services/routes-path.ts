
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