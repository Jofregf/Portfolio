import React from "react";
import Link from "next/link";
import Layout from "../Components/Layout";

function custom404() {
  return (
    <Layout>
      <div className="container-404">
        <h2 className="title-404">404</h2>
        <p className="msg-404">
          {" "}
          This page does not exist. Please return to{" "}
          <Link href="/">
            <a className="msg-404">Home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default custom404;
