import "./App.css";
import { Navbar } from "./component";
import { Ai4sports, Products } from "./sections";
import { useEffect, useState } from "react";
import { useStore } from "./zustandStore";

// #D6E1ED beyazımsı
// #5DB19B yeşil
// #4E9CE8 mavimsi
// #F77F93 PEMBE

export const App = () => {
  const [isView, setIsView] = useState(false);
  const { theme } = useStore();

  return (
    <div
      className={`${theme.bgColor} duration-200 ${theme.textColor}  h-[100vh] w-[100vw]  flex flex-col items-center`}
    >
      <Navbar isView={isView} />

      <div className="w-full h-[86vh]">
        <Ai4sports className={""} />
        <Products setIsView={setIsView} />
      </div>
    </div>
  );
};
