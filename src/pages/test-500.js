import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const Test500Error = () => {
  // This will throw an error to test our custom error page
  throw new Error("This is a test 500 error");
  
  return (
    <Layout>
      <Head>
        <title>Test 500 Error Page</title>
      </Head>
      <h1>This should not be visible</h1>
    </Layout>
  );
};

export async function getServerSideProps() {
  // This will cause a 500 error on the server side
  throw new Error("This is a test server-side error");
}

export default Test500Error;