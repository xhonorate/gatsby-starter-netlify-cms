import * as React from "react";
import { Link } from "gatsby";
import { MDBContainer } from 'mdb-react-ui-kit';
import BackToTop from './BackToTop';

const Footer = class extends React.Component {
  render() {
    return (
        <footer id="footer" className="footer-clean pt-5">
            <MDBContainer>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 text-center text-md-end"><Link to="/tos">Terms of Service</Link></div>
                    <div className="col-12 col-md-6 text-center text-md-start"><Link to="/privacy-policy">Privacy Policy</Link></div>
                    <div className="col-auto text-center item social">
                        <p className="copyright">Copyright ©2022 WhiteStar Communications, Inc - All rights reserved.<br/>
                        Site designed by&nbsp;<Link to="/">WhiteStar Communications, Inc.</Link><br/>
                        </p>
                    </div>
                </div>
            </MDBContainer>
            <BackToTop />
        </footer> 
    );
  }
};

export default Footer;
