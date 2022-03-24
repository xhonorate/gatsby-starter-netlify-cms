import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
  } from '@chakra-ui/react';
import React from "react";
import ContactForm from './ContactForm';

export default class ContactModal extends React.Component {
    constructor (props) {
        super(props);
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
  
        let isBrowser = () => typeof window !== "undefined";
        if (isBrowser && window.location.hash == "#contactForm" && !this.state.open) {
            this.setState({open: true});
        }
    }
  
    componentWillReceiveProps(props) {
        this.setState({ open: props.open })
    }
  
    render() {
        return (
          <Modal
          size={'xl'}
          isCentered
          onClose={this.toggleShow}
          isOpen={this.state.open}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
            <ModalContent
                maxW={{base: '450px', md: 'container.md'}}
                bg="#02054B"
                color="white"
                borderRadius="lg">
                <ModalCloseButton mt={{base: 10, sm: 2}} />
                <ModalBody>
                    <ContactForm onSubmit={this.toggleShow} />
                </ModalBody>
            </ModalContent>
        </Modal>
        )
    }
}