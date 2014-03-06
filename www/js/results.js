var Results = function (maxnumber, data) {
    var root = document.getElementById('results-page');
    root.onclick = function() {
        $(".result-number").remove(); 
        main.returnHomePage("results-page");
    };

    var paraResult = document.createElement("p");
    paraResult.className += "result-number";

    if(maxnumber) {
        this.results = Math.floor(Math.random() * maxnumber); 
    }

    if(data) {

    }

    this.beforeAnimation = function() {
        var tmp = setInterval(function(){
            paraResult.innerHTML = Math.floor(Math.random() * maxnumber);
        }, 20);

        setTimeout(function(interval) {
            clearInterval(interval);
        }, 800, tmp);
    }

    this.displayNumberResults = function() {
        paraResult.innerHTML = this.results + 1;

        root.appendChild(paraResult);
    };
};
