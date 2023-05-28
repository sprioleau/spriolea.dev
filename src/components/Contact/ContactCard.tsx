"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { ContactData } from "@/schemas/types";
import { handleCopyEmailToClipboard } from "@/utils";
import icons from "../Icons";

type Props = {
  contact: ContactData;
};

export default function ContactCard({ contact: { email, overline } }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const getFormattedEmail = (email: string) => {
    const [userName, serverDomain] = email.split("@");
    return (
      <>
        <span>{userName}</span>
        <span>{`@${serverDomain}`}</span>
      </>
    );
  };

  return (
    <div
      className="contact__card"
      role="button"
      tabIndex={0}
      onClick={() => handleCopyEmailToClipboard(email)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="contact__spotlight"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 196, 0, 0.5),
              transparent 80%
            )
          `,
        }}
      />
      <span className="icon mail-icon">{icons.email}</span>
      <h3 className="contact__card-heading">{overline}</h3>
      <p className="a contact__card-email">{getFormattedEmail(email)}</p>
    </div>
  );
}
