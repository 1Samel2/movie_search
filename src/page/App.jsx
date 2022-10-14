import { Outlet } from "react-router-dom";
import Navbar from "../components/MovieSearch";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;