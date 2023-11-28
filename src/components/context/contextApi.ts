import toast from "react-hot-toast";

export type HttpMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

type fetchApiTypes = {
  url: string;
  method: HttpMethod;
  // token?: string;
  data?: Record<string, any>;
};

type returnData = {
  data: any;
  success: boolean;
  message: string;
};

export const FetchingApi = async (props: fetchApiTypes) => {
  const headers: Record<string, string> = {};

  const requestOptions: RequestInit = {
    method: props.method,
    headers,
    credentials: "include",
  };

  if (props.data) {
    if (props.method !== "GET") {
      headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(props.data);
    } else {
    }
  }

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/${props.url}`,
      requestOptions
    );

    const fetchData = await resp.json();
    if (!fetchData.success && props.method !== "GET") {
      return toast.error(fetchData?.message);
    }
    if (fetchData.success && props.method !== "GET") {
      toast.success(fetchData.message);
    }
    if (fetchData?.success) {
      return fetchData;
    }
  } catch (err) {
    console.log(err);
  }
};
