const fullImageReducer = (state = {
    url: null,
}, action) => {
    switch (action.type) {
        case "SHOW_IMAGE":
            state = {
                ...state,
              url: action.payload.url,
              details: action.payload.details
            };
            break;
        case "HIDE_IMAGE":
            state = {
                ...state,
              url: null,
              details: null
            };
            break;
    }
    return state;
};

module.exports = fullImageReducer;
