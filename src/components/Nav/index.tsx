import { client, queries } from "@/libs/sanity";

import Link from "next/link";
import Logo from "../Logo";
import { NavLink } from "@/schemas/types";
import ResumeButton from "../ResumeButton";
import icons from "../Icons";

export default async function Nav() {
  const navLinks = await client.fetch<NavLink[]>(queries.navLinks);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link
          href="/"
          className="nav__logo-link"
          aria-label="S. Prioleau Logo"
          tabIndex={0}
          role="button"
        >
          <Logo />
        </Link>
      </div>
      <div className="nav__main-content">
        <label
          htmlFor="menu-toggle"
          className="nav__menu-label"
        >
          <span
            id="open"
            className="nav__icon nav__icon--menu no-frame"
            tabIndex={0}
            aria-label="open menu"
          >
            {icons.menu}
          </span>
          <span
            id="close"
            className="nav__icon nav__icon--menu no-frame"
            tabIndex={0}
            aria-label="close menu"
          >
            {icons.close}
          </span>
        </label>
        <input
          className="nav__menu-toggle"
          type="checkbox"
          name="menu-toggle"
          id="menu-toggle"
          aria-hidden
        />
        <div className="nav__links-wrapper">
          <ul className="nav__links">
            {navLinks.map(({ _id, navLabel, sectionSlug }) => (
              <li
                className="nav__link"
                key={_id}
              >
                <a
                  data-key={_id}
                  key={_id}
                  href={`/#${sectionSlug}`}
                  className="nav__link__link shadow-link"
                  data-title={navLabel}
                >
                  {navLabel}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton />
        </div>
      </div>
    </nav>
  );
}
