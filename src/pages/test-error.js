import React from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const TestError = () => {
  // This will throw an error to test our error boundary
  throw new Error("This is a test error to verify our error boundary works correctly");
  
  return (
    <Layout>
      <Head>
        <title>Test Error Page</title>
      </Head>
      <h1>This should not be visible</h1>
    </Layout>
  );
};

export default TestError;