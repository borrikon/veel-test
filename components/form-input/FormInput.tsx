import { useState } from "react";

import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";

import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

function FormInput({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
  required = false,
  className = "",
}: FormInputProps) {
  const [visible, setVisible] = useState(false);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={clsx("flex flex-col gap-1", className)}>
          {label && (
            <label className="ml-2 text-gray-900">
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}
          <div className="relative">
            <Input
              {...field}
              type={type !== "password" ? type : visible ? "text" : "password"}
              placeholder={placeholder}
              disabled={disabled}
              className={clsx("border rounded px-3 py-2", {
                "border-red-500": error,
                "opacity-50 cursor-not-allowed": disabled,
              })}
            />
            {type === "password" && (
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
      )}
    />
  );
}

export default FormInput;
