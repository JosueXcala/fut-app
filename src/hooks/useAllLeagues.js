"use client";
import { useState } from "react";

export const useAllLeagues = async () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [leagues, setLeagues] = useState([]);
  try {
    const response = await fetch(
      "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
    );
    if (!response.ok) {
      throw new Error("Network response wast no Ok");
    }
    const leaguesResponse = await response.json();
    console.log(leagues);
    setLeagues([leaguesResponse]);
    setIsLoading(false);
  } catch (error) {
    setError(`Ups some sings looks like were wrong ${error}`);
  }
  return {
    isLoading,
    error,
    leagues,
  };
};

export default useAllLeagues;
