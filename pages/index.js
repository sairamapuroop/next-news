// import Head from "next/head";
// import Image from "next/image";
// import Toolbar from "../components/toolbar";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="page-container">
        {/* <Toolbar /> */}

        <div className={classes.main}>
          <h1>Next.js News App</h1>

          <h3>Your one stop destination for all the latest News Articles</h3>
        </div>
      </div>
    </>
  );
}
