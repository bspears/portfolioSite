import React from "react";
import ReactDOM from "react-dom";
import "./css/style.scss";
import Main from "./index.jsx";
import Data from "./data.json";

ReactDOM.render(
    <div>
        <Main {...Data}/>
    </div>,
    document.getElementById('app')
);