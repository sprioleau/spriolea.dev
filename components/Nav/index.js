import FocusTrap from "focus-trap-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize";

/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../Logo";
import SkipToMainContent from "../SkipToMainContent";
import { Stagger } from "../AnimationLibrary";
import { handleScrollToTop } from "../../utils";
import icons from "../Icons";

function Nav({ navLinks, navExpanded, setNavExpanded }) {
  const { windowSize } = useWindowSize();
  const aboveBreakpoint = windowSize > bp.md;
  const tabIndex = aboveBreakpoint || navExpanded ? 0 : -1;
  const router = useRouter();

  const close = React.useCallback(() => {
    setNavExpanded(false);
    document.body.style.overflow = "scroll";
  }, [setNavExpanded]);

  const open = () => {
    setNavExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const navigateToSection = (slug) => {
    close();
    router.push(`#${slug}`);
  };

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key !== "Escape") return;
      close();
    }

    if (navExpanded) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navExpanded, close]);

  return (
    <nav
      className="nav"
      aria-label="main navigation"
    >
      <div className="nav__logo">
        <Link
          href=""
          className="nav__logo-link"
          aria-label="S. Prioleau Logo"
        >
          <a
            tabIndex={0}
            role="button"
            onClick={(e) => handleScrollToTop(e, router)}
          >
            <Logo />
          </a>
        </Link>
      </div>
      <div className="nav__main-content">
        <SkipToMainContent />
        <FocusTrap
          active={navExpanded}
          focusTrapOptions={{ initialFocus: true }}
        >
          <div>
            <div className="nav__links-wrapper">
              <Stagger
                parent={{
                  tag: "ul",
                  className: "nav__links",
                  additionalProps: {
                    itemScope: true,
                    itemType: "https://schema.org/SiteNavigationElement",
                    role: "menu",
                  },
                }}
                child={{
                  tag: "li",
                  className: "nav__link",
                  additionalProps: {
                    itemProp: "name",
                    role: "menuitem",
                  },
                }}
                staggerBy={0.25}
                staggerDelay={0.5}
              >
                {navLinks.map(({ _id, navLabel, sectionSlug }) => (
                  <a
                    data-key={_id}
                    key={_id}
                    href={`#${sectionSlug}`}
                    className="nav__link__link shadow-link"
                    tabIndex={tabIndex}
                    data-title={navLabel}
                    onClick={() => navigateToSection(sectionSlug)}
                  >
                    {navLabel}
                  </a>
                ))}
              </Stagger>
              {navExpanded && (
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
            {!navExpanded && (
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

export default Nav;
