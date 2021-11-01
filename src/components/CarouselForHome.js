import React, { Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';


class ProjectsCarousel extends Component {
    constructor(props) {
        super(props);
        this.state= {
            // check if the below line is correct?
            items:this.props.featuredProjects,
            activeIndex: 0,
            animating:false
        }
    }

    render() {

        const next = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({activeIndex:nextIndex});
        }

        const previous = () => {
            if (this.state.animating) return;
            const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
            this.setState({activeIndex:nextIndex});
        }

        const goToIndex = (newIndex) => {
            if (this.state.animating) return;
            this.setState({activeIndex:newIndex});
        }

        const slides = this.state.items.map((item) => {
            return (
            <CarouselItem
                onExiting={() => this.setState({animating:true})}
                onExited={() => this.setState({animating:false})}
                key={item.id}
            >
                <img className="d-block w-100" src={item.image} alt={item.name} />
                <CarouselCaption captionText={item.name} />
            </CarouselItem>
            );
        });

        return (
            <Carousel
            activeIndex={this.state.activeIndex}
            next={next}
            previous={previous}
            >
                <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        );
    }

}

export default ProjectsCarousel;