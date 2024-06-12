import React, { useEffect, useState } from "react";
import axios from "axios";

const currencies = [
  { from: "USD", to: "RUB" },
  { from: "EUR", to: "RUB" },
  { from: "GBP", to: "RUB" },
  { from: "JPY", to: "RUB" },
  { from: "AUD", to: "RUB" },
  { from: "CAD", to: "RUB" },
];

const ExchangeRates: React.FC = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [lastChecked, setLastChecked] = useState<string>("");

  const GroupImage = require("../img/ExchangeRates/Group.svg").default;
  const apiKey = ""; //Не забыть ключ, Не забыть ключ, Не забыть ключ, Не забыть ключ, Не забыть ключ, Не забыть ключ, Не забыть ключ, Не забыть ключ, 
  const intervalMs = 15 * 1000 * 60;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const fetchedRates: { [key: string]: number } = {};
        for (const { from, to } of currencies) {
          const response = await axios.get(
            "https://currency-exchange.p.rapidapi.com/exchange",
            {
              params: { from, to, q: "1.0" },
              headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
              },
            }
          );
          fetchedRates[from] = response.data;
        }
        setRates(fetchedRates);
        setLastChecked(new Date().toLocaleString());
      } catch (error) {
        console.error(error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <section className="exchange-rates">
      <div className="exchange-rates__blockUp">
        <h2 className="exchange-rates__title">
          Exchange rate in internet bank
        </h2>
        <p className="exchange-rates__last-checked">
          Update every 15 minutes, MSC {lastChecked}
        </p>
      </div>
      <p className="exchange-rates__currency">Currency</p>
      <div className="exchange-rates__blockDown">
        <div className="exchange-rates__list">
          {Object.entries(rates).map(([currency, rate]) => (
            <div key={currency} className="exchange-rates__item">
              {currency}: {rate.toFixed(2)}
            </div>
          ))}
        </div>
        <div className="exchange-rates__image">
          <img src={GroupImage} alt="Group" />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
