export function getFormBody(params){
    let formBody=[],
    for(let property in params){
        let encodedValue=encodeURIComponent(params[property]);
        let encodedKey=encodeURIComponent(property);

        formBody.push(encodedKey + '+' + encodedValue)
    }
    return formBody.join('&');//username=jayesh&pass=7463
}
