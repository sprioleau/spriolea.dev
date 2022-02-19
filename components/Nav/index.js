/* eslint-disable jsx-a11y/anchor-is-valid */
import FocusTrap from "focus-trap-react";
import React from "react"
import { useRouter } from "next/router"
import Link from "next/link";
import useWindowSize, { breakpoints as bp } from "../../hooks/useWindowSize"
import SkipToMainContent from "../SkipToMainContent";
import { Stagger } from "../AnimationLibrary";
import { handleScrollToTop } from "../../utils";
import icons from "../Icons";

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
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 537.4" width="100%" height="100%">
							<path
								d="M416.93,495l-28.29,28.29-56.56-56.57L261.37,537.4l-14.15-14.14a120.2,120.2,0,0,1-13-154.39l-44.78-44.78A120,120,0,0,1,35.09,141.42L176.51,0,204.8,28.28,63.38,169.71a80,80,0,0,0,97.2,125.49L91.66,226.27l120.21-120.2c66.28-66.29,174.13-66.29,240.41,0s66.29,174.13,0,240.41l-91.92,91.93Zm-84.85-84.85L424,318.2A130,130,0,0,0,240.15,134.35l-91.92,91.92,42.42,42.43,91.93-91.92a70,70,0,1,1,99,99L289.65,367.7ZM263.16,479l40.63-40.63-40.64-40.64A80.28,80.28,0,0,0,263.16,479Zm-1.79-139.63,91.92-91.92a30,30,0,1,0-42.43-42.43L218.94,297Z"
								fill="currentColor"
							/>
						</svg>
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
							<a href="/resume/resume.pdf" className="nav__resume-link shadow-link" target="_blank" rel="noreferrer"><button type="button" className="m0 sm nav__button nav__button--resume" tabIndex={tabIndex}><span className="icon">{icons.file}</span>Resume</button></a>
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
