import React from "react";
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

const OffsetDropDown = ({children}) => {
  return (
    <MDBDropdown options={{
      modifiers:[
      {
        name: 'offset',
        options: {
          offset: [-6, 8],
        },
      }]}}>
      {children}
      </MDBDropdown>
  );
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBasic: false,
    };
  }

  render() {
    return (
      <MDBNavbar expand='lg' light color="blue" bgColor='light'>
      <MDBContainer /*fluid*/>
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
              <GMDBNavbarLink href='/home' active aria-current='page'>
                Home
              </GMDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <OffsetDropDown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Products
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link">Society Mobile App</GMDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link">WhiteStar Technologies</GMDBDropdownLink>
                  </MDBDropdownItem>
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
                <MDBDropdownToggle tag='a' className='nav-link'>
                  About WhiteStar
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <GMDBDropdownLink className="nav-link">Announcements</GMDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </OffsetDropDown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <GMDBNavbarLink href='#'>Careers</GMDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <GMDBNavbarLink href='#'>Contact Us</GMDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    );
  }
};

export default Navbar;
