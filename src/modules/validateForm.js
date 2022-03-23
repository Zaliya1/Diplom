const validateForm = () => {
    const inputs = document.querySelectorAll('.form-control');
    const closeModal = document.querySelector('.services-modal__close');
    console.log(inputs)
    inputs.forEach(input => {
        input.setAttribute("required","required");
    });
};
export default validateForm;
