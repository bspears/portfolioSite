import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default React.createClass({

    render() {

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="expand"
                    transitionAppear={true}
                    transitionLeave={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <div 
                        className="fullImage">
                        <img 
                            onClick={this.props.closeSlider}
                            className="active" 
                            src={this.props.photo}
                            key={this.props.photo}/>
                        <div className={"next"} onClick={this.props.nextPhoto}>Next &#62;</div>
                        <div className={"prev"} onClick={this.props.prevPhoto}>&#60; Prev</div>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});