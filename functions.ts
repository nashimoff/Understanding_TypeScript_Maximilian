function add(a: number, b: number) {
    return a + b;
}

function log(message: string) {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
};

function performJob(cb: (msg: string) => void) {
    // ...
    cb('Job done!');
}

performJob(log);