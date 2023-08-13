import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Homepage() {
  const [dark, setDark] = useState(false);

  const handleDark = () => {
    setDark(!dark);
    dark
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  };

  return (
    <div className="flex h-screen flex-col justify-between bg-off-white dark:bg-darker-gray">
      <Navbar dark={dark} handleDark={handleDark} />
      <Footer dark={dark} handleDark={handleDark} />
    </div>
  );
}

export default Homepage;
