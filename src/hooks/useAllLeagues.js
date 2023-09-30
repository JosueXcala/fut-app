"use client";
import axios from "axios";
import { useState } from "react";

export const useAllLeagues = async () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [leagues, setLeagues] = useState([]);
  try {
    const response = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
    );
    console.log(await response.json());
    const leaguesResponse = await response.json();
    console.log(leaguesResponse);

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
