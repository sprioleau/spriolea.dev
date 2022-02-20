/* eslint-disable jsx-a11y/anchor-is-valid */
import FocusTrap from "focus-trap-react";
import React from "react"
import { useRouter } from "next/router"
import Link from "next/link";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize"
import SkipToMainContent from "../SkipToMainContent";
import Logo from "../Logo";
import { Stagger } from "../AnimationLibrary";
import { handleScrollToTop } from "../../utils";
import icons from "../Icons";
import ResumeButton from "../ResumeButton";

const Nav = ({ navLinks, navExpanded, setNavExpanded }) => {
	const { windowSize } = useWindowSize();
	const aboveBreakpoint = windowSize > bp.md;
	const tabIndex = aboveBreakpoint || navExpanded ? 0 : -1;
	const router = useRouter();

	const close = () => setNavExpanded(false);
	const open = () => setNavExpanded(true);
	
	const navigateToSection = (slug) => {
		close();
		router.push(`#${slug}`);
	}
	
	return (
		<nav className="nav">
				<div className="nav__logo">
				<Link passHref href="/" className="nav__logo-link" onClick={(e) => handleScrollToTop(e, router)} aria-label="S. Prioleau Logo">
					<a>
						<Logo />
					</a>
					</Link>
				</div>
				<div className="nav__main-content">
					<SkipToMainContent />
					<FocusTrap active={navExpanded && windowSize <= bp.md}>
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
									additionalProps:{
										itemProp: "name",
										role: "menuitem",
									}
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
							<ResumeButton tabIndex={tabIndex} />
							<button id="close" className="nav__icon nav__icon--close no-frame" type="button" tabIndex={tabIndex} onClick={close}>
								{icons.close}
							</button>
							</div>
							<button id="open" className="nav__icon nav__icon--menu no-frame" type="button" tabIndex={0} onClick={open} aria-label="open menu" >
								{icons.menu}
							</button>
							<div className="nav__dismiss" onClick={close} role="button" tabIndex={-1} aria-label="close menu"/>
						</div>
					</FocusTrap>
				</div>
		</nav>
	);
};

export default Nav;
