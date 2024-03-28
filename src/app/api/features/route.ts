import { features } from "@/constants/seeds";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify({ features }), {
    status: 200,
  });
}
