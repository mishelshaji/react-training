const greet = (fullName) => console.log('Hello ' + fullName);

function getUserInput(callback) {
    const name = "John Doe";
    callback(name);
}

getUserInput(n=>console.log('Hello ' + n));
