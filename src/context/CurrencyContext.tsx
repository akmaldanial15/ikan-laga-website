"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Currency {
  code: string;     // e.g. "USD"
  symbol: string;   // e.g. "$"
  name: string;     // e.g. "US Dollar"
  rate: number;     // e.g. 0.21 (1 MYR = 0.21 USD)
}

// Backward-compatible type for components
export type CurrencyCode = string;

interface CurrencyContextType {
  currency: string;
  setCurrency: (code: string) => void;
  currencyList: Currency[];
  addCurrency: (c: Currency) => void;
  removeCurrency: (code: string) => void;
  updateCurrencyRate: (code: string, rate: number) => void;
  formatPrice: (priceInMYR: number) => string;
  getConvertedAmount: (priceInMYR: number) => number;
}

const DEFAULT_CURRENCIES: Record<string, Currency> = {
  MYR: { code: "MYR", symbol: "RM", name: "Malaysian Ringgit", rate: 1.0 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", rate: 0.21 },
  EUR: { code: "EUR", symbol: "€", name: "Euro", rate: 0.20 },
  TRY: { code: "TRY", symbol: "₺", name: "Turkish Lira", rate: 7.20 },
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "USD",
  setCurrency: () => {},
  currencyList: Object.values(DEFAULT_CURRENCIES),
  addCurrency: () => {},
  removeCurrency: () => {},
  updateCurrencyRate: () => {},
  formatPrice: (price) => `$${Math.round(price * 0.21)}`,
  getConvertedAmount: (price) => price,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<string>("USD");
  const [currencies, setCurrencies] = useState<Record<string, Currency>>(DEFAULT_CURRENCIES);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load configuration on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Get saved list of custom currencies
      const savedCurrenciesStr = localStorage.getItem("customCurrencies");
      let activeCurrencies = DEFAULT_CURRENCIES;
      
      if (savedCurrenciesStr) {
        try {
          const parsed = JSON.parse(savedCurrenciesStr) as Record<string, Currency>;
          if (parsed && Object.keys(parsed).length > 0) {
            // Force MYR to be present and set to 1.0
            parsed.MYR = DEFAULT_CURRENCIES.MYR;
            activeCurrencies = parsed;
            setCurrencies(parsed);
          }
        } catch (error) {
          console.error("Failed to parse custom currencies:", error);
        }
      }

      // 2. Get saved preferred currency code
      const savedCurrency = localStorage.getItem("preferredCurrency");
      if (savedCurrency && activeCurrencies[savedCurrency]) {
        setCurrencyState(savedCurrency);
      } else {
        // Fallback if saved currency is deleted or empty
        const defaultFallback = activeCurrencies["USD"] ? "USD" : "MYR";
        setCurrencyState(defaultFallback);
      }
      setIsInitialized(true);
    }
  }, []);

  const setCurrency = (newCurrency: string) => {
    if (currencies[newCurrency]) {
      setCurrencyState(newCurrency);
      if (typeof window !== "undefined") {
        localStorage.setItem("preferredCurrency", newCurrency);
      }
    }
  };

  const saveCurrenciesToStorage = (updatedList: Record<string, Currency>) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("customCurrencies", JSON.stringify(updatedList));
    }
  };

  const addCurrency = (c: Currency) => {
    const codeUpper = c.code.trim().toUpperCase();
    if (!codeUpper) return;

    const newCurrency: Currency = {
      code: codeUpper,
      symbol: c.symbol.trim() || "$",
      name: c.name.trim() || codeUpper,
      rate: c.rate || 1.0,
    };

    const updated = { ...currencies, [codeUpper]: newCurrency };
    setCurrencies(updated);
    saveCurrenciesToStorage(updated);
  };

  const removeCurrency = (code: string) => {
    const codeUpper = code.toUpperCase();
    if (codeUpper === "MYR") return; // Cannot delete base currency

    const updated = { ...currencies };
    delete updated[codeUpper];
    setCurrencies(updated);
    saveCurrenciesToStorage(updated);

    // If the deleted currency was selected, switch back to USD or MYR
    if (currency === codeUpper) {
      const fallback = updated["USD"] ? "USD" : "MYR";
      setCurrency(fallback);
    }
  };

  const updateCurrencyRate = (code: string, rate: number) => {
    const codeUpper = code.toUpperCase();
    if (!currencies[codeUpper] || codeUpper === "MYR") return;

    const updated = {
      ...currencies,
      [codeUpper]: {
        ...currencies[codeUpper],
        rate: rate,
      },
    };
    setCurrencies(updated);
    saveCurrenciesToStorage(updated);
  };

  const getConvertedAmount = (priceInMYR: number): number => {
    const activeCurr = currencies[currency] || currencies["MYR"];
    return Math.round(priceInMYR * activeCurr.rate);
  };

  const formatPrice = (priceInMYR: number): string => {
    const activeCurr = currencies[currency] || currencies["MYR"];
    const rounded = Math.round(priceInMYR * activeCurr.rate);

    if (activeCurr.code === "MYR") {
      return `RM ${rounded}`;
    }

    return `${activeCurr.symbol}${rounded}`;
  };

  const currencyList = Object.values(currencies);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencyList,
        addCurrency,
        removeCurrency,
        updateCurrencyRate,
        formatPrice,
        getConvertedAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
