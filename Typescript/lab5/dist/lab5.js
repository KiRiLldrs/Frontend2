//1
class MyClass {
    constructor() {
        this.data = [];
        this.record = (param) => {
            this.data.push(param);
            console.log('Record: ' + param + ' added!');
            setTimeout(() => {
                this.remove();
            }, 10000);
        };
    }
    remove() {
        this.data.pop();
        console.log('Record removed!');
    }
}
const TestClass = new MyClass();
let secondsPassed = 0;
const intervalId = setInterval(() => {
    if (secondsPassed < 60) {
        TestClass.record(12345);
        secondsPassed += 10;
    }
    else {
        clearInterval(intervalId);
    }
}, 10000);
//2
function Message(message) {
    function displayMessage(message) {
        console.log(message);
    }
    displayMessage(message);
}
Message("Hello, World!");
