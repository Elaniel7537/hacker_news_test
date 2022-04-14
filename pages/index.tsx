import type { NextPage } from "next";
import { useAppSelector } from "@app/hooks";
import { RootStateOrAny } from "react-redux";

const Home: NextPage = () => {
  const { testMessage } = useAppSelector((state: RootStateOrAny) => state.test);
  return (
    <>
      <div>Hola desde pagina. {testMessage}</div>
    </>
  );
};

export default Home;
