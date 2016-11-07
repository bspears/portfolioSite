import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article.jsx";
import Masonry from "react-masonry-component";
import Slide from "./Slider.jsx"

export default React.createClass({

    renderArticles() {
        let articles = [];
        let key = 0;

        this.props.photos.map( photo => {
            if( this.props.showPortraits && photo.type === "portrait" ||
                this.props.showOther && photo.type === "other") {
                articles.push(
                    <Article imgUrl={photo.imgUrl} key={key} index={key} renderSlider={this.props.renderSlider}/>
                );
                key += 1;
            }
        });

        return articles;
    },

    render() {
        const thumbs = this.renderArticles();
       
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
                {thumbs}
                {this.props.showSlide ? <Slide photos={this.props.photos} photo={this.props.photo} nextPhoto={this.props.nextPhoto} prevPhoto={this.props.prevPhoto} closeSlider={this.props.closeSlider}/> : ""}
            </Masonry>
        );
    }
});