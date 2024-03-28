import { token } from "@/constants/constant";
import { features } from "@/constants/seeds";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (token == body.token) {
    revalidatePath("/");
    return new NextResponse(JSON.stringify({ revalidated: true }), {
      status: 200,
    });
  }
  return new NextResponse(JSON.stringify({ unauthorized: true }), {
    status: 404,
  });
}
