// Web5Context.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";

const Web5Context = createContext();

export const Web5Provider = ({ children }) => {
  const [web5, setWeb5] = useState(null);
  const [did, setMyDid] = useState(null);
  console.log({ web5 });

  useEffect(() => {
    const initWeb5 = async () => {
      try {
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setMyDid(did);
      } catch (error) {
        console.error("Error initializing Web5:", error);
      }
    };
    initWeb5();
  }, []);

  return (
    <Web5Context.Provider value={{ web5, did }}>
      {children}
    </Web5Context.Provider>
  );
};

export const useWeb5 = () => {
  const context = useContext(Web5Context);
  if (!context) {
    throw new Error("useWeb5 must be used within a Web5Provider");
  }
  return context;
};
