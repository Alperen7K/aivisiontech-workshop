import "./App.css";
import { Navbar } from "./component";
import { Ai4sports } from "./sections";

// #D6E1ED beyazımsı
// #5DB19B yeşil
// #4E9CE8 mavimsi
// #F77F93 PEMBE

export const App = () => {
  return (
    <div className="bg-[#D6E1ED] bg-pattern h-[100vh] w-[100vw]  flex flex-col items-center">
      <Navbar />
      <Ai4sports className={""} />
    </div>
  );
};

