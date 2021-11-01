import React , { Component } from "react/cjs/react.production.min";
import Header from './HeaderComponent'
import { Switch , Route, Redirect } from "react-router";
import {PROJECTS} from './shared/projects'
import Projects from "./ProjectsComponent";
import Home from "./homecomponent";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Footer from "./FooterComponent";
import ProjectInfo from "./projectInfoComponent";
import { Fade } from 'react-animation-components'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            projects: PROJECTS
        }
    };
    
    render() {
        const renderSelectedProject= (props) => {
            const selectedProject= this.state.projects.filter(project=>project.id===+props.match.params.projectId)[0];
            return (
                <ProjectInfo project={selectedProject} />
            )
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Fade in>
                        <Route path='/home' render={()=> <Home featuredProjects={this.state.projects.filter(project=>project.featured===true)}/>} />
                        <Fade in>
                        <Route exact path='/about' component={About} />
                        </Fade>
                        <Route exact path='/projects' render={() => <Projects projects={this.state.projects}/>}/>
                        <Route exact path='/contact' component={Contact} />
                        <Route path='/projects/:projectId' component={renderSelectedProject} />
                        <Redirect to='/home' />
                    </Fade>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main