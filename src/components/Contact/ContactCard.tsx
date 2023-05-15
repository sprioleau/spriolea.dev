"use client";

import { ContactData } from "@/schemas/types";
import { handleCopyEmailToClipboard } from "@/utils";
import icons from "../Icons";

type Props = {
  contact: ContactData;
};

export default function ContactCard({ contact: { email, overline } }: Props) {
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
    >
      <span className="icon mail-icon">{icons.email}</span>
      <h3 className="contact__card-heading">{overline}</h3>
      <p className="a contact__card-email">{getFormattedEmail(email)}</p>
    </div>
  );
}
