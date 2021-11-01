import React from 'react';
import {Button} from 'reactstrap';
import ProjectsCarousel from './CarouselForHome'; 
import {Link} from 'react-router-dom'
import { FadeTransform } from 'react-animation-components'

function Home(props) {
    return (
        <FadeTransform
            in
           duration={1200}
            transformProps={{
                exitTransform: 'translateX(-100px)'
            }}
        >
            <div>
                <div >
                    <Button className='carouselButton btn btn-light btn-lg'> 
                        <Link to='/projects'>Learn More &gt;</Link>
                    </Button>
                    <ProjectsCarousel featuredProjects={props.featuredProjects}/>
                </div>
            </div>
        </FadeTransform>
    );
}

export default Home;   