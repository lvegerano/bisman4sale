import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

interface IInputProps {
  label?: string;
  showLabel?: boolean;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Input = ({
  label = 'Input',
  showLabel = true,
  error = '',
  disabled = false,
  placeholder,
  setValue,
}: IInputProps) => {
  const disabledClasses =
    'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm';
  const errorClasses =
    'block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm';
  const base =
    'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm';
  return (
    <div>
      {showLabel && (
        <label htmlFor="input-box" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          name="input-box"
          id="input-box"
          className={cn({
            [`${base}`]: !(Boolean(error) || disabled),
            [`${disabledClasses}`]: disabled,
            [`${errorClasses}`]: Boolean(error),
          })}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby="input-box-error"
          onInput={(e: ChangeEvent<HTMLInputElement>) => setValue?.(e.target.value)}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="input-box-error ">
          Your password must be less than 4 characters.
        </p>
      )}
    </div>
  );
};

export default Input;
