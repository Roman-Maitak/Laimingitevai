import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Language, languages } from "../../entities/languages";

const LangSelector = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const defaultLanguage = localStorage.getItem("i18nextLng");
    return defaultLanguage
      ? languages.find((language) => language.code === defaultLanguage) ||
          languages[0]
      : languages[0];
  });
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language.code);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((state) => !state)}
        className="inline-flex justify-center"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
      >
        <span>
          <img src={selectedLanguage.img} className="h-[28px] w-[44px]" />
        </span>
      </button>

      {isOpen && (
        <div
          id="dropdownHover"
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 flex flex-col items-center rounded-md
          w-[60px] z-10 divide-y divide-gray-100 shadow 
          bg-white dark:bg-gray-700"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {languages.map((language) => {
            if (language.code !== selectedLanguage.code)
              return (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language)}
                  className="block w-full text-center py-1"
                >
                  <img
                    src={language.img}
                    className="h-[28px] w-[44px] mx-auto"
                  />
                </button>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
