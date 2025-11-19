import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { secret, path } = body || {};
    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }
    if (!path || typeof path !== "string") {
      return new Response("Path required", { status: 400 });
    }

    await revalidatePath(path);
    return new Response("Revalidated", { status: 200 });
  } catch (err) {
    console.error("Revalidate error", err);
    return new Response("Error", { status: 500 });
  }
}
