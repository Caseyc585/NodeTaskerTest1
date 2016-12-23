var app = {
    Received: function () {
        console.log("Received");
    },
    Updated: function () {
        console.log("Updated");
    },
    Prep: function () {
        console.log("Prep");
    },
    Start: function () {
        console.log("Start");
        for (var i = 0; i < 5; i++) {
            console.log('Test Task 1 output ' + i);
        }
    },
    Completed: function () {
        console.log("Completed");
    },
    Removed: function () {
        console.log("Removed");
    }
}

module.exports = app;
