/* eslint-disable import/prefer-default-export */

import { fetchContributions } from "../../libs/github";

export default async (req, res) => {
  try {
    const { contributions } = await fetchContributions();
    res.status(200).json({ contributions, error: null })
  } catch (error) {
    res.status(500).json({ contributions: null, error })
  }
}