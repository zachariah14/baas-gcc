bigoData = ["O(1)", "O(log log n)", "O(log n)", "O(n)", "O(n log n)"];
scanMode = false;

questData = [];

function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}



function getTest(quests) {
    //TODO impl parsing real questData from backend
    questData = quests;
    var test = d3.select(".test");

    var answer = bigoData[2];//"O(log n)";
    var questions = shuffle(bigoData);

    /* SCAN MODE BUTTONS */
    test.append("div").attr({id: "scan", class: "text-center toggle-btn-grp joint-toggle"})
        .append("label").attr({class: "toggle-btn"})
        .on("click", function() {
            d3.selectAll(".el-container").attr({class: function(d) {"el-container"}});
            scanMode = true;
        }).text("Scan mode ON")
        .append("input").attr({
            type: "radio",
            name: "group"});
    d3.select("#scan")
        .append("label").attr({class: "toggle-btn success"})
        .on("click", function() {
            scanMode = false;
        }).text("Scan mode OFF")
        .append("input").attr({
            type: "radio",
            name: "group"});
    //TODO need to refactored with D3
    $(".toggle-btn:not('.noscript') input[type=radio]").addClass("visuallyhidden");
    $(".toggle-btn:not('.noscript') input[type=radio]").change(function() {
        if( $(this).attr("name") ) {
            $(this).parent().addClass("success").siblings().removeClass("success")
        } else {
            $(this).parent().toggleClass("success");
        }
    });

    /* TITLE */
    test.append("div").attr({class: "page-header"})
        .append("h1").text("Big O notation naming test");

    /* TEST BODY */
    //test.append("p").text("Which one of Big O notations is called logarithmic?");

    function check(d, isShort) {
        var result = "";
        if (isShort) {
            result = answer === d ? "Correct" : "Try again";
        } else {
            result = answer === d ? ("Correct! " + answer + " is called logarithmic")
                : ("Try again! " + d + " is not logarithmic");
        }
        return result;
    }

    var form = test.append("form");

    /* CREATING QUESTION ELEMENTS */
    form.selectAll("div")
        .data(questions)
        .enter()
        .append("div").attr({class: "el-container"})
        //.append("input")
        //.attr({
        //    type: "radio",
        //    class: "shape",
        //    name: "mode",
        //    value: function(d, i) {return i;}
        //});

    form.selectAll("div")
        .append("label")
        .data(questions)
        .text(function(d) {return d});

    function showAnswer(d) {
        test.select("#answer")
            .attr({class: d===answer ? "alert alert-success" : "alert alert-danger"}).text(check(d, true));
        console.log(check(d, false));
    }

    form.selectAll("label").on("click", function(d){
        showAnswer(d);
    });

    function answerStyle(d) {
        return answer === d ? "el-container answer-success" : "el-container answer-danger";
    }

    form.selectAll("div.el-container")
        .on("mouseover", function(d){
            if (scanMode)
                d3.select(this)
                    .transition()
                    .duration(800)
                    .attr({class: answerStyle(d)});
        })
        .on("mouseout", function(d){
            if (scanMode)
                d3.select(this)
                    .transition()
                    .duration(800)
                    .attr({class: "el-container"});
        })
        .on("click", function(d){
            if (!scanMode)
                d3.select(this)
                    .transition()
                    .duration(800)
                    .attr({class: answerStyle(d)});
        });


   /* /!* QUEST BUILT FROM JSON *!/
    d3.select(".quest")
        .append("div").attr({class: "page-header"})
        .append("h1").text("Quest built dynamicly from JSON");
    d3.select(".quest")
        .append("div").attr({class: "questions"});

    d3.select(".questions").selectAll(".question")
        .data(questData)
        .enter()
        .append("div").attr({class: "question"})
        .append("p").text(function(d) {return d.question});

	var questionDivs = d3.selectAll(".question");

	d3.selectAll(".question").selectAll("form")
		.data(questData)
		.enter()
		.append("form")
        .each(function(d, i) {
            console.log(this);
            d3.select(this)
                .append("div").attr({class: "el-container"}).append("label")
                .text(d.answers[i].answer);
        });*/


        //.call(function(this){
        //    console.log(this);
        //    //parent.append("div").attr({class: "el-container"}).append("label").text(parent.answer);
        //});


    //var forms = questionDivs.selectAll("form");
    //questData.forEach(function(d, i) {
    //    (d.answers).forEach(function(d) {
    //        var el = forms[i];
    //        console.log(el);
    //        //el.enter().append(function(){return "div"});//.attr({class: "el-container"}).append("label").text(d.answer)
    //        //questionDivs.selectAll("form").append("div").attr({class: "el-container"}).append("label").text(d.answer)
    //    })
    //})



		//});
		/*.call(function() {
			.append("div").attr({class: "el-container"}).append("label").text(function(d, i) {
				return d.answers[i].answer;
			});
		});*/
		/*.append("div").attr({class: "el-container"}).append("label").text(function(d, i) {
			return d.answers[i].answer;
		});*/


    //form.selectAll("div")
    //    .append("label")
    //    .data(questions)
    //    .text(function(d) {return d});
	//
    //function showAnswer(d) {
    //    test.select("#answer")
    //        .attr({class: d===answer ? "alert alert-success" : "alert alert-danger"}).text(check(d, true));
    //    console.log(check(d, false));
    //}
	//
    //form.selectAll("label").on("click", function(d){
    //    showAnswer(d);
    //});
	//
    //function answerStyle(d) {
    //    return answer === d ? "el-container answer-success" : "el-container answer-danger";
    //}
	//
    //form.selectAll("div.el-container")
    //    .on("mouseover", function(d){
    //        if (scanMode)
    //            d3.select(this)
    //                .transition()
    //                .duration(800)
    //                .attr({class: answerStyle(d)});
    //    })
    //    .on("mouseout", function(d){
    //        if (scanMode)
    //            d3.select(this)
    //                .transition()
    //                .duration(800)
    //                .attr({class: "el-container"});
    //    })
    //    .on("click", function(d){
    //        if (!scanMode)
    //            d3.select(this)
    //                .transition()
    //                .duration(800)
    //                .attr({class: answerStyle(d)});
    //    });


}