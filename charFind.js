let a='i'

console.log(a===a.toUpperCase())
console.log(a.toUpperCase())
console.log(a.toLowerCase()===a)
console.log(parseInt(a))

let upperChar=0;
let lowerChar=0;
let specialChar=0
let digits=0;

let values="Sur@jKum@r19))"


function toSpacialCase(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

  for(let va of values){
    if(parseInt(va)){
        digits++;
    }
    else if(toSpacialCase(va)){
        specialChar++;
    }
    else if(va===va.toUpperCase()){
        upperChar++;
    }
    else if(va===va.toLocaleLowerCase()){
        lowerChar++;
    }
    
}

console.log(`upperChar ${upperChar}`)
console.log(`lowerChar ${lowerChar}`)
console.log(`specialChar ${specialChar}`)
console.log(`digits ${digits}`)