import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getChild } from "../actions/child";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left:30px;
`;

const Table = styled.table``;

const Tablerow = styled.tr`

`;

const Tablehead = styled.th`
border-bottom:1px solid lightgray;
padding-left:70px;
font-size:20px;
color:lightgray;
padding-bottom:10px;
`;

const Tabledata = styled.td`
font-size:18px;
padding:15px 0px 15px 70px;
border-bottom:1px solid lightgray;
`;

class Child extends Component {
 
  componentDidMount() {
    const { getChild } = this.props;

    getChild();
  }
  render() {
    
    const { featured_child } = this.props;
    console.log(featured_child)
    return (
      <Wrapper>
        <NavLink
          style={{
            textDecoration: "none",
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            borderRadius: "3%",
            marginLeft: "1390px"
          }}
          to="/addchild"
        >
          Add child
        </NavLink>
        <Table>
          <Tablerow>
            <Tablehead>Name</Tablehead>
            <Tablehead>Sex</Tablehead>
            <Tablehead>DOB</Tablehead>
            <Tablehead>Father's Name</Tablehead>
            <Tablehead>Mother's Name</Tablehead>
            <Tablehead>state</Tablehead>
            <Tablehead>District</Tablehead>
            <Tablehead>Action</Tablehead>
          </Tablerow>

          {featured_child &&
            featured_child.child_profile &&
            featured_child.child_profile.map((it, index) => {
              return (
                <Tablerow>
                  <Tabledata>{it.name}</Tabledata>
                  <Tabledata>{it.sex}</Tabledata>
                  <Tabledata>{it.dob}</Tabledata>
                  <Tabledata>{it.father_name}</Tabledata>
                  <Tabledata>{it.mother_name}</Tabledata>
                  <Tabledata>{it.district_id}</Tabledata>
                  <Tabledata>
                    <NavLink  style={{
            textDecoration: "none",
            backgroundColor: "white",
            color: "green",
            padding:"3px 10px 3px 10px",
            borderRadius: "3%",
            border:"1px solid green"
          }}
          to={`/info/${it.id}`} >view</NavLink>
                  </Tabledata>
                </Tablerow>
              );
            })}
        </Table>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    featured_child: state.childs.featured_child
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getChild }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Child);
