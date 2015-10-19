/*
 * HOW TO RUN IT
 * e.g. KARMA run configuration in Idea IDE
 * Node interpreter: C:\Program Files\nodejs\node.exe
 * Configuration file: C:\Users\Andre\GIT\baas-gcc\webapp\src\main\webapp\js\karma.conf.js
 * Karma package: C:\Users\Andre\AppData\Roaming\npm\node_modules\karma
 *
 * */

'use strict';

describe('BaasGcc controllers', function() {

	describe('Parsing JSON from fixtures', function() {
		var json;
		it("should load a fixture", function () {
			jasmine.getFixtures().fixturesPath = "base/test/mock/"
			var f = readFixtures("baas-currencies-mock.json");
			json = JSON.parse(f);
			expect(json).toBeDefined();
		});

		it("should have a title", function () {
			expect(json.title).not.toBe(null);
		});

	});

	describe('CurrencyController', function(){
		var $httpBackend, $rootScope, createController, currencyRequestHandler, json, ctrl, scope;

		beforeEach(module('baasModule'));

		beforeEach(function() {
			jasmine.getFixtures().fixturesPath = "base/test/mock/";
			var f = readFixtures("baas-currencies-mock.json");
			json = JSON.parse(f);
		});

		beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('CurrencyController', {$scope:scope});
		}));

		beforeEach(inject(function($injector, $compile) {
			// Set up the mock http service responses
			$httpBackend = $injector.get('$httpBackend');
			// backend definition common for all tests
			currencyRequestHandler = $httpBackend.when('GET', '/currency/all').respond(json);

			// Get hold of a scope (i.e. the root scope)
			$rootScope = $injector.get('$rootScope');
			// The $controller service is used to create instances of controllers
			var $controller = $injector.get('$controller');

			createController = function() {
				return $controller('CurrencyController', {'$scope' : $rootScope });
			};

		}));

		//afterEach(function() {
		//	$httpBackend.verifyNoOutstandingExpectation();
		//	$httpBackend.verifyNoOutstandingRequest();
		//});

		it('should create "types" model with 2 currency types', function() {
			expect(scope.types.length).toBe(2);
		});

		it('should fetch quest', function() {
			$httpBackend.expectGET('/currency/all');
			var controller = createController();
			$httpBackend.flush();
			expect($rootScope.currencies).toEqual(json);
		});

	});

});

