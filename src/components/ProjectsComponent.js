import React from 'react';
import { Link } from 'react-router-dom';
import {Card , CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {FadeTransform} from 'react-animation-components'




function Projects(props) {

    const renderProject= props.projects.map(project => {
        return(
            <div key={project.id} className="col-6 my-1">
                <FadeTransform
                    in
                    duration={1200}
                    transformProps={{
                        exitTransform: 'translateY(-40px)'
                    }}
                >
                <Link to={`/projects/${project.id}`}>
                    <Card>
                        <CardImg src={project.image} alt={project.name} />
                        <CardImgOverlay>
                            <CardTitle>{project.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Link>
                </FadeTransform>
            </div> 
        )
    });
 
    return (
        <div className="container">
            <div className='row my-4 row-eq-height'>
                {renderProject}
            </div>
        </div>
    )
}

export default Projects;