import { UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  error: boolean;
  helperText: string | undefined;
  register: UseFormRegisterReturn;
};

const FormInput = ({
  id,
  label,
  error,
  helperText,
  register,
}: FormInputProps) => {
  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          id={id}
          className={`block px-2.5 pb-2.5 pt-4 w-full 
          font-body font-normal text-base text-text
            bg-transparent rounded-lg border-2 
            border-gray-700 
            ${error ? "border-red-700" : ""} 
            appearance-none
              dark:focus:border-blue-500 
             focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=""
          {...register}
        />
        <label
          htmlFor={id}
          className="absolute text-base text-text duration-300 transform -translate-y-4 
            scale-75 top-2 z-10 origin-[0] px-2 
            peer-focus:px-2 
            peer-[not:(:placeholder-shown)]: bg-background
            peer-[not:(:placeholder-shown)]: pl-1
            peer-[not:(:placeholder-shown)]: ml-1
            peer-focus:text-[#6b66ff]
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:-translate-y-1/2 
            peer-placeholder-shown:top-1/2 
            peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 
            rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="block px-2.5 pb-2.5 mb-4 w-full text-base text-red-500 ">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormInput;
