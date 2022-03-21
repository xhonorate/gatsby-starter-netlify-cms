import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import React from "react";
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  export default class ContactForm extends React.Component {
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
    }

    componentWillReceiveProps(props) {
        this.setState({ open: props.open })
    }

    render() {
        return (
          <>
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
                    <Wrap align={'center'} justify={{base: 'center', md: 'space-between'}} spacing={{ base: 6, sm: 10, md: 18 }}>
                <WrapItem align={'center'}>
                  <Box>
                  <Heading>Contact WhiteStar</Heading>
                    <Text color="gray.500">
                      Fill in the form or click one of the links below
                    </Text>
                    <Box py={{ base: 0, sm: 3, md: 5, lg: 7 }}>
                      <VStack display={{base: 'none', md: 'flex'}} pl={0} spacing={3} alignItems="center">
                        <Button isFullWidth={true}
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +1 (770)-265-0426
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          support@whitestar.io
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Durham, NC, USA
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      justify={'space-evenly'}
                      mt={{ lg: 10, md: 10 }}
                      spacing={{base: 14, md: 5}}
                      px={5}
                      alignItems="center">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem justifyContent={'center'} w={{base:'400px', md:'360px'}}>
                  <Box align={'end'} bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                    <form name="contactForm" method="POST" data-netlify="true" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="contactForm" />
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name">
                          <Button
                            type="submit"
                            variant="solid"
                            bg="primary.500"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                      </form>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
      }
  }