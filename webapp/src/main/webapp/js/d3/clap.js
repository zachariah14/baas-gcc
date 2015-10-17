var CLAP = {};
    CLAP.data = [{date:0, close:0}];
    CLAP.anchor = ["n", "logn", "nlogn", "n2", "n3"];

$(document).ready(function() {
    getDiagram();

    getStyledTest();
});

function getDiagram() {
    clearData();

    var request = $("#request").val();
    CLAP.anchor.forEach(function(d) {
        $("#O" + d).html("");
        drawDiagram("#O" + d, getO(d, request));
    });

    $("fieldset").css("width", $("svg").width() + "px");
}

function getO(id, n) {
    var O = [];

    O.n = function(n) {
        for(i = 0; i <= n; i++) {
            CLAP.data[i] = {date:i, close:i};
        }

        return CLAP.data;
    };

    O.logn = function(n) {
        for(i = 0; i <= n; i++) {
            if(i == 0) {
                CLAP.data[i] = {date:i, close:0};
            } else {
                CLAP.data[i] = {date:i, close:Math.log(i)};
            }
        }

        return CLAP.data;
    };

    O.nlogn = function(n) {
        for(i = 0; i <= n; i++) {
            if(i == 0) {
                CLAP.data[i] = {date:i, close:0};
            } else {
                CLAP.data[i] = {date:i, close:n * Math.log(i)};
            }
        }

        return CLAP.data;
    };

    O.n2 = function(n) {
        for(i = 0; i <= n; i++) {
            CLAP.data[i] = {date:i, close:Math.pow(i, 2)};
        }

        return CLAP.data;
    };

    O.n3 = function(n) {
        for(i = 0; i <= n; i++) {
            CLAP.data[i] = {date:i, close:Math.pow(i, 3)};
        }

        return CLAP.data;
    };

    return O[id](n);
}

function drawDiagram(anchor, data) {
    var margin = {top: 20, right: 20, bottom: 30, left: 170},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });

    var svg = d3.select(anchor).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text($(anchor).val());

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
}

function clearData() {
    CLAP.data = [{date:0, close:0}];
}