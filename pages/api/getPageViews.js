/* eslint-disable import/prefer-default-export */

import { fetchPageViews } from "../../libs/cloudflare";

export default async (req, res) => {
  try {
    const { pageViews } = await fetchPageViews();
    res.status(200).json({ pageViews, error: null })
  } catch (error) {
    res.status(500).json({ pageViews: null, error })
  }
}