import { eng, ru } from "../../assets";

export type Language = {
  code: string;
  title: string;
  img: string;
};

export const languages: Language[] = [
  {
    code: "en",
    title: "English",
    img: eng,
  },
  {
    code: "ru",
    title: "Русский",
    img: ru,
  },
];
