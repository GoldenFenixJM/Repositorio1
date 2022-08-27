const callback= (myFunction)=>{
    myFunction();
    console.log('I am a callback');
}

const argumentFunction= () => {
    console.log('No itsa me')
}

const argumentFunction2= ()=>{
    console.log('I am an impostor')
}

callback(argumentFunction)
callback(argumentFunction2)

