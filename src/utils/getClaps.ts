type ReturnData = {
  data: number | null;
  error: Error | null;
};

export default async function getClaps(): Promise<ReturnData> {
  // Cannot use this approach due to known network error bug
  // const claps = (await get<number>("claps")) ?? 0;
  // Reference: https://github.com/vercel/storage/issues/119

  const url = `https://edge-config.vercel.com/${process.env.EDGE_CONFIG_ID}/item/claps?token=${process.env.EDGE_CONFIG_TOKEN}`;

  // prettier-ignore
  let data = null,
      error = null;

  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (caughtError) {
    error = caughtError as Error;
  }

  return { data, error };
}
