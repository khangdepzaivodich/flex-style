"use client";
import { SuKienUuDai } from "@/lib/types";
import { createContext, useContext } from "react";

interface SuKienUuDaiContextType {
  suKienUuDais: SuKienUuDai;
  isLoading: boolean;
}

const SuKienUuDaiContext = createContext<SuKienUuDaiContextType | undefined>(
  undefined
);

export function SuKienUuDaiProvider({
  children,
  suKienUuDais,
  isLoading,
}: {
  children: React.ReactNode;
  suKienUuDais: SuKienUuDai[];
  isLoading: boolean;
}) {
  return (
    <SuKienUuDaiContext.Provider value={{ suKienUuDais, isLoading }}>
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
