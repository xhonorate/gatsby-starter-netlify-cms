import React from 'react';
import { MDBContainer, MDBScrollspySection, MDBInput, MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

export default class Contact extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        open: false
      }

      this.onStateChange = props.onStateChange;
    }
  
    toggleShow = () => {
        this.setState({
            open: !this.state.open
        })
    }

    componentDidMount() {
        this.toggleShow = this.toggleShow.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({ open: props.open })
    }

    render () {
        return (
            <div id="contact">
                <MDBBtn onClick={this.toggleShow} color="primary" className="w-100 h1 mb-0" style={{boxShadow: 'none', textTransform: 'none', borderRadius: '0px', background: '#5777ba', borderColor: 'var(--ws-dark)'}}>
                    {this.state.open ? <i className='fas fa-chevron-up' />: <h5 style={{marginBottom: '3px', fontSize: '1rem', fontWeight: '700'}}>Contact Us</h5>}
                </MDBBtn>
                <MDBCollapse show={this.state.open}>
                    <MDBScrollspySection id="contact" className="contact py-5" style={{background: "#5777ba"}}>
                        <MDBContainer>
                            <form className="section-title php-email-form" data-bss-recipient="c5e4d20787c5e2c6b1dc24a8152025f0" data-bss-subject="New Contact Form Submission from Whitestar.io">
                                <div>
                                    <h2 className="text-center" style={{color: "var(--bs-light)"}}>Contact WhiteStar Now</h2>
                                </div>
                                <div className="mb-3"><MDBInput contrast className="form-control" type="text" name="name" placeholder="Name" required="" /></div>
                                <div className="mb-3"><MDBInput contrast className="form-control" type="email" name="email" placeholder="Email" required="" /></div>
                                <div className="mb-3"><MDBInput contrast className="form-control" textarea name="message" label="Message" placeholder="Message" rows={7} required=""></MDBInput></div>
                                <div className="mb-3"><MDBBtn rounded color="light" type="submit">Send</MDBBtn></div>
                            </form>
                        </MDBContainer>
                    </MDBScrollspySection>
                </MDBCollapse>
            </div>
        );
    }
}