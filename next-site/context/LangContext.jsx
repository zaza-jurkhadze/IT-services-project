"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { STR } from "@/i18n/strings";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const s = localStorage.getItem("tsg-lang");
      if (s === "en" || s === "ka") return s;
    } catch {
      /* ignore */
    }
    return "ka";
  });

  const setLang = useCallback((l) => {
    if (l !== "en" && l !== "ka") return;
    setLangState(l);
    try {
      localStorage.setItem("tsg-lang", l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const t = useCallback((key) => STR[lang][key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
