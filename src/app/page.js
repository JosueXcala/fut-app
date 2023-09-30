"use client";
import { useAllLeagues } from "../hooks/useAllLeagues";

const Page = () => {
  const { leagues, isLoading, error } = useAllLeagues;
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(isLoading);

  console.log(leagues);
  return <h1 className='text-5xl text-center'>FUT APP</h1>;
};

export default Page;
