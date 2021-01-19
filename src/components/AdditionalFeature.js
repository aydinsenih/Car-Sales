import React from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addFeature } from "../actions/featuresActions";

const AdditionalFeature = (props) => {
    //const state = useSelector(state => state);// I can use useselector or mapstatetoprops instead of passing props from parent
    const dispatch = useDispatch();
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                className="button"
                onClick={() => dispatch(addFeature(props.feature))}
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

// const mapStateToProps = (state) => {
//     return state;
// };

// export default connect(mapStateToProps, { addFeature })(AdditionalFeature);

export default AdditionalFeature;
