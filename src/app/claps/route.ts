import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const headers = new Headers();

  headers.append("Authorization", `Bearer ${process.env.VERCEL_API_TOKEN}`);
  headers.append("Content-Type", "application/json");

  const requestBody = await request.json();
  const newClapsTotal = requestBody?.newClapsTotal;
  console.log("🚀 ~ file: route.ts:12 ~ POST ~ newClapsTotal:", newClapsTotal);

  if (!newClapsTotal) {
    return new Response(JSON.stringify({ data: null, error: "Invalid request" }), {
      status: 400,
    });
  }

  const requestOptions = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      items: [
        {
          operation: "update",
          key: "claps",
          value: newClapsTotal,
        },
      ],
    }),
    next: { revalidate: 0 },
  };

  try {
    const data = await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
      requestOptions
    ).then((response) => response.json());

    console.log("🚀 ~ file: route.ts:37 ~ POST ~ data:", data);
    return new Response(JSON.stringify({ data, error: null }), {
      status: 200,
    });
  } catch (caughtError) {
    console.error(caughtError);

    return new Response(JSON.stringify({ data: null, error: "Internal server error" }), {
      status: 500,
    });
  }
}
