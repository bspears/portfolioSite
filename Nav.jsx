import React from "react";
import classnames from "classnames";


export default React.createClass({

    render() {
        return (
            <div className="nav">
                <h1>Bennett Spears</h1>
                <ul className="navLinks">
                    <li 
                        onClick={this.props.showAll}
                        className={classnames( {active: this.props.showPortraits && this.props.showOther})}>
                            Home
                    </li>
                    <li 
                        onClick={this.props.togglePortraits}
                        className={classnames( {active: this.props.showPortraits && ! this.props.showOther})}>
                            Portraits
                    </li>
                    <li 
                        onClick={this.props.toggleOther}
                        className={classnames( {active: this.props.showOther && !this.props.showPortraits})}>
                            Other Work
                    </li>
                    <li 
                    onClick={this.props.toggleAbout}
                    className={classnames( {active: this.props.view === "about"})}>
                            About
                    </li>
                </ul>
            </div>
        );
    }
});