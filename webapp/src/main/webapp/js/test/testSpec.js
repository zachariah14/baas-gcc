'use strict';

/*Testing gerrit review*/

describe("shuffle function should shuffle an array randomly on each iteration", function() {

    var src = ["a", "b", "c", "d"];

    it("should shuffle an array randomly one time", function() {
        var dst = shuffle(src.slice());

        expect(src).not.toBe(dst);
    });

    it("should shuffle an array randomly consecutively two times", function() {
        var shuffle1 = shuffle(src.slice());
        var shuffle2 = shuffle(src.slice());

        expect(shuffle1).not.toBe(shuffle2);
    });
});

describe('Parsing JSON from fixtures', function() {
    var json;
    it("should load a fixture", function () {
        jasmine.getFixtures().fixturesPath = "base/test/mock/"
        var f = readFixtures("clap-quest-mock.json");
        json = JSON.parse(f);
        expect(json).toBeDefined();
    });

    it("should have a title", function () {
        expect(json.title).not.toBe(null);
    });

});

// testing controller
describe('QuestsController should return json data from server', function() {
    var $httpBackend, $rootScope, createController, questRequestHandler, json, element, scope;

    // Set up the module
    beforeEach(module('baasModule'));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = "base/test/mock/";
        var f = readFixtures("clap-quest-mock.json");
        json = JSON.parse(f);
    });

    beforeEach(inject(function($injector, $compile) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        questRequestHandler = $httpBackend.when('GET', '/java_script_quest/all')
            .respond(json);

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('QuestsController', {'$scope' : $rootScope });
        };

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch quest', function() {
        $httpBackend.expectGET('/java_script_quest/all');
        var controller = createController();
        $httpBackend.flush();
        expect($rootScope.quests).toEqual(json);
    });

    it('should fail quest', function() {
        questRequestHandler.respond(401, '');
        $httpBackend.expectGET('/java_script_quest/all');
        var controller = createController();
        $httpBackend.flush();
        expect($rootScope.quests).toEqual([]);
    });

    it('should return correct json object and compare with fixture', function() {
        $httpBackend.expectGET('/java_script_quest/all');
        var controller = createController();
        $httpBackend.flush();

        var responceJson = $rootScope.quests;
        expect(responceJson).toEqual(json);
    });

});

describe('Parse JSON', function() {
    var json, question=[],answer=[],answers=[];

    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = "base/test/mock/";
        var f = readFixtures("clap-quest-mock.json");
        json = JSON.parse(f);
    });

    it('should iterate json and collect all items in its own arrays question, answer and answers', function() {
        json.forEach(function (d, i) {
            question[i] = d.question;
            answer[i] = d.answer;
            answers[i] = d.answers;
        });

        //question
        expect(question).toBeDefined();
        expect(question.length).toBeGreaterThan(0);
        expect(question.length).toEqual(2);
        expect(question[0]).toEqual('Question1');
        expect(question[1]).toEqual('Question2');
        //answer
        expect(answer).toBeDefined();
        expect(answer.length).toBeGreaterThan(0);
        expect(answer.length).toEqual(2);
        expect(answer[0]).toEqual('Answer1');
        expect(answer[1]).toEqual('Answer2');
        //answers
        expect(answers).toBeDefined();
        expect(answers.length).toBeGreaterThan(0);
        expect(answers.length).toEqual(2);
        expect(answers[0]).toContain({answer: 'QuestOption1', id:0}, {answer: 'QuestOption2', id:1});
        expect(answers[1]).toContain({answer: 'QuestOption4', id:3}, {answer: 'QuestOption3', id:2});

    });

});

//describe("anathor example", function(){
//    var scope, compile, elem, QuestsController;
//    var $httpBackend, $rootScope, createController, questRequestHandler, json;
//
//    beforeEach(module('baasModule'));
//
//    beforeEach(function() {
//        jasmine.getFixtures().fixturesPath = "base/test/mock/";
//        var f = readFixtures("clap-quest-mock.json");
//        json = JSON.parse(f);
//    });
//
//    beforeEach(inject(function($injector, $compile) {
//        // Set up the mock http service responses
//        $httpBackend = $injector.get('$httpBackend');
//        // backend definition common for all tests
//        questRequestHandler = $httpBackend.when('GET', '/java_script_quest/all')
//            .respond(json);
//
//        // Get hold of a scope (i.e. the root scope)
//        $rootScope = $injector.get('$rootScope');
//        // The $controller service is used to create instances of controllers
//        var $controller = $injector.get('$controller');
//
//        createController = function() {
//            return $controller('QuestsController', {'$scope' : $rootScope });
//        };
//
//    }));
//
//    beforeEach(inject(function ($controller, $rootScope, $compile) {
//        scope = $rootScope.$new();
//        compile = $compile;
//        QuestsController = $controller('QuestsController', {
//            $scope: scope
//        });
//    }));
//
//    afterEach(function() {
//        $httpBackend.verifyNoOutstandingExpectation();
//        $httpBackend.verifyNoOutstandingRequest();
//    });
//
//    it('should set the div content to', function(){
//        $httpBackend.expectGET('/java_script_quest/all');
//        var controller = createController();
//        $httpBackend.flush();
//
//        var responceJson = $rootScope.quests;
//        console.log(responceJson);
//
//        var html = '<div class="row col-md-12" ng-repeat="quest in responceJson | filter:query" ng-init="selected = -1">' +
//            '<label>{{quest.question}}</label><form> <div class="el-container" ng-repeat="answer in quest.answers | filter:query">' +
//            '<p ng-class="{active:($parent.selected == $index)}" ng-click="$parent.selected = $index;">{{answer.answer}}</p></div></form></div>';        //var html = '<div><p>it is me</p></div>';
//        elem = angular.element(html);  // turn html into an element object
//        compile(elem)(scope); // compile the html
//        scope.$digest();  // update the scope
//        //console.log(elem);
//        expect(elem.find("p").text()).toEqual('it is me');  //test to see if it was updated.
//    });
//});

