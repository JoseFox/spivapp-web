import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <div className={props.className}>
      <label className="block" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`p-2 w-full bg-indigo-100 rounded-sm ${
          error ? "border-red-500 border-2" : ""
        }`}
        id={props.name}
        placeholder={props.placeholder}
      />
      {error ? <div className="text-red-500">{error}</div> : null}
    </div>
  );
};
