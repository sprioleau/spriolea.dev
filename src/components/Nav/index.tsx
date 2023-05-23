import { client, queries } from "@/libs/sanity";

import { NavClient } from "@/components";
import { NavLink } from "@/schemas/types";

export default async function Nav() {
  const navLinks = await client.fetch<NavLink[]>(queries.navLinks);

  return <NavClient navLinks={navLinks} />;
}
