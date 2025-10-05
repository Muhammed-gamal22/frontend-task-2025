"use server";
import axios from "axios";
import { cookies } from "next/headers";
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const client = axios.create({
    baseURL: API_BASE_URL,
})

const getCookie = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value || null;
  };

  export const saveCookie = async (token: string) => {
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  };

  export const postData = async ([endpoint, body]: [string, any]) => {
    try {
      let token = await getCookie();
      const response = await client.post(endpoint, body, {
        withCredentials: true,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
  
      return response;
    } catch (error) {
      throw error;
    }
  };


  export const getData = async ({ queryKey: [url] }: { queryKey: [string] }) => {
    let token = await getCookie();  
    try {
      const response = await client.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  