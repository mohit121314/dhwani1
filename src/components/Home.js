import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Subwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin-top: 2%;
  border: 2px solid lightgray;
  margin-left:30px;
`;

const Biohead = styled.p`
  font-weight: bold;
  margin-left: 16%;
`;

const Bio = styled.p`
  float: left;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2%;
`;

const Image1 = styled.img`
  width: 100%;
  height:50%;
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Subwrap>
          <Biohead>Name:</Biohead>
          <Bio>Ram Parkash</Bio>

          <Biohead>Organization:</Biohead>
          <Bio>Bal Vikas</Bio>

          <Biohead>Designation:</Biohead>
          <Bio>Cluster Cordination</Bio>
        </Subwrap>
        <ImageWrap>
          <Image1 src="https://af-network.org/sites/af-network.org/files/Entwurf_AF-NGO-Network-Logo-1.png" />
        </ImageWrap>
      </Wrapper>
    );
  }
}
