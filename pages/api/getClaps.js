/* eslint-disable import/prefer-default-export */

export default async (req, res) => {
  const response = await fetch(process.env.CLOUDFLARE_WORKER_URL);
  const { claps } = await response.json();
  res.status(200).json({ claps })
}