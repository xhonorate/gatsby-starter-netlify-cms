import * as React from "react";
import { MDBScrollspySection, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PropTypes from "prop-types"
import Lottie from './Lottie';

export default function Hero(props) {
    const {
      heading,
      subheading,
      lottie
    } = props;

    return (
        <MDBScrollspySection id="hero" className="d-flex align-items-center">
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1">
                        <div>
                            <h1>{heading}</h1>
                            <h2>{subheading}</h2>
                        </div>
                    </MDBCol>
                    {lottie &&
                        <MDBCol className="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img">
                            <Lottie src={lottie} />
                        </MDBCol>
                    }
                </MDBRow>
            </MDBContainer>
        </MDBScrollspySection>
    );
}

Hero.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    lottie: PropTypes.string,
  };
  