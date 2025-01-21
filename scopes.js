// Global Scope

let globalVariable = "I am Global" //can available every where in the code

// Function Scope

function testFunction() {
    let functionVariable = "I am in function"
    console.log(globalVariable)
    console.log(functionVariable) //functionVariable can works within the function
    //out of the function it is not accessible
}

testFunction()    //calling the function to log the output.

// Block Scope

if (true) {
    let variable1 = "I am in block";
    const variable2 = "Me too";
    var variable3 = "I can escape!";
    console.log(variable1);       // Here variable1, variable2 are accessible within this block of code
}

console.log(variable3) // variable3 can be accessible out of the block. 