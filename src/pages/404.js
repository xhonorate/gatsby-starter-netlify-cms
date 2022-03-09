import * as React from "react";
import Layout from "../components/Layout";
import { MDBContainer } from 'mdb-react-ui-kit';
import Lottie from "../components/Lottie";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <MDBContainer fluid>
      <Link to="/">
        <Lottie src="https://assets2.lottiefiles.com/packages/lf20_ntskvz2y.json" />
      </Link>
    </MDBContainer>
  </Layout>
);

export default NotFoundPage;
