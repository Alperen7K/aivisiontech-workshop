import "./App.css";
import { Navbar } from "./component";
import { Ai4sports, News, Products, About, Contact } from "./sections";
import { useStore } from "./zustandStore";

// #D6E1ED beyazımsı
// #5DB19B yeşil
// #4E9CE8 mavimsi
// #F77F93 PEMBE

export const App = () => {
  const { theme } = useStore();

  return (
    <div
      className={`${theme.bgColor} duration-200 ${theme.textColor}  h-[100vh] w-[100vw]  flex flex-col items-center`}
    >
      <Navbar />

      <div className="w-full h-[86vh]">
        <Ai4sports className={""} />
        <div className={`w-full h-[100px] ${theme.bgColor} `} />
        <Products />
        <div className={`w-full h-[100px] ${theme.bgColor} `} />
        <News />
        <div className={`w-full h-[100px] ${theme.bgColor} `} />
        <About />
        <div className={`w-full h-[100px] ${theme.bgColor} `} />
        <Contact />
      </div>
    </div>
  );
};
