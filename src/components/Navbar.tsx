import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from 'gatsby'
import AutoLink from "./AutoLink";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Spacer,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <StaticQuery
      query={graphql`
        query NavbarQuery {
          productsQuery: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
            frontmatter {
              products {
                heading
              }
            }
          }
          whitePapersQuery: allMarkdownRemark(
            filter: {frontmatter: {templateKey: {eq: "white-paper"}}}
          ) {
            edges {
              node {
                frontmatter {
                  selectedCategories
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const { products } = data.productsQuery.frontmatter;
        const whitePapers = data.whitePapersQuery.edges;
        let categories = [];

        whitePapers.forEach(whitePaper => {
          let selectedCategories = whitePaper.node.frontmatter.selectedCategories;
          if (selectedCategories && selectedCategories.length > 0) {
            let mainCategory = categories.find(category => category.key === selectedCategories[0]);

            if (mainCategory === undefined) {
              //create new dropdown for category name if one does not exist
              mainCategory =
                {
                  key: selectedCategories[0],
                  label: selectedCategories[0],
                  children: [],                
                }
              categories.push(mainCategory)
            }

            mainCategory.children.push({
              label: whitePaper.node.frontmatter.title,
              href: whitePaper.node.fields.slug,
            })
          }
        });

        const NAV_ITEMS: Array<NavItem> = [
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Products',
            children: products.map((product: any, index: number) => ({ key: product.heading, label: product.heading, href: `/#product-${index}`})),
          },
          {
            label: 'White Papers',
            href: '/whitepapers',
            children: categories,
          },
          {
            label: 'About WhiteStar',
            href: '#about',
            children: [
              {
                label: 'Announcements',
                href: '/announcements',
              },
            ],
          },
          {
            label: 'Careers',
            href: '/careers',
          },
          {
            label: 'Contact Us',
            href: '/#contact',
          },
        ];

        return(
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 6 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          justify={{ base: 'center' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} alignItems={'center'} justify={{ base: 'center' }}>
          <AutoLink to="/" style={{display: 'contents'}}>
            <StaticImage
                src="../img/Whitestar/Logo_Simple.png"
                alt='logo'
                placeholder="tracedSVG"
                layout="fixed"
                loading="eager"
                width={36}
                height={36}
              />
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily='Montserrat'
              letterSpacing={2}
              fontSize={32}
              fontWeight={500}
              px={2}
              color={useColorModeValue('primary.500', 'white')}>
              WhiteStar
            </Text>
          </AutoLink>
          <Spacer />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            { DesktopNav(NAV_ITEMS) }
          </Flex>
        </Flex>
        
        {/*<Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
          </Stack>*/}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        { MobileNav(NAV_ITEMS) }
      </Collapse>
    </Box>)}} />
  );
}

const DesktopNav = (NAV_ITEMS: Array<NavItem>) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('primary.600', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  const ref = React.createRef()

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <AutoLink
                ref={ref}
                _focus={{boxShadow:'none'}}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={15}
                fontWeight={500}
                fontFamily={'heading'}
                whiteSpace={'nowrap'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </AutoLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                _focus={{boxShadow:'xl'}}
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'xs'}>
                <Stack spacing={0}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav 
                      key={child.label} 
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel, children }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <AutoLink
      _focus={{boxShadow:'none'}}
      href={href}
      outline={'none'}
      role={'group'}
      display={'block'}
      fontSize={15}
      fontWeight={500}
      fontFamily={'heading'}
      p={2}
      rounded={'md'}
      onClick={children && onToggle}
      _hover={{ bg: useColorModeValue('primary.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            align={'start'}
            transition={'all .3s ease'}
            _groupHover={{ color: 'primary.600' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon 
              transition={'all .3s ease'}
              _groupHover={children && {transform: 'rotate(90deg)'}} 
              color={'primary.600'} 
              w={5} 
              h={5} 
              as={ChevronRightIcon} />
        </Flex>
      </Stack>

      <Collapse in={isOpen} animateOpacity >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <AutoLink 
                _focus={{boxShadow:'none'}}
                key={child.label} 
                py={2} 
                href={child.href} 
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{textDecoration: 'none', color: useColorModeValue('primary.600', 'white')}}
              >
                {child.label}
              </AutoLink>
            ))}
        </Stack>
      </Collapse>
    </AutoLink>
  );
};

const MobileNav = (NAV_ITEMS: Array<NavItem>) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={children ? null : (href ?? '#')}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={500}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <MobileNavSubItem key={child.label} {...child} />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const MobileNavSubItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleChildClick = (e) => {
    e.stopPropagation();
    onToggle();
  }

  return (
    <Stack width={'100%'} spacing={4} onClick={children && handleChildClick}>
      <Flex
        py={2}
        as={Link}
        href={children ? null : href ?? '#'}
        justify={'start'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={500}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            align={'start'}
            ms={1}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <MobileNavSubItem key={child.label} {...child} />
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}