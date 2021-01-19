import React from "react";
import { delFeature } from "../actions/featuresActions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button
                className="button"
                onClick={() => props.delFeature(props.feature)}
            >
                X
            </button>
            {props.feature.name}
        </li>
    );
};
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { delFeature })(AddedFeature);
