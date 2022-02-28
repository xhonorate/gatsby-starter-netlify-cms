import React from "react";
import { Link } from "gatsby";
import {
  MDBNavbarLink,
  MDBDropdownLink,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

//Wrappers for MDB link elements to use Gatsby Links
const GMDBNavbarLink = (props) => {
    const to = props.to || props.href || props.url;
    return (
        <Link to={to}>
            <MDBNavbarLink tag={props.tag || 'div'} {...props}>
                {props.children}
            </MDBNavbarLink>
        </Link>
    );
}

const GMDBDropdownLink = (props) => {
    const to = props.to || props.href || props.url;
    return (
        <Link to={to}>
            <MDBDropdownLink tag={props.tag || 'div'} {...props}>
                {props.children}
            </MDBDropdownLink>
        </Link>
    );
}

const GMDBNavbarBrand = (props) => {
    const to = props.to || props.href || props.url;
    return (
        <Link to={to}>
            <MDBNavbarBrand tag={props.tag || 'div'} {...props}>
                {props.children}
            </MDBNavbarBrand>
        </Link>
    );
}

export { GMDBNavbarLink, GMDBDropdownLink, GMDBNavbarBrand };