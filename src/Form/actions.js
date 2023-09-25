const updateFormData = (formData) => {
    return {
        type: "UPDATE_FORM_DATA",
        payload: formData,
    }
};

export default updateFormData;