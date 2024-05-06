import { NextRequest } from "next/server";

export type AddPasswordDataTypes = {
  catagory: string;
  name?: string;
  password: string;
  url?: string;
  note?: string;
  image?: string;
  desc?: string;
  description?: string;
};

export interface RequestWithExtends extends NextRequest {

}
