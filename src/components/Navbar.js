/*import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownDivider,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { GMDBDropdownLink, GMDBNavbarBrand, GMDBNavbarLink } from "./GatsbyMDB";
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'

const OffsetDropDown = ({children}) => {
  return (
    <MDBDropdown options={{
      modifiers:[
      {
        name: 'offset',
        options: {
          offset: [-6, 10],
        },
      }]}}>
      {children}
      </MDBDropdown>
  );
}

const NavbarTemplate = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBasic: false,
      scrolled: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount () {
    this.handleScroll(); //check if scrolltotop should be displayed initially as page loads
    window.addEventListener('scroll', this.handleScroll); //then add listener for scroll
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll () {
      if (window.scrollY > 100) {
          this.setState({
              scrolled: true
          });
      } else {
          this.setState({
              scrolled: false
          });
      }
  }

  render() {
    return (
      <MDBNavbar style={{transition: 'opacity 0.65s ease', opacity: (this.state.scrolled ? 0.9 : 1)}} sticky expand='lg' light color="blue" bgColor='light'>
      <MDBContainer /*fluid>
        <GMDBNavbarBrand to='/'>
            <StaticImage
              src="../img/Whitestar/Logo_Simple.png"
              alt='logo'
              placeholder="tracedSVG"
              layout="fixed"
              loading="eager"
              width={36}
              height={36}
            />
            <span className="navbar-brand-text">
            WhiteStar
            </span>
        </GMDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => this.setState({showBasic: !this.state.showBasic})}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={this.state.showBasic}>
          <MDBNavbarNav className='justify-content-between ps-2 mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <GMDBNavbarLink href='/' active aria-current='page'>
                Home
              </GMDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <OffsetDropDown scrolled={this.state.scrolled}>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                {this.props.products.map((product, index) => (
                    <MDBDropdownItem key={`product-nav-${index}`}>
                      <GMDBDropdownLink href={`/#product-${index}`} className="nav-link">{product.heading}</GMDBDropdownLink>
                    </MDBDropdownItem>
                ))}
                </MDBDropdownMenu>
              </OffsetDropDown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <OffsetDropDown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  White Papers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdown dropright>
                      <MDBDropdownToggle tag='a' className='nav-link' onClick={(e) => e.stopPropagation()}>
                        Dropdown
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <GMDBDropdownLink className="nav-link" href="/">Action</GMDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <GMDBDropdownLink className="nav-link">Another action</GMDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <GMDBDropdownLink className="nav-link">Something else here</GMDBDropdownLink>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link">Another action</GMDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownDivider></MDBDropdownDivider>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link">Something else here</GMDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </OffsetDropDown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <OffsetDropDown>
                <MDBDropdownToggle tag='a' href="#about" className='nav-link'>
                  About WhiteStar
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link" href="/announcements">Announcements</GMDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </OffsetDropDown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <GMDBNavbarLink href='/careers'>Careers</GMDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <GMDBNavbarLink href='/#contact'>Contact Us</GMDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    );
  }
};

NavbarTemplate.propTypes = {
  products: PropTypes.array,
  //whitepapers: PropTypes.array,
};

export default function Navbar() {
  return (
    <StaticQuery
      query={graphql`
        query NavbarQuery {
          markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
            frontmatter {
              products {
                heading
              }
            }
          }
        }
      `}
      render={(data) => <NavbarTemplate products={data.markdownRemark.frontmatter.products} />}
    />
  );
}*/