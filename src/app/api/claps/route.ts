import { get } from "@vercel/edge-config";

export const runtime = "edge";

export async function GET(request: Request) {
  const claps = await get("claps");
  console.log("🚀 ~ file: route.ts:7 ~ GET ~ claps:", claps);
  return new Response(JSON.stringify({ claps }, null, 2));
}
