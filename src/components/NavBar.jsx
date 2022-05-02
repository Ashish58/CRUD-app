import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  position: static;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  color:white;
  text-decoration:none; 
`;

const NavBar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs to="/" className='nav'>CURD-APP</Tabs>
        <Tabs to="/alluser" className='nav'>Show User</Tabs>
        <Tabs to="/adduser" className='nav'> Add User</Tabs>
      </Toolbar>
    </Header>
  );
};
export default NavBar;
