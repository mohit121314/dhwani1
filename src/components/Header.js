import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ghostwhite;
`;

const Headerbase = styled.ul`
  display: flex;
  margin: none;
  margin: 0;
  list-style-type: none;
  padding: 10px;
`;

const Listhome = styled.li`
  padding-left: 930px;
  font-size: 25px;
`;

const List = styled.li`
  padding-left: 45px;
  font-size: 25px;
  :active {
    color: black;
  }
`;

const Logo = styled.img`
  border-radius: 55%;
  border: 2px solid green;
  width: 2%;
  margin-top: 4px;
  margin-left: 5px;
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Headerbase>
          <Logo src="https://s3-us-west-1.amazonaws.com/sp-prod-s3-assets/web/video_creatives/harper/assets/placeholder-logo-white-knockout.png?auto=compress%2Cformat&fit=max&ixlib=react-8.6.3" />
          <Listhome>
            <NavLink style={{ textDecoration: "none" }} to="/home">
              Home
            </NavLink>
          </Listhome>
          <List>
            <NavLink style={{ textDecoration: "none" }} to="/state">
              State
            </NavLink>
          </List>

          <List>
            <NavLink style={{ textDecoration: "none" }} to="/district">
              District
            </NavLink>
          </List>
          <List>
            <NavLink style={{ textDecoration: "none" }} to="/child">
              Child
            </NavLink>
          </List>
          <List>
            <NavLink style={{ textDecoration: "none" }} to="/">
              Logout
            </NavLink>
          </List>
        </Headerbase>
      </Wrapper>
    );
  }
}
