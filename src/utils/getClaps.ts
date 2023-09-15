export default async function getClaps() {
  // Cannot use this approach due to known network error bug
  // const claps = (await get<number>("claps")) ?? 0;
  // Reference: https://github.com/vercel/storage/issues/119

  const url = `https://edge-config.vercel.com/${process.env.EDGE_CONFIG_ID}/item/claps?token=${process.env.EDGE_CONFIG_TOKEN}`;

  // prettier-ignore
  let data = null,
    error = null;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });
    data = (await response.json()) as number;
  } catch (caughtError) {
    error = caughtError as Error;
  }

  return { data, error };
}
