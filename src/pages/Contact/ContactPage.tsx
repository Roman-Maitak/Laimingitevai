import ContactForm from "../../features/contact-form/ContactForm";
import ContactList from "../../widgets/contact-list/ContactList";

const ContactPage = () => {
  return (
    <div
      className="flex flex-wrap mb-20 mt-20
     "
    >
      {/* <div className="flex flex-wrap"> */}
      <ContactList />
      <ContactForm />
      {/* </div> */}
    </div>
  );
};

export default ContactPage;
