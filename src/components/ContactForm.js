import {
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
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import React from "react";
import { BsPerson, BsTwitter, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}  

export default class ContactForm extends React.Component {
  constructor (props) {
      super(props);

      this.onSubmit = props.onSubmit;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => this.onSubmit())
      .catch((error) => alert(error));
  };

  render() {
      return (
        <>
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
                    <a href={'https://www.facebook.com/WhiteStarCommunications/'}>
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsFacebook size="28px" />}
                      />
                    </a>

                    <a href={'https://www.linkedin.com/company/whitestar-communications-inc/'}>
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </a>

                    <a href={'https://twitter.com/SOCIETYAppMedia'}>
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsTwitter size="28px" />}
                      />
                    </a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem justifyContent={'center'} w={{base:'400px', md:'360px'}}>
                <Box align={'end'} bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                  <form name="contactForm" method="post" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                  <input type="hidden" name="form-name" value="contactForm"/>
                  <input type="hidden" name="bot-field" />
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input name="name" onChange={this.handleChange} required={true} type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input name="email" onChange={this.handleChange} required={true} type="email" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          required={true}
                          onChange={this.handleChange}
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <div data-netlify-recaptcha="true"></div>
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
        </>
      )
    }
}