import React, { Dispatch, SetStateAction } from "react";
import { currencyOptions } from "./CurrencyOptions";

interface CurrencySelectorProps {
  selectedCurrency: string;
  setSelectedCurrency: Dispatch<SetStateAction<string>>;
}

export const CurrencySelector: React.FunctionComponent<CurrencySelectorProps> = ({
  selectedCurrency,
  setSelectedCurrency
}: CurrencySelectorProps) => {
  return (
    <div className="mt-10 lg:mt-24 inline-block relative w-full md:max-w-md">
      <select
        onChange={(e) => setSelectedCurrency(e.target.value)}
        value={selectedCurrency}
        className="block appearance-none w-full bg-white border border-primary px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {currencyOptions.map((currency, i) => {
          return <option key={i}>{currency}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
