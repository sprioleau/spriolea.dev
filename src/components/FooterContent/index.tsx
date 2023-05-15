"use client";

import ClapButton from "../ClapButton";
import { ContributionsData } from "@/libs/github";
import { FooterData } from "@/schemas/types";
import { PortableTextBlock } from "@/components";
import { formatNumber } from "@/utils";
import icons from "../Icons";
import { useState } from "react";

type Props = {
  content: FooterData["body"];
  contributions: ContributionsData["contributions"];
};

const claps = 8; // TODO: Update with persisted value

export default function FooterContent({ content, contributions }: Props) {
  const [clientClapCount, setClientClapCount] = useState(0);
  // const [stats, setStats] = useState({
  //   pageViews: 0,
  //   claps: 0,
  //   contributions,
  // });

  // const { pageViews, claps, contributions } = stats;
  const shouldDisplayStats = Object.values({ contributions }).some(
    (stat) => stat > 0
  );

  const statsData = [
    // { key: "Page views", value: pageViews, icon: icons.views },
    // { key: "Page claps", value: claps + clientClapCount, icon: icons.clap },
    {
      key: "GitHub contributions in past year",
      value: contributions,
      icon: icons.commit,
    },
  ];

  // useEffect(() => {
  //   setStats({
  //     pageViews: 1_000,
  //     claps: 8,
  //     contributions: 1_992,
  //   });
  //   // getStats((data) => setStats(data));
  // }, []);

  return (
    <>
      <ClapButton
        initialCount={claps}
        clientClapCount={clientClapCount}
        setClientClapCount={setClientClapCount}
      />
      {content.map(({ _key, children, markDefs }) => (
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
      {shouldDisplayStats && (
        <ul className="footer__stats">
          {statsData.map(({ key, value, icon }) =>
            value ? (
              <li
                key={key}
                className="footer__stat tooltip"
                data-tooltip={key}
              >
                <p className="footer__stat-wrapper">
                  <span>{formatNumber(value)}</span>{" "}
                  <span className="icon">{icon}</span>
                </p>
              </li>
            ) : null
          )}
        </ul>
      )}
    </>
  );
}
