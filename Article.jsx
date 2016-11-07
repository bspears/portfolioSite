import React from "react";
import classnames from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default React.createClass({

    callSlider() {
        this.props.renderSlider(this.props.index);
    },

    render() {
        let classNames = classnames("article");

        return (
            <div 
                className={classNames}
                onClick={this.callSlider}>
                    <img src={this.props.imgUrl}/>
            </div>
        );
    }
});