import React, { useState, useEffect } from "react";
import axios from "axios";
import { container } from "./constants";
import { Header } from "./components/Header";
import DigitalCurrencyIcon from "./resources/digital-currency-icon.png";
import { CurrencySelector } from "./components/CurrencySelector";
import { CurrencyTable } from "./components/CurrencyTable";
import { api } from "./constants";

const App: React.FunctionComponent = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("BTC-LTC");
  const [apiData, setApiData] = useState<Object | null>(null);

  const getPriceFromApi = async () => {
    setApiData(null);

    const { data } = await axios.get(api, {
      params: {
        pair: selectedCurrency,
        amount: 1
      }
    });
    setApiData(data);
  };

  useEffect(() => {
    getPriceFromApi();
  }, [selectedCurrency, setSelectedCurrency]);

  return (
    <main className="bg-white w-screen h-screen">
      <Header />
      <div className={container}>
        <div className="lg:flex lg:mt-24 lg:items-center">
          <div className="lg:w-1/2">
            <img
              className="max-w-xs mx-auto md:max-w-md xl:max-w-xl"
              src={DigitalCurrencyIcon}
              alt="digital currency"
            />

            <div className="mt-3 px-2 py-4 bg-secondary rounded-lg">
              <p className="text-center tracking-wide font-medium text-accent leading-loose md:text-xl lg:px-16">
                Compare cryptocurrency exchange rates within seconds
              </p>
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:w-1/2 lg:ml-16">
            <div className="flex justify-center">
              <CurrencySelector
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />
            </div>

            <CurrencyTable
              apiData={apiData}
              selectedCurrency={selectedCurrency}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
