import PageSectionLayout from "../PageSectionLayout";
import icons from "../Icons";
import { handleCopyEmailToClipboard } from "../../utils";

function Contact({ content }) {
  const { email, overline } = content[0];

  const getFormattedEmail = () => {
    const [userName, serverDomain] = email.split("@");
    return (
      <>
        <span>{userName}</span><span>{`@${serverDomain}`}</span>
      </>
    );
  };

  return (
    <PageSectionLayout sectionId="contact" sectionTitle="Get in touch" center offset="0px">
      <div className="contact__card" role="button" tabIndex={0} onClick={() => handleCopyEmailToClipboard(email)}>
        <span className="icon mail-icon">{icons.email}</span>
        <h3 className="contact__card-heading">{overline}</h3>
        <p className="a contact__card-email">{getFormattedEmail()}</p>
      </div>
    </PageSectionLayout>
  );
}

export default Contact;
