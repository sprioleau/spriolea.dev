/* eslint-disable import/prefer-default-export */
import CONFIG from "../../config";

export default async (req, res) => {
  const endpoint = process.env.NODE_ENV === "development" && !CONFIG.USE_API ? "http://localhost:3000/data/claps.json" : process.env.CLOUDFLARE_WORKER_URL;

  try {
    const response = await fetch(endpoint);
    const { claps } = await response.json();
    res.status(200).json({ claps, error: null });
  } catch (error) {
    res.status(500).json({ claps: null, error });
  }
};
