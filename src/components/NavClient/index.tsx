"use client";

import React, { useCallback, useEffect, useState } from "react";

import FocusTrap from "focus-trap-react";
import Link from "next/link";
import Logo from "../Logo";
import { NavLink } from "@/schemas/types";
import ResumeButton from "../ResumeButton";
import { SkipToMainContent } from "@/components";
import icons from "../Icons";
import { scrollToTop } from "@/utils";

type Props = {
  navLinks: NavLink[];
};

export default function NavClient({ navLinks }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const close = useCallback(() => {
    document.body.style.overflow = "scroll";
    setIsExpanded(false);
  }, [setIsExpanded]);

  function open() {
    setIsExpanded(true);
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      close();
    }

    if (isExpanded) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, close]);

  return (
    <nav
      className={["nav", isExpanded ? "nav-expanded" : ""].join(" ")}
      aria-label="main navigation"
    >
      <div className="nav__logo">
        <Link
          href="/"
          className="nav__logo-link"
          aria-label="S. Prioleau Logo"
          tabIndex={0}
          role="button"
          onClick={scrollToTop}
        >
          <Logo />
        </Link>
      </div>
      <div className="nav__main-content">
        <SkipToMainContent sectionId="about" />
        <FocusTrap active={isExpanded}>
          <div className="nav__focus-trap">
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
                      onClick={close}
                    >
                      {navLabel}
                    </a>
                  </li>
                ))}
              </ul>
              <ResumeButton />
              {isExpanded && (
                <button
                  id="close"
                  className="nav__icon nav__icon--close no-frame"
                  type="button"
                  onClick={close}
                >
                  {icons.close}
                </button>
              )}
            </div>
            {!isExpanded && (
              <button
                id="open"
                className="nav__icon nav__icon--menu no-frame"
                type="button"
                tabIndex={0}
                onClick={open}
                aria-label="open menu"
              >
                {icons.menu}
              </button>
            )}
            <div
              className="nav__dismiss"
              onClick={close}
              role="button"
              tabIndex={-1}
              aria-label="close menu"
            />
          </div>
        </FocusTrap>
      </div>
    </nav>
  );
}
