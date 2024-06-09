"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { mounted, setMounted } = useState(false);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
