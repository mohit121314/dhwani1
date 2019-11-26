import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getChild } from "../actions/child";


const Wrapper = styled.div``;


class Viewchild extends Component {
    componentDidMount() {
        const { getChild} = this.props;
    
        getChild();
        if (window.location) {
          const url = window.location.pathname;
      }
    }
    render() {
        const { featured_child } = this.props;
        console.log(featured_child)
        return (
            <Wrapper>
           
            </Wrapper>
        )
    }
}
const mapStateToProps = state => {
    return {
      featured_child: state.childs.featured_child
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getChild}, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Viewchild);
