import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <Layout>
      {" "}
      <div className={styles.Dump}>
        {/* <img src={Dump} alt="" className="img-fluid" /> */}
      </div>
    </Layout>
  );
};

export default Home;
