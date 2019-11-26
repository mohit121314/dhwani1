import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDistrict } from "../actions/district";
import { addDistrict } from "../actions/district";

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
  margin: 20px 14px 5px 60px;
  background-color: #fafafa;
  border-radius: 3%;
  max-height: 283px;
`;

const Carddistrict = styled.div`
  width: 20%;
  border-radius: 3%;

  height: 150px;
  width: 290px;
  border: 2px solid green;
`;

const Adddistrict = styled.div`
  margin: 20px 14px 5px 68px;
  background-color: #fafafa;
  border-radius: 3%;
  border: 2px solid green;
  max-height: 283px;
  height: 150px;
  width: 400px;
  display:flex;
`;

const Inputdistrict = styled.input`
  margin-top: 20px;
  margin-left: 25px;
  border: none;
  border-bottom: 2px solid gainsboro;
  outline:none;
`;
const Inputdistrictbutton = styled.input`
  margin-top: 10px;
  margin-left: 50px;

  border: 1px solid green;
  color: white;
  background-color: green;
  border-radius: 10%;
  padding-top: 5px;
  padding-bottom: 5px;
  outline:none;
`;
const Name = styled.h3`
  margin-left: 20px;
`;

const Dropstate = styled.select`
  border: none;
  border-bottom: 2px solid gainsboro;
  margin-left: 35px;
  margin-top: 20px;
  outline:none;
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

const Options = styled.option`
outline:none`;

const Textdiv = styled.div`
width:38%;
`;

class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state_id: "1",
      district_name: ""
    };
  }
  componentDidMount() {
    const { getDistrict } = this.props;

    getDistrict();
  }
  newdistrict() {
    const { addDistrict } = this.props;
    const { state_id, district_name } = this.state;
    addDistrict(state_id, district_name);
  }
  render() {
    const { featured_district } = this.props;
    return (
      <Wrapper>
        <Adddistrict>
        <Imagestate src="https://s3-us-west-1.amazonaws.com/sp-prod-s3-assets/web/video_creatives/harper/assets/placeholder-logo-white-knockout.png?auto=compress%2Cformat&fit=max&ixlib=react-8.6.3" />
        <Textdiv>
         <Dropstate>
            <Options>Select State Name</Options>
            <Options value="1">Haryana</Options>
          </Dropstate>
          <Inputdistrict
            type="text"
            placeholder="Add District"
            onChange={e => {
              this.setState({ district_name: e.target.value });
            }}
          />
          <Inputdistrictbutton
            type="button"
            value="Add District"
            onClick={() => this.newdistrict()}
          />
          </Textdiv>
        </Adddistrict>
        
        <Subwrap>
          {featured_district &&
            featured_district.district &&
            featured_district.district.map((it, index) => {
              return (
                <Card key={index}>
                  <Carddistrict>
                    <Name>{it.id}</Name>
                    <Name>{it.district_name}</Name>
                  </Carddistrict>
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
    featured_district: state.district.featured_district
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDistrict, addDistrict }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(District);
