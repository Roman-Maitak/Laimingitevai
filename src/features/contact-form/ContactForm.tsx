import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import FormInput from "../../shared/ui/FormInputs/FormInput";
import FormTextArea from "../../shared/ui/FormTextArea/FormTextArea";
import FormSelectGroup from "../../shared/ui/FormSelect/FormSelectGroup";
import FormSelectOption from "../../shared/ui/FormSelect/FormSelectOption";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Zoom, toast } from "react-toastify";
import { useRef } from "react";
import { useTheme } from "../theme-toggle/model/themeContext";
import { useTranslation } from "react-i18next";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContactForm = {
  emailLabel: string;
  subjectLabel: string;
  subject: {
    subject1: string;
    subject2: string;
    subject3: string;
  };
  messageLabel: string;
  submit: string;
};
type FormValues = {
  email: string;
  subject: string;
  message: string;
};
type Toast = {
  pending: string;
  success: string;
  error: string;
};

type ValidationMessage = {
  email: {
    validationError: string;
    requiredError: string;
  };
  subject: {
    requiredError: string;
  };
  message: {
    requiredError: string;
  };
};

const ContactForm = () => {
  const [theme] = useTheme();
  const { t } = useTranslation();
  const toastStatus = t("toast") as unknown as Toast;
  const contactForm = t("contactForm") as unknown as ContactForm;
  const validationMessage = t(
    "validationMessage"
  ) as unknown as ValidationMessage;

  const schema = yup.object({
    email: yup
      .string()
      .email(validationMessage.email.validationError)
      .required(validationMessage.email.requiredError),
    subject: yup.string().required(validationMessage.subject.requiredError),
    message: yup.string().required(validationMessage.message.requiredError),
  });
  const onSubmit = () => {
    if (!formRef.current) {
      toast.error("Something gone terribly wrong");
      return;
    }
    toast.promise(
      emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.EMAILJS_PUBLIC_KEY as string
      ),
      {
        pending: toastStatus.pending,
        success: toastStatus.success,
        error: toastStatus.error,
      },
      {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        transition: Zoom,
      }
    );
  };
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const formRef = useRef(null);

  return (
    <div
      className="mb-12 w-full shrink-0 grow-0 basis-auto 
    md:mb-0 md:w-6/12 md:px-3 lg:px-6
    md:pt-5"
    >
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormInput
          id="email"
          label={contactForm.emailLabel}
          register={register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <FormSelectGroup
          id="subject"
          label={contactForm.subjectLabel}
          register={register("subject")}
          error={!!errors.subject}
          helperText={errors.subject?.message}
        >
          <FormSelectOption
            name={contactForm.subject.subject1}
            value={contactForm.subject.subject1}
          />
          <FormSelectOption
            name={contactForm.subject.subject2}
            value={contactForm.subject.subject2}
          />
          <FormSelectOption
            name={contactForm.subject.subject3}
            value={contactForm.subject.subject3}
          />
        </FormSelectGroup>
        <FormTextArea
          id="message"
          label={contactForm.subjectLabel}
          register={register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
        />

        <button
          data-te-ripple-init
          data-te-ripple-color="light"
          type="submit"
          className="mb-6 inline-block w-full rounded 
          font-body font-normal text-base text-white
          bg-blue-600 px-6 pt-2.5 pb-2 
          uppercase leading-normal 
          shadow-[0_4px_9px_-4px_#3b71ca] 
          transition duration-150 ease-in-out 
          hover:bg-blue-800
          hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          <span className="">
            <p className="inline-block">{contactForm.submit}</p>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="inline-block ml-3"
            />
          </span>
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ContactForm;
