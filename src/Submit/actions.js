const showSubmitPage = () => {
    return {
        type: "SHOW_SUBMIT_PAGE"
    }
};

const hideSubmitPage = () => {
    return {
        type: "HIDE_SUBMIT_PAGE"
    }
};

const actions = {
    showSubmitPage,
    hideSubmitPage
}

export default actions;
