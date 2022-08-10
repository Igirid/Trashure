import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <div className="">
      <Navbar></Navbar>
      {props.children}{" "}
    </div>
  );
};

export default Layout;
