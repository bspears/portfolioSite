import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import ThumbGrid from "./ThumbGrid.jsx";
import Article from "./Article.jsx";

export default React.createClass({
    proptypes: {
        photos: React.PropTypes.string
    },

    getInitialState() {
        return {
            showPortraits: true,
            showOther: true,
            showSlide: false,
            photoIndex: 0,
            view: "photos",
        }
    },

    togglePortraits() {
        this.setState({
            view: "photos",
            showPortraits: true,
            showOther: false
        })
    },

    toggleOther() {
        this.setState({
            view: "photos",
            showOther: true,
            showPortraits: false
        })
    },

    showAll() {
        this.setState({
            view: "photos",
            showPortraits: true,
            showOther: true
        }) 
    },

    updatePhotoIndex(newIndex) {
        this.setState({
            photoIndex: newIndex
        })
    },

    renderArticles() {
        let articles = [];
        let key = 0;

        this.props.photos.map( photo => {
            if( this.state.showPortraits && photo.type === "portrait" ||
                this.state.showOther && photo.type === "other") {
                articles.push(
                    <Article imgUrl={photo.imgUrl} key={key} index={key} renderSlider={this.renderSlider}/>
                );
                key += 1;
            }
        });

        return articles;
    },

    renderSlider(img) {
        this.setState({
            photoIndex: img,
            showSlide: true,
        })
    },

    closeSlider() {
        this.setState({
            showSlide: false,
        })
    },

    toggleAbout() {
        this.setState({
            showOther: false,
            showPortraits: false,
            view: "about"
        })
    },

    render() {

        const thumbs = this.renderArticles();

        return (
            <div className="main">
                <Nav 
                    togglePortraits={this.togglePortraits}
                    toggleOther={this.toggleOther}
                    showAll={this.showAll}
                    toggleAbout={this.toggleAbout}
                    showPortraits={this.state.showPortraits}
                    showOther={this.state.showOther}
                    view={this.state.view}
                />
                <section className="content">
                    {this.state.view === "photos" && <ThumbGrid {...this.state} 
                        thumbs={thumbs}
                        updatePhotoIndex={this.updatePhotoIndex}
                        renderSlider={this.renderSlider}
                        photoIndex={this.state.photoIndex}
                        nextPhoto={this.nextPhoto} 
                        prevPhoto={this.prevPhoto} 
                        closeSlider={this.closeSlider}/>}
                    {this.state.view === "about" && <About />}
                </section>
            </div>
        )
    }
});