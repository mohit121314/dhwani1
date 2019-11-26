import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addChild } from "../actions/addchild";

class Addchild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            sex:"",
            dob:"",
            father_name:"",
            mother_name:"",
            state_id:"1",
            district_id:"1"
        };
      }
    //   componentDidMount() {
    //     const { addChild } = this.props;
    
    //     addChild();
    //   }
      newchild() {
        const { addChild } = this.props;
        const { name,sex,dob,father_name,mother_name,district_id,state_id} = this.state;
        addChild(name,sex,dob,father_name,mother_name,district_id,state_id);
      }
    render() {
        const { add_child } = this.props;
        return (
            <div>
                <form>
                    <input type="text" placeholder="enter name"
                    onChange={e => {
                        this.setState({ name: e.target.value });
                      }}/>
                    <select>
                        <option>Gender</option>
                        <option>male</option>
                        <option>female</option>
                        
                    </select>
                    <input type="text" placeholder="enter DOB" 
                    onChange={e => {
                        this.setState({ dob: e.target.value });
                      }}
                    />
                    <input type="text" placeholder="enter father name"
                    onChange={e => {
                        this.setState({ father_name: e.target.value });
                      }}/>
                    <input type="text" placeholder="enter mother name"
                    onChange={e => {
                        this.setState({ mother_name: e.target.value });
                      }}/>
                    <input type="text" placeholder="state"
                    onChange={e => {
                        this.setState({ state_id: e.target.value });
                      }}/>
                    <input type="text" placeholder="district"
                    onChange={e => {
                        this.setState({ district_id: e.target.value });
                      }}/>
                    <input type="button" value="Add" 
                      onClick={() => this.newchild()}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        add_child: state.addchilds.add_child
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addChild}, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Addchild);