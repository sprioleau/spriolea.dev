"use client";

import { ClapButton, PortableTextBlock } from "@/components";
import { formatNumber, getClaps } from "@/utils";

import { ContributionsData } from "@/libs/github";
import { FooterData } from "@/schemas/types";
import icons from "../Icons";
import { useState } from "react";

type Props = {
  content: FooterData["body"];
  contributions: ContributionsData["contributions"];
  serverClapCount: NonNullable<Awaited<ReturnType<typeof getClaps>>["data"]>;
};

export default function FooterContent({
  content,
  contributions,
  serverClapCount,
}: Props) {
  const [clientClapCount, setClientClapCount] = useState(0);

  const shouldDisplayStats = Object.values({ contributions }).some(
    (stat) => stat > 0
  );

  const statsData = [
    {
      key: "Page claps",
      value: serverClapCount + clientClapCount,
      icon: icons.clap,
    },
    {
      key: "GitHub contributions in past year",
      value: contributions,
      icon: icons.commit,
    },
  ];

  return (
    <>
      <ClapButton
        serverClapCount={serverClapCount}
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
            value > 0 ? (
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
