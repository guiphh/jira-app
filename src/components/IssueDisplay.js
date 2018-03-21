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
      /*const URL = "http://localhost:8080/issue?key=" + issue
      fetch(URL)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({ issueData: json});
      });
      */
      this.setState({issueData: issue});
      console.log(issue)
    }
  
    render(){
      const issueData = this.state.issueData;
      if (!issueData) return <div>Loading</div>;
      return (
             <div>
                <Row>
                  <Col md={12} >
                    <h2 className="red-text text-center"><Label bsStyle="primary">{this.state.issueData.Key}</Label></h2>
                  </Col>
                </Row>
                <Row>
                    <Col md={2} >
                    <Label bsStyle="info">Summary</Label>
                    </Col>
                    <Col md={10}>
                        {this.state.issueData.Summary}
                    </Col>
                
                </Row>
             </div>
      )
    }
  }

export default IssueDisplay;