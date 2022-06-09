import logo from "./logo.svg";
import "./App.css";
import ProjectCategories from "./components/ProjectCategories";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Testimonial from "./components/Testimonial";
import { useAppContext } from "./AppContext";

function App() {
  // const [isLoading, setisLoading] = useState(true);
  const { isLoading, setIsLoading } = useAppContext();
  const preloader = document.querySelector("#preloader-section");

  useEffect(() => {
    let timeout;
    if (preloader) {
      timeout = setTimeout(() => {
        setIsLoading(false);
        preloader.style.display = "none";
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isLoading == false]);

  return !isLoading ? (
    <>
      <ProjectCategories />
      <Testimonial />
    </>
  ) : null;
  // return <Loading />;
}

export default App;
