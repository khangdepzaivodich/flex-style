"use client";
import { SuKienUuDai } from "@/lib/types";
import { createContext, useContext, useState } from "react";

interface SuKienUuDaiContextType {
  suKienUuDais: SuKienUuDai;
  isLoading: boolean;
  setSuKienUuDais: React.Dispatch<React.SetStateAction<SuKienUuDai>>;
}

const SuKienUuDaiContext = createContext<SuKienUuDaiContextType | undefined>(
  undefined
);

export function SuKienUuDaiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [suKienUuDais, setSuKienUuDais] = useState<SuKienUuDai>(
    {} as SuKienUuDai
  );
  const isLoading = false;
  return (
    <SuKienUuDaiContext.Provider
      value={{ suKienUuDais, isLoading, setSuKienUuDais }}
    >
      {children}
    </SuKienUuDaiContext.Provider>
  );
}

export function useSuKienUuDai() {
  const context = useContext(SuKienUuDaiContext);
  if (context === undefined) {
    throw new Error("useSuKienUuDai cần có SuKienUuDaiProvider");
  }
  return context;
}
