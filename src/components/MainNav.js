import React, { useState } from 'react';

// pages
// import { ProductsPage } from '../../pages/ProductsPage/ProductsPage.component'
// import { ProductOptionsPage } from '../../pages/ProductOptionsPage/ProductOptionsPage.component'
// import { ProductPage } from '../../pages/ProductPage/ProductPage.component'
// import { CataloguePage } from '../../pages/CataloguePage/CataloguePage.component'
// import { PortfolioPage } from '../../pages/PortfolioPage/PortfolioPage.component'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export const MainNav = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar style={{backgroundColor: '#f1f1f1'}} light expand="md">
          <NavbarBrand href="/">
            Display Place</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            {/* <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/products" component='*'>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/catalogue" component='*'>Catalogue</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio" component='*'>Portfolio</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
};
