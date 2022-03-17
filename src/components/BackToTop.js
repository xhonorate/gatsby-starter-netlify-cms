import React from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

//Wrappers for MDB link elements to use Gatsby Links
class BackToTop extends React.Component {
    constructor (props) {
        super(props);
        this.state = { active: false };
        this.handleScroll = this.handleScroll.bind(this);

        this.isBrowser = () => typeof window !== "undefined";
    }

    render() {
        return (
            <MDBBtn href="#" className={"back-to-top d-flex align-items-center justify-content-center" + (this.state.active ? " active" : "")}>
                <i className="fas fa-angle-up"></i>
            </MDBBtn>
        );
    }

    componentDidMount () {
        this.handleScroll(); //check if scrolltotop should be displayed initially as page loads
        this.isBrowser() && window.addEventListener('scroll', this.handleScroll); //then add listener for scroll
    }
    
    componentWillUnmount () {
        this.isBrowser() && window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        if (window.scrollY > 100) {
            this.setState({
                active: true
            });
        } else {
            this.setState({
                active: false
            });
        }
    }
}

export default BackToTop;