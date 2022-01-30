
(function(){
    let timeUnits = parseInt(prompt("How much to count?"));
    let interval = parseInt(prompt("Log after how much interval"));

    // calls the handleCall function after every interval seconds (passed as millis)
    let iid = setInterval(handleCalls, interval * 1000);
    //returns an id used to stop calling via clearInterval

    handleCalls.orgTU = timeUnits; //Functions can be used as a store of properties (much like object)

    function handleCalls(){
        console.log(timeUnits + " left");
        timeUnits -= interval;

        if(timeUnits <= 0){
            clearInterval(iid);
            alert(handleCalls.orgTU + " has been counted.");
        }
    }
})();




// IIFE = immediately invoked function execution