import React from 'react';
import {
  Box,
  Center,
  Text,
  Icon,
  Button,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { transform } from 'lodash';


const WhitePaperCard = ({ title, subheading, icon, slug, py=6}) => {
  
  library.add(fas);

  return (
    <Center py={py}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Stack textAlign={'center'} h={{base: 400, sm: 380, md: 360, lg: 330}} bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>

          <Icon as={FontAwesomeIcon} icon={icon.split(' ')} color={'primary.500'} h={100} w={100} pb={5} alignSelf={'center'} />
          <Heading fontSize={'xl'} mb={2}>
            {title}
          </Heading>
          <Text noOfLines={{base:3, lg:2}} color={'gray.500'} flex={1}>
            {subheading}
          </Text>
          <Link to={slug} color={'primary.500'} >
            <Text mt={'auto'} color={'primary.500'} justifyContent={'center'} _hover={{color: 'primary.400'}}>
              Learn More 
              <Icon 
                px={1}
                as={FontAwesomeIcon} 
                icon={['fas', 'angles-right']} 
                h={'0.8em'} 
                w={'0.8em'} 
              />
            </Text>
          </Link>
        </Stack>
      </Box>
    </Center>
)};

export default WhitePaperCard;