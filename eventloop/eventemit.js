const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        setTimeout(() => {
            this.emit("event");
        }, 5); // has a default time value of 0
    }
}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
    console.log("an event occurred!");
});
