import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getState } from "../actions/state";
import { addState } from "../actions/state";

const Wrapper = styled.div`
  display: flex;
`;

const Subwrap = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 20px 14px 5px 68px;
  background-color: #fafafa;
  border-radius: 3%;
  max-height: 283px;
`;

const Cardstate = styled.div`
  width: 20%;
  border-radius: 3%;

  height: 150px;
  width: 290px;
  border: 2px solid green;
`;

const Addstate = styled.div`
  margin: 20px 14px 5px 68px;
  background-color: #fafafa;
  border-radius: 3%;
  border: 2px solid green;
  max-height: 283px;
  height: 150px;
  width: 380px;
  display: flex;
`;

const Inputstate = styled.input`
  margin-top: 55px;
  margin-left: 8px;
  border: none;
  border-bottom: 2px solid gainsboro;
  outline: none;
  height: 25px;
`;
const Inputstatebutton = styled.input`
  margin-top: 10px;
  margin-left: 95px;
  outline: none;
  border: 1px solid green;
  color: white;
  background-color: green;
  border-radius: 6%;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Name = styled.h3`
  margin-left: 20px;
`;

const Imagestate = styled.img`
  border-radius: 84%;
  height: 80px;
  width: 86px;
  border: 2px solid green;
  margin-left: 15px;
  margin-top: 37px;
  border: dashed green;
`;

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state_name: ""
    };
  }
  componentDidMount() {
    const { getState } = this.props;

    getState();
  }
  newstate() {
    const { addState } = this.props;
    const { state_name } = this.state;
    addState(state_name);
  }
  render() {
    const { featured_state } = this.props;

    return (
      <Wrapper>
        <Addstate>
          <Imagestate src="https://s3-us-west-1.amazonaws.com/sp-prod-s3-assets/web/video_creatives/harper/assets/placeholder-logo-white-knockout.png?auto=compress%2Cformat&fit=max&ixlib=react-8.6.3" />
          <div>
            <Inputstate
              type="text"
              placeholder="Add State"
              onChange={e => {
                this.setState({ state_name: e.target.value });
              }}
            />

            <Inputstatebutton
              type="button"
              value="Add State"
              onClick={() => this.newstate()}
            />
          </div>
        </Addstate>
        <Subwrap>
          {featured_state &&
            featured_state.state &&
            featured_state.state.map((it, index) => {
              return (
                <Card key={index}>
                  <Cardstate>
                    <Name>{it.id}</Name>
                    <Name>{it.state_name}</Name>
                  </Cardstate>
                </Card>
              );
            })}
        </Subwrap>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    featured_state: state.states.featured_state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getState, addState }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(State);
