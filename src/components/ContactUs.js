import React, { Component } from "react";
import GoogleMap from "./GoogleMap";
import { Col,Row,  Button, Form, FormGroup, Label, Input } from "reactstrap";
import {Fade} from 'react-animation-components'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      tel: "",
      email: "",
      contactType: "Email",
      question: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
      const target=event.target;
      const name=target.name;
      const value=target.type==='radio'? target.checked : target.value;
      this.setState({[name]:value})
  }

  handleSubmit(event) {
    alert(`Your submitted info are as below:
        Name: ${this.state.fullName}
        Email: ${this.state.email}
        Phone Number: ${this.state.tel}
        Want to be contacted via: ${this.state.contactType}
        Your Question: ${this.state.question}
    `
    );
    event.preventDefault()
    this.resetFeedbackForm();
  }
  resetFeedbackForm() {
    this.setState({
      fullName: "",
      tel: "",
      email: "",
      contactType: "Email",
      question: "",
    });
  }

  render() {
    return (
      <Fade in duration={700}>
        <div className="container my-5">
          <div className="row row-content m-2 align-items-center">
            <div className="col-sm-3">
              <h4>Our Address:</h4>
              <address className='ml-2'>
                25 Shariati ave
                <br />
                Tehran,Iran
                <br />
              </address>
              <h4 className="mt-5">Contact us via:</h4>
              <a role="button" className="btn btn-link" href="tel:+12065551234">
                <i className="fa fa-phone" /> 1-647-685-0051
              </a>
              <br />
              <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co">
                <i className="fa fa-envelope-o" /> info@ruybon.co
              </a>
            </div>
            <div className="col-sm-3" />
            <div className="col">
              <GoogleMap />
            </div>
          </div>
          <div className="my-5">
            <hr />
          </div>
          <div className='mx-5'>
            <Row className='my-4'>
              <h4> Have a Question? Let us know</h4>
            </Row>
            <Form onSubmit={this.handleSubmit} className="row ">
              <div className="col-sm-9">
                <FormGroup row className="justify-content-center">
                  <Label for="fullName" sm={3}>
                    Name
                  </Label>
                  <Col sm={9}>
                    <Input type="text" value={this.state.fullName} name="fullName" onChange={this.handleInputChange} id="fullName" placeholder="Your full name" />
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input type="email" value={this.state.email} name="email" onChange={this.handleInputChange} id="email" placeholder="Your email" />
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Label for="tel" sm={3}>
                    Phone
                  </Label>
                  <Col sm={9}>
                    <Input type="tel" value={this.state.tel} name="tel" onChange={this.handleInputChange} id="tel" placeholder="Your phone number" />
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" className='row'>
                  <legend className="col-form-label col-sm-6">Prefer to be reached by:</legend>
                  <Col sm={3}>
                    <FormGroup >
                        <Input type="select" value={this.state.contactType} onChange={this.handleInputChange} name="contactType">
                            <option>Email</option>
                            <option>Phone</option>
                            <option>Do not contact me</option>
                        </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row className="justify-content-center">
                  <Label for="question" sm={3}>
                    Your Question:
                  </Label>
                  <Col sm={9}>
                    <Input rows={10} value={this.state.question} onChange={this.handleInputChange} type="textarea" name="question" id="question" />
                  </Col>
                </FormGroup>
                <FormGroup  row>
                  <Col sm={{ size: 5, offset: 1 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>

              </div>
              <div className="col">
                
              </div>
            </Form>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Contact;
