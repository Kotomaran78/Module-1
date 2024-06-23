import React, { useEffect, useState } from "react";
import axios from "axios";
import { currencies } from "./constants";
import GroupImage from "../../assets/img/Group.png";
import { apiKey } from "./apiKey";
import { Rate } from "./types";
import "./styles/ExchangeRates.scss";

const ExchangeRates: React.FC = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const [lastChecked, setLastChecked] = useState<string>("");
  const intervalMs = 15 * 1000 * 60;

  const fetchRates = async () => {
    try {
      const fetchedRates: Rate[] = [];
      for (const { from, to } of currencies) {
        const response = await axios.get(
          "https://currency-exchange.p.rapidapi.com/exchange",
          {
            params: { from, to, q: "1.0" },
            headers: {
              "x-rapidapi-key": apiKey,
              "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            },
          },
        );
        fetchedRates.push({ from, to, rate: parseFloat(response.data) });
      }
      setRates(fetchedRates);
      setLastChecked(new Date().toLocaleString());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
          {rates.map(({ from, to, rate }) => (
            <div key={`${from}-${to}`} className="exchange-rates__item">
              {from}: {rate.toFixed(2)}
            </div>
          ))}
        </div>
        <div className="exchange-rates__image">
          <img src={String(GroupImage)} alt="Group" />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
