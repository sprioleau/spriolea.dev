import { ContributionsData, fetchContributions } from "@/libs/github";

export async function GET(request: Request) {
  const data = (await fetchContributions()) as ContributionsData;

  return new Response(JSON.stringify(data, null, 2));
}
