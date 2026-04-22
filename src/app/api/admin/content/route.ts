import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content.json");

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  const raw = fs.readFileSync(CONTENT_PATH, "utf8");
  return NextResponse.json(JSON.parse(raw));
}
