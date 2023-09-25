const submitPageReducer = (state = {}, action) => {
    switch(action.type){
        case "SHOW_SUBMIT_PAGE":
            return true;
        case "HIDE_SUBMIT_PAGE":
            return false;
        default:
            return false;

    }
};

export default submitPageReducer;