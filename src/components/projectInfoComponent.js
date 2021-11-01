import React from "react";
import classnames from "classnames";
import {Fade, FadeTransform} from 'react-animation-components'

function ProjectInfo({project}) {
    return(
      
        <div className='container'>
          <div className={classnames('row','d-flex','my-3',{ 'flex-row-reverse' : (project.id)%2 === 1 })}>
            <div className='col'>
              <FadeTransform
                  in
                  duration={1000}
                  transformProps={{
                      exitTransform: 'scale(1.1)'
                  }}
              >
                <img width="90%" src={project.image} alt={project.name} />
              </FadeTransform>
            </div>
            <div className='col'>
              <Fade in duration={1000}>
                <h3>{project.name}</h3>
                {project.description}
              </Fade>
            </div>
          </div>
        </div>
      
    )
}

export default ProjectInfo;