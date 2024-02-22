import "./App.css";
// import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
// import Singup from "./Component/Pages/Singup";
import Search from "./Component/Search";
import YogaSessionCard from "./Component/YogaSessionCard";

function App() {
  
  // const count = useSelector((state) => state.val);
  

  
  return (
    <>
    <div>
 
    </div>
      <div className="ml-9 mr-9 ">
        <Navbar></Navbar>
        <Search></Search>
        <YogaSessionCard></YogaSessionCard>
        {/* <Singup></Singup> */}
      </div>
    </>
  );
}

export default App;
