import React from "react";
import PortableTextBlock from "../PortableTextBlock";
import icons from "../Icons";
import { formatNumber } from "../../utils";
import { getStats } from "../../_api";

function Footer({ content }) {
  const [stats, setStats] = React.useState({
    contributions: 0,
  });

  const { body } = content[0];
  const { contributions } = stats;
  const shouldDisplayStats = Object.values(stats).some((stat) => stat > 0);

  const statsData = [{ key: "GitHub contributions in past year", value: contributions, icon: icons.commit }];

  React.useEffect(() => {
    getStats((data) => setStats(data));
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {body.map(({ _key, children, markDefs }) => (
          <p
            key={_key}
            className="footer__message"
          >
            <PortableTextBlock
              childrenContent={children}
              markDefs={markDefs}
              linksClass="shadow-link"
            />
          </p>
        ))}
        {shouldDisplayStats ? (
          <ul className="footer__stats">
            {statsData.map(({ key, value, icon }) =>
              value ? (
                <li
                  key={key}
                  className="footer__stat tooltip"
                  data-tooltip={key}
                >
                  <p className="footer__stat-wrapper">
                    <span>{formatNumber(value)}</span> <span className="icon">{icon}</span>
                  </p>
                </li>
              ) : null
            )}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
