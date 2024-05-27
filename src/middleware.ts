import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const routes = req.nextUrl.pathname;
}
