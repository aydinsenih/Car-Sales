export const ADD_FEATURE = "ADD_FEATURE";
export const DEL_FEATURE = "DEL_FEATURE";

export const addFeature = (feature) => {
    return { type: ADD_FEATURE, payload: feature };
};
export const delFeature = (feature) => {
    return { type: DEL_FEATURE, payload: feature };
};
