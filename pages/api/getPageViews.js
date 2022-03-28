/* eslint-disable import/prefer-default-export */

import CONFIG from "../../config";
import { fetchPageViews } from "../../libs/cloudflare";

export default async (req, res) => {
  const fetchStaticPageViews = async () => {
    const reponse = await fetch("http://localhost:3000/data/pageViews.json");
    const { pageViews } = await reponse.json();
    return { pageViews };
  };

  try {
    const { pageViews } = process.env.NODE_ENV === "development" && !CONFIG.USE_API ? await fetchStaticPageViews() : await fetchPageViews();
    res.status(200).json({ pageViews, error: null });
  } catch (error) {
    res.status(500).json({ pageViews: null, error });
  }
};
