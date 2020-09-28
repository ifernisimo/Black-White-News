const SOMETHING = "SOMETHING";

let initialState = {

};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOMETHING: {
            return {
                ...state,

            };
        }


        default:
            return state;
    }
};

export const actionCreator = () => ({
    type: SOMETHING
});

export default newsReducer;