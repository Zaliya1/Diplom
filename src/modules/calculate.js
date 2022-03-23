const calculate = () => {
    const calc = document.getElementById('calc');
    const calcType = document.getElementById('calc-type');
    const calcInput = document.getElementById('calc-input');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcTotal = document.getElementById('calc-total');
    let calcTypeValue;
    let calcInputValue;
    let calcTypeMaterialValue;

    calcType.addEventListener('change', (e) => {
        calcTypeValue = e.target.value;
    });
    calcInput.addEventListener('input', (e) => {
        calcInputValue = e.target.value;
    });
    calcTypeMaterial.addEventListener('change', (e) => {
        calcTypeMaterialValue = e.target.value;
    });

    const countCalc = () => {
        if (calcTypeValue > 0 && calcInputValue > 0 && calcTypeMaterialValue > 0) {
            let calcTotalValue = calcTypeValue * calcInputValue * calcTypeMaterialValue;
            calcTotal.value = calcTypeValue * calcInputValue * calcTypeMaterialValue
        }
    };
    calc.addEventListener('change', (e)=> {
        if (e.target === calcType || e.target === calcInput || 
            e.target === calcTypeMaterial) {
                countCalc();
            }
    });

    calcInput.addEventListener('input', (e)=> {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    calcInput.addEventListener('blur', (e)=> {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
};
export default calculate;