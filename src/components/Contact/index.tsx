import ContactCard from "./ContactCard";
import { ContactData } from "@/schemas/types";

type Props = {
  contactContent: ContactData[];
};

export default async function Contact({ contactContent }: Props) {
  // const contactContent = await client.fetch<ContactData[]>(queries.contact);

  return <ContactCard contact={contactContent[0]} />;
}
