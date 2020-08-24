function fullName(firstName, lastName){
    let fullName = ""
    for(let i = 0; i < arguments.length; i++){
        let name = arguments[i];
        fullName = `${fullName} ${name}`
    }
    return fullName;
}

const YourName = fullName("Amirul Islam", "Limon", " bin ", "Solaiman");
console.log(YourName);