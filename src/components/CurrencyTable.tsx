import React from "react";

interface CurrencyTableProps {
  apiData: Object | null;
  selectedCurrency: string;
}

let counter = 1;

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 5,
  maximumFractionDigits: 5
});

export const CurrencyTable: React.FunctionComponent<CurrencyTableProps> = ({
  apiData,
  selectedCurrency
}: CurrencyTableProps) => {
  if (apiData) {
    return (
      <table className="mt-12 md:mt-16 mb-12 md:mb-0 table-auto w-full">
        <thead className="bg-accent text-white">
          <tr>
            <th className="px-4 py-2">Exchange</th>
            <th className="px-4 py-2">Value(USD)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(apiData).map(([key, value]) => {
            const classNameContainer =
              counter % 2 === 0 ? "bg-secondary" : "bg-gray-300";
            counter = counter + 1;
            return (
              <tr className={classNameContainer} key={counter}>
                <td className="border px-4 py-2">{key}</td>
                <td className="border px-4 py-2">{formatter.format(value)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="mt-12 px-2 py-4 bg-secondary rounded-lg">
        <p className="text-center tracking-wide font-medium text-accent leading-loose md:text-xl lg:px-16">
          Retrieving {selectedCurrency} price...
        </p>
      </div>
    );
  }
};
