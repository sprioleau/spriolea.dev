/* eslint-disable import/prefer-default-export */

import { fetchContributions } from "../../libs/github";
import CONFIG from "../../config";

export default async (req, res) => {
  const fetchStaticContributions = async () => {
    const reponse = await fetch("http://localhost:3000/data/contributions.json");
    const { contributions } = await reponse.json();
    return { contributions };
  };

  try {
    const data = process.env.NODE_ENV === "development" && !CONFIG.USE_API ? await fetchStaticContributions() : await fetchContributions();
    const { contributions } = data;
    res.status(200).json({ contributions, error: null });
  } catch (error) {
    res.status(500).json({ contributions: null, error });
  }
};
