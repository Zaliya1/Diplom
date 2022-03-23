const validateForm = () => {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.setAttribute("required","required");
    });
};
export default validateForm;
