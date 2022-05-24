export function minLengthValidation(inputData, minLength){
    const { value } = inputData;
    removeClassErrorSuccess(inputData);
    if(value.length >= minLength){
        inputData.classList.add("success");
        return true;
    } else {
        inputData.classList.add("error");
        return false;
    }
}

export function emailValidation(inputData){
    /**
     * TODO: Poner el Regex del Drive
     */
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const { value } = inputData;
    removeClassErrorSuccess(inputData);
    const resultValidation = emailValid.test(value);
    if (resultValidation){
        inputData.classList.add("bg-green-200");
        return true;
    } else {
        inputData.classList.add("bg-red-200");
        return false;
    }
}

function removeClassErrorSuccess(inputData){
    inputData.classList.remove("bg-green-200");
    inputData.classList.remove("bg-red-200");
}