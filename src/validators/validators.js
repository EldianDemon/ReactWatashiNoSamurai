export const required = (value) => {
    if(value) return undefined

    return `You didn't write what you must`
}

const maxLength = (max) => (inputMax) => {
    if(inputMax.length > max) return (`maximum is ${max}, you've written ${inputMax.length} symbols`) 
        else console.log('field maximum is fine')
}

export const maxLengths = {
    max10: maxLength(10),
    max15: maxLength(15),
    max20: maxLength(20),
}


