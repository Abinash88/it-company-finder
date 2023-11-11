import toast from "react-hot-toast";

export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

type fetchApiTypes = {
  url: string;
  method: HttpMethod;
  token?: string;
  data?: Record<string, any>;
};

type returnData = {
  data:any;
  success:boolean;
  message:string;
}

export const FetchingApi = async (props: fetchApiTypes) => {
  const headers: Record<string, string> = {};

  if (props.token) {
    headers["Authorization"] = `Bearer ${props.token}`;
  }

  const requestOptions: RequestInit = {
    method: props.method,
    headers,
  };

  if (props.data) {
    if (props.method !== "GET") {
      headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(props.data);
    }
  }


  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/${props.url}`,
      requestOptions
    );

    const fetchData = await resp.json();
    if (!fetchData.success) return toast.error(fetchData?.message);
    toast.success(fetchData.message);
    return fetchData;
  } catch (err) {
    console.log(err);
  }
};
