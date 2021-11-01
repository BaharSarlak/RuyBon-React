import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {FadeTransform} from 'react-animation-components'


class About extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeTab:'1'
        }
    }

    toggle= (tabNumber) => {
        if(this.state.activeTab !== tabNumber) {
            this.setState({activeTab: tabNumber})
        }
    }
    render() {
        return(
            <FadeTransform
                in
                duration={800}
                transformProps={{
                    exitTransform: 'translateY(40px)'
                }}
            >
                <Row className='my-5 justify-content-center'>
                    <Nav tabs className='col-md-9 justify-content-center' >
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                            >
                                <Button className="btn-lg" style={{backgroundColor:'#9a93b8'}}> History</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                            >
                                <Button className="btn-lg" style={{backgroundColor:'#9a93b8'}}> RuyBon Meaning</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                            >
                                <Button className="btn-lg" style={{backgroundColor:'#9a93b8'}}>  Mission &amp; Vision</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                            >
                                <Button className="btn-lg" style={{backgroundColor:'#9a93b8'}}> Human Resources</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                            >
                                <Button className="btn-lg" style={{backgroundColor:'#9a93b8'}}> Founders</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} className='col-md-9 justify-content-center'>
                        <TabPane tabId="1">
                            <div className='m-3'>
                                <p>Tarho Tadbir Ruy Bon engineering Co. Ltd. (RuyBon) is Established at Oct. 07.2015 to be the pioneer for a new approach in engineering and consulting services. The unique experience of services and management and also cooperation with the most credited Iranian and international Consultants in well-known engineering projects are the backup and source of courage which leads our team to establish a legal entity of Consulting engineers.</p>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className='m-3'>
                                <p>RUY means Wisdom, and BON means Base. The mixture of these two Persian words has made a Wisdom based entity</p>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row className='mt-3'>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle className='tab-card-header text-center'>Mission</CardTitle>
                                        <CardText>
                                        <p> The mission of RuyBon is generating ideas, offering projects, Feasibility studies, Management services, Design services from Pre-concept to detailed executable drawings, Engineering services. Site supervision and supreme control on all kinds of projects in construction sectors; including Structural, Architectural, Civil, Electrical and Mechanical disciplines.</p>
                                        <p>RuyBon's approach for it's mission is engagement to professional ethic codes, developing organizational learning, total quality, organizational transparency and also hiring and keeping skilled and dynamic human resources. </p>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle className=' tab-card-header text-center'>Vision</CardTitle>
                                        <CardText>
                                        <p>The vision of RuyBon for the next five years is working as one of the most credited Multi disciplinary engineering companies in Iran and the Middle East, Working with high ranked Iranian and International clients, design and executing civil engineering projects and cooperating in Joint Venture models with well-known Iranian and Intl' Consultants and Contractors in large scale projects and also gaining the main share of the engineering services market in Iran and the Middle East, using updated hi-tech methods and resulting in high quality services.</p>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className='m-3'>
                                <p>In RuyBon; human resources are the most valuable wealth of the organization and for the same reason the hyping up courage, building job satisfaction, providing a suitable working atmosphere, developing organizational learning and gaining the up warding cooperation levels of the staff in the direction of RuyBon's vision, is of Company's strategic principles.</p>
                                <p>The reputation of the founders and staff of RuyBon by the overseas consultants and Iranian companies and also the built bidirectional trust between both sides, in one hand are resulted from years of RuyBon's engagement to it's professional values and in other hand are forming a guarantee for reaching organizational goals.  </p>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className='m-3'>
                                <h3>Members of the Board</h3>
                                <ul className=" ml-3">
                                    <li className='mb-3'>
                                        <b>Mansour Montazeri Namin; Member of the Board &amp; Supreme culsultant of RuyBon: </b> MS.c. of structural Engineering from California, more than 25 years of experience in management large scale projects such as Golestan Dam, Esteghlal five star Hotel, …
                                    </li>
                                    <li className='mb-3'>
                                        <b>Keyvan Asayeshi; Chairman of the Board:</b> Civil engineer with more than 10 years of experience in Construction projects in Iran and Canada and having cooperation with Consultants from Canada, UK, Australia and South Africa.
                                    </li>
                                    <li>
                                        <b>Sajjad Montazeri Namin; CEO</b> Water engineer, with 12 years of experience in Iran and China. Worked as manager and leader of manufacturing, Procurement, Technology transfer and Investment projects and also engineering services. He has also experienced management of Legal-Contractual departments in large scale multi disciple projects in Iran.
                                    </li>
                                </ul>
                            </div>
                        </TabPane>
                    </TabContent>
                </Row>
            </FadeTransform>
        );
    }
}
  
export default About;