'use strict';

describe('clap-exam app', function() {

	it('should automatically redirect to /quest view when location hash/fragment is empty', function() {
		browser.get('#/');
		expect(browser.getLocationAbsUrl()).toMatch("/quest");
	});

	it('should render quest when user navigates to /quest', function() {
		browser.get('#/quest');
		expect(browser.getLocationAbsUrl()).toMatch("/quest");
	});

	describe('quest', function() {
		beforeAll(function() {
			browser.get('#/');
		});

		//expect(element.all(by.css('[ng-view] label')).first().getText()).toMatch(/partial for view 1/);
		it('should find all labels on quest page that are 2', function() {
			//browser.get('#/');
			var elements = element.all(by.css('label'));
			expect(elements.count()).toEqual(2);
		});

		it('should find all questions of binding quest.question that are 2', function() {
			//browser.get('#/');
			var els = element.all(by.binding('quest.question'));
			expect(els.count()).toEqual(2);
		});

		it('element text of binding quest.question should match the Question regexp', function() {
			//browser.get('#/');
			var el = (element.all(by.binding('quest.question')).first()).getText();
			expect(el).toMatch(/Question/);
		});

		it('should find all answers of binding answers.answer that are 4', function() {
			//browser.get('#/');
			var els = element.all(by.binding('answers.answer'));
			expect(els.count()).toEqual(4);
		});

		it('element text of binding answers.answer should match the QuestOption regexp', function() {
			//browser.get('#/');
			var el = (element.all(by.binding('answers.answer')).first()).getText();
			expect(el).toMatch(/QuestOption/);
		});

	});

});
