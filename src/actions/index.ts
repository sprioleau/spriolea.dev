"use server";

export async function incrementClaps(newClapsTotal: any) {
  const headers = new Headers();

  // prettter-ignore
  headers.append("Authorization", `Bearer ${process.env.VERCEL_API_TOKEN}`);
  headers.append("Content-Type", "application/json");

  const body = JSON.stringify({
    items: [
      {
        operation: "update",
        key: "claps",
        value: newClapsTotal,
      },
    ],
  });

  const requestOptions = {
    method: "PATCH",
    headers: headers,
    body,
    next: { revalidate: 0 },
  };

  try {
    await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
      requestOptions
    );
  } catch (caughtError) {
    console.error(caughtError);
  }
}
