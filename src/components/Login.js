import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../actions/index";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Subwrap = styled.div`
  margin-left: 0%;
`;

const Logo = styled.img`
  border-radius: 60%;
  border: 3px solid green;
  width: 8%;
  margin-top: 120px;
  margin-left: 47%;
`;
const InputFields = styled.input`
  border: none;
  width: 20%;
  border-bottom: 2px solid lightgray;
  margin: 41px 43px 40px 620px;
  background-color: transparent;
  height: 25px;
  outline: none;
`;
const Button = styled.button`
width: 10%;
margin: 10px 10px 10px 698px;
background-color: green;
border: 10px solid green;
border-radius: 3%;
color:white;
outline:none;
}
`;

const Heading = styled.h2`
  margin-left: 745px;
  margin-top: 15px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  login() {
    const { getUser } = this.props;
    const { username, password } = this.state;
    getUser(username, password);
  }

  render() {
    return (
      <Wrapper>
        <Subwrap>
          <Logo src="https://s3-us-west-1.amazonaws.com/sp-prod-s3-assets/web/video_creatives/harper/assets/placeholder-logo-white-knockout.png?auto=compress%2Cformat&fit=max&ixlib=react-8.6.3" />
          <Heading>Login</Heading>
          <InputFields
            type="text"
            placeholder="Username"
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <InputFields
            type="password"
            placeholder="Password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <Button type="button" onClick={() => this.login()}>
            LOGIN
          </Button>
        </Subwrap>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    user_data: state.login.user_data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
