"use client";

import { useContext } from "react";
import { ProviderContext } from "./ContextProvider";

export default function UseAuth() {
  return useContext(ProviderContext);
}
