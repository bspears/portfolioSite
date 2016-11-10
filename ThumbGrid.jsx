import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article.jsx";
import Masonry from "react-masonry-component";
import Slide from "./Slider.jsx"

export default React.createClass({

     nextPhoto() {
        let newIndex = this.props.photoIndex;
        
        if( newIndex < this.props.thumbs.length -1 ) {
            newIndex += 1;
        } else {
            newIndex = 0;
        }

        this.props.updatePhotoIndex(newIndex);
    },

    prevPhoto() {
        let newIndex = this.props.photoIndex;
        
        if( newIndex > 0 ) {
            newIndex -= 1;
        } else {
            newIndex = this.props.thumbs.length -1;
        }

        this.props.updatePhotoIndex(newIndex);
    },

    render() {
        // const thumbs = this.renderArticles();
        console.log(this.props.photoIndex)
        const index = this.props.photoIndex;
        const photo = this.props.thumbs[index].props.imgUrl;
       
        let masonryOptions = {
            transitionDuration: 0
        };

        return (
            <Masonry
                id="grid"
                className={'thumbGrid'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {this.props.thumbs}
                {this.props.showSlide ? 
                    <Slide 
                        photos={this.props.thumbs} 
                        photo={photo} 
                        nextPhoto={this.nextPhoto} 
                        prevPhoto={this.prevPhoto} 
                        closeSlider={this.props.closeSlider}/> : ""}
            </Masonry>
        );
    }
});