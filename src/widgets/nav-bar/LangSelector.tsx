import { useState } from "react";

import { lang } from "../../constants/index";

const languages = lang.map((language) => {
  return Object.assign(language, { available: false });
});

const LangSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`content-center h-[28px] w-[44px] relative inline-block`}>
      <button
        type={"button"}
        onClick={() => setIsOpen((state) => !state)}
        className="inline-flex w-full justify-center gap-x-1.5"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span>
          <img src={selectedLanguage.img} className={`h-[28px] w-[44px]`} />
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute  border-red-500 border-4  h-[300px] flex flex-col items-start rounded-lg p-2 w-full z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {languages.map((language) => {
            if (language.id !== selectedLanguage.id)
              return (
                <button
                  key={language.id}
                  onClick={() => setSelectedLanguage(language)}
                  className={` mt-5  top-10 left-0 block absolute z-1`}
                >
                  <img src={language.img} className={`h-[28px] w-[44px]`} />
                </button>
              );
          })}
        </div>
      )}
    </div>
    // </div>
  );
};

export default LangSelector;
