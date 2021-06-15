import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';

const IndexPage = () => (
  <>
    <style jsx global>
      {`
        body {
          margin: 0px;
        }
      `}
    </style>
    <Layout>
      <h1>Hello Next.js!!! 👋</h1>
    </Layout>
  </>
);
export default IndexPage;
