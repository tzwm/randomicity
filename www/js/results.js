var Results = function (maxnumber, data) {
    var root = document.getElementById('results');

    if(maxnumber) {
        this.results = Math.floor(Math.random() * maxnumber); 
    }

    if(data) {

    }

    this.displayNumberResults = function() {
        var para = document.createElement("p");
        para.innerHTML = this.results + 1;

        root.appendChild(para);
    };
};
