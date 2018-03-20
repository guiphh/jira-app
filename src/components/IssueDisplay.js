import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col, NavbarBrand, Label } from "react-bootstrap";


class IssueDisplay extends Component {
    constructor(){
      super();
      this.state = {
        issueData: null
      };
    }
  
    componentDidMount(){
      const issue = this.props.issue;
      const URL = "http://localhost:8080/issue?key=" + issue
      fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({ issueData: json});
      });
    }
  
    render(){
      const issueData = this.state.issueData;
      if (!issueData) return <div>Loading</div>;
      return (
             <div>
                <Row>
                    <Col md={2} >
                    <Label bsStyle="info">Summary</Label>
                    </Col>
                    <Col md={2}>
                        {this.state.issueData.Summary}
                    </Col>
                
                </Row>
                <Row>
                {this.state.issueData.Summary}
                </Row>
                <Row>
                {this.state.issueData.Summary}
                </Row>
                
             </div>
      )
    }
  }

export default IssueDisplay;