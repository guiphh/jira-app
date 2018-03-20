import React, { Component } from 'react';
import IssueDisplay from './IssueDisplay'
import { Navbar, NavItem, Nav, Grid, Row, Col, NavbarBrand } from "react-bootstrap";

const ISSUES = [
    {key:'TAA-1', summary:'Summary 1'},
    {key:'TAA-2', summary:'Summary 2'},
    {key:'TAA-3', summary:'Summary 3'},
  ]
  

class IssueList extends Component {
    constructor(){
        super();
        this.state = {
          issuesData: null,
          activeIssue:0,
        };
      }

    componentDidMount(){
        const issues = this.props.issues;
        const URL = "http://localhost:8080/";
        console.log("fetching")

        fetch(URL)
        .then(res => res.json())
        .then(json => {
            this.setState({issuesData: json})
        })
    }
    
      render() {
        const issuesData = this.state.issuesData;
        if (!issuesData) return <div>Loading</div>;
        const activeIssue = this.state.activeIssue;
        return (
              <Row>
                <Col md={2} sm={2}>
                  <h3>Select an issue</h3>
                  <Nav 
                    bsStyle="pills"
                    stacked
                    activeKey={activeIssue}
                    onSelect={index => {
                      this.setState({activeIssue: index});
                    }}
                  >
                  {issuesData.map((issue, index) => (
                    <NavItem 
                    key={index}
                    eventKey={index}> {issue.Key}
                    </NavItem>
                  ))}
                  </Nav>
                </Col>
                <Col md={10} sm={10}>
                  <IssueDisplay key={activeIssue} issue={issuesData[activeIssue].Key}/>
                </Col>
              </Row>
        );
    }
}

export default IssueList;