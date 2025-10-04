"use server";
// app/api/register/route.ts
import {  getData, postData } from "@/app/services/api";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import Error from "next/error";

export async function POST(req:Request) {
  const url = new URL(req.url);
  const apiUrl = url.searchParams.get("url");

  try {
    const body = await req.json();
    const response = await postData([apiUrl || "", body]);
    const setCookieHeader = response.headers["set-cookie"];

    if (setCookieHeader) {
      const cookiesStore = await cookies(); 
      setCookieHeader.forEach((cookie:string) => {
        const [cookieName, cookieValue] = cookie.split(";")[0].split("="); 
        cookiesStore.set(cookieName, cookieValue, {
          path: "/",
          httpOnly: true,
          secure: true,
          sameSite: "lax",
        });
      });
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error:any) {
    return NextResponse.json(
      {
        message: "Request failed",
        error: error.response?.data || error.message, 
        status: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}

export async function GET(req:NextRequest) {
  const encodedUrl = req.nextUrl.searchParams.get("url");
  const url = decodeURIComponent(encodedUrl || "");

  if (!url) {
    console.error("Missing URL");
    return NextResponse.json(
      { message: "Missing 'url' query param" },
      { status: 400 }
    );
  }

  try {
    const response = await getData({ queryKey: [url] });

    return NextResponse.json(response, { status: 200 });
  } catch (error:any) {
    console.error("Error in GET request:", error);

    return NextResponse.json(
      {
        message: "Request failed",
        error: error.response?.data || error.message,
        status: error.response?.status || 500,
      },
      { status: error.response?.status || 500 }
    );
  }
}