import { useTheme } from "../../features/theme-toggle/model/themeContext";
import { Theme } from "../../features/theme-toggle/model/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faTelegram,
  faViber,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";

type ContactUs = {
  header: string;
  welcome: string;
};

const ContactList = () => {
  const [theme] = useTheme();
  const { t } = useTranslation();
  const contactUs = t("contactUs") as unknown as ContactUs;

  return (
    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
      <h2
        className="mb-6 text-3xl font-bold font-body text-text
"
      >
        {contactUs.header}
      </h2>
      <p
        className="mb-6 font-body font-normal text-base text-text
"
      >
        {contactUs.welcome}
      </p>
      <span className="pb-3 inline-block">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="w-[28px] h-[28px] inline align-middle"
          color={"#008000"}
        />
        <a
          href="https://api.whatsapp.com/send?phone=48501142362"
          className="ml-3 font-body font-normal text-base text-text inline vertical hover:text-blue-600"
        >
          {"+48 501 142 362"}
        </a>
      </span>
      <br />
      <span className="pb-3 inline-block">
        <FontAwesomeIcon
          icon={faSkype}
          className="w-[28px] h-[28px] inline align-middle"
          color={`${theme === Theme.LIGHT ? "" : "#FFFFFF"}`}
        />
        <a
          href="https://join.skype.com/invite/HeXAgciindzd"
          className="ml-3 font-body font-normal text-base text-text inline vertical hover:text-blue-600"
        >
          {"live:.cid.2ae6f388171990fc"}
        </a>
      </span>
      <br />
      <span className="pb-3 inline-block">
        <FontAwesomeIcon
          icon={faViber}
          className="w-[28px] h-[28px] inline align-middle"
          color={`${theme === Theme.LIGHT ? "" : "#FFFFFF"}`}
        />
        <a
          href="viber://chat?number=48501142362"
          className="ml-3 font-body font-normal text-base text-text inline vertical hover:text-blue-600"
        >
          {"+48 501 142 362"}
        </a>
      </span>
      <br />
      <span className="pb-3 inline-block ">
        <FontAwesomeIcon
          icon={faTelegram}
          className="w-[28px] h-[28px] inline align-middle"
          color={`${theme === Theme.LIGHT ? "" : "#FFFFFF"}`}
        />
        <a
          href="https://t.me/roman_maitak"
          className="ml-3 font-body font-normal text-base text-text inline vertical hover:text-blue-600"
        >
          {"@roman_maitak"}
        </a>
      </span>
      <br />

      <span className="pb-3 inline-block ">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-[28px] h-[28px] inline align-middle"
          color={"#0047AB"}
        />
        <a
          href="mailto://laimingitevai@outlook.com"
          className="ml-3 font-body font-normal text-base text-text inline vertical hover:text-blue-600"
        >
          {"laimingitevai@outlook.com"}
        </a>
      </span>
    </div>
  );
};

export default ContactList;
