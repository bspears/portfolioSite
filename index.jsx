import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import ThumbGrid from "./ThumbGrid.jsx";


export default React.createClass({
    getInitialState() {
        return {
            showPortraits: true,
            showOther: true,
            showSlide: false,
            photoIndex: null,
            view: "photos"
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

    renderSlider(img) {

        this.setState({
            showSlide: true,
            photoIndex: img,
            photo: this.props.photos[img].imgUrl
        })
    },

    nextPhoto() {
        let newIndex = this.state.photoIndex;
        
        if( newIndex < this.props.photos.length -1 ) {
            newIndex += 1;
        } else {
            newIndex = 0;
        }

        this.setState({
            photoIndex: newIndex,
            photo: this.props.photos[newIndex].imgUrl
        })
    },

    prevPhoto() {
        let newIndex = this.state.photoIndex;
        
        if( newIndex > 0 ) {
            newIndex -= 1;
        } else {
            newIndex = this.props.photos.length -1;
        }

        this.setState({
            photoIndex: newIndex,
            photo: this.props.photos[newIndex].imgUrl
        })
    },

    closeSlider() {
        this.setState({
            showSlide: false,
            photo: null
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
                    {this.state.view === "photos" && <ThumbGrid {...this.state} photos={this.props.photos} renderSlider={this.renderSlider} nextPhoto={this.nextPhoto} prevPhoto={this.prevPhoto} closeSlider={this.closeSlider}/>}
                    {this.state.view === "about" && <About />}
                </section>
            </div>
        )
    }
});