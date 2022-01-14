/* eslint-disable import/prefer-default-export */

export default async ({ query }, res) => {
  const response = await fetch(`${process.env.CLOUDFLARE_WORKER_URL}/increment/likes?by=${query.by}`);
  const { likes } = await response.json();
  res.status(200).json({ likes })
}