export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

type fetchApiTypes = {
  url: string;
  method: HttpMethod;
  token?: string;
  data?: Record<string, any>;
};

type optionTypes = {
  method: HttpMethod;
  headers: { [key: string]: string; Authorization: string };
  body?: string;
};

export const requestOptions = (
  method: HttpMethod,
  token: string
): optionTypes => {
  return {
    method,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

export const FetchingApi = async <T>({
  url,
  method,
  token,
  data,
}: fetchApiTypes) => {
  if (token)
    try {
      if (data) {
        requestOptions(method, token).body = JSON.stringify(data);
      }

      const resp = await fetch(
        `${process.env.BACKEND_API_ENDPOINT}/${url}`,
        requestOptions(method, token)
      );

      const fetchData = await resp.json();
    } catch (err) {
      console.log(err);
    }
};
