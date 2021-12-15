import { CgFileDocument } from "react-icons/cg"
import Link from "next/link"
import { navLinks } from "../../constants";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="container">
				<div className="nav__logo">
					<Link passHref href="/" className="nav__logo-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 537.4" width="100%" height="100%">
							<path
								d="M416.93,495l-28.29,28.29-56.56-56.57L261.37,537.4l-14.15-14.14a120.2,120.2,0,0,1-13-154.39l-44.78-44.78A120,120,0,0,1,35.09,141.42L176.51,0,204.8,28.28,63.38,169.71a80,80,0,0,0,97.2,125.49L91.66,226.27l120.21-120.2c66.28-66.29,174.13-66.29,240.41,0s66.29,174.13,0,240.41l-91.92,91.93Zm-84.85-84.85L424,318.2A130,130,0,0,0,240.15,134.35l-91.92,91.92,42.42,42.43,91.93-91.92a70,70,0,1,1,99,99L289.65,367.7ZM263.16,479l40.63-40.63-40.64-40.64A80.28,80.28,0,0,0,263.16,479Zm-1.79-139.63,91.92-91.92a30,30,0,1,0-42.43-42.43L218.94,297Z"
								fill="currentColor"
							/>
						</svg>
					</Link>
				</div>
				<div className="nav__links-wrapper">
					<ol className="nav__links">
						{navLinks.map(({ label, link }) => (
							<li key={label} className="nav__link">
								<a href={link} className="nav__link__link">
									{label}
								</a>
							</li>
						))}
					</ol>
					<button type="button" className="m0 sm"><span className="icon"><CgFileDocument /></span>Resume</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
