"use client";

import React from 'react';
import PhoneInput from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const INPUT_CLASSES =
  "w-full px-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900/30 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500";

// Module-level stable input component so PhoneInput doesn't remount the input on every render.
const CustomInput = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>((props, ref) => {
  const { className: incomingClassName, ...rest } = props || {};
  const merged = [INPUT_CLASSES, incomingClassName].filter(Boolean).join(' ');
  return <input ref={ref} {...rest} className={merged} />;
});
CustomInput.displayName = 'CustomInput';

interface Props {
  value: string | undefined | null;
  onChange: (val: string | undefined) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  defaultCountry?: Country;
}

export default function CountryPhoneInput({
  value,
  onChange,
  id,
  placeholder,
  required,
  className,
  defaultCountry = 'IN',
}: Props) {
  // input uses module-level INPUT_CLASSES and CustomInput

  return (
    <div className={className}>
      <PhoneInput
        international
        defaultCountry={defaultCountry}
        value={value || undefined}
        onChange={onChange}
        id={id}
        placeholder={placeholder || 'Enter phone number'}
        required={required}
        inputComponent={CustomInput}
      />
    </div>
  );
}
