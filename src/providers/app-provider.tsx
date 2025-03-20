"use client";

import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "@/providers/redux-provider";
import React from "react";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </SessionProvider>
  )}