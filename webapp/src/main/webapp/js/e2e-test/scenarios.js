/*
 * HOW TO RUN IT
 * From one terminal run:
 * webdriver-manager start
 * From another terminal window run:
 * protractor _my_scenario_.js
 *
 * */

'use strict';

describe('baas app', function() {

	it('should automatically redirect to /currency view when location hash/fragment is empty', function() {
		browser.get('#/');
		expect(browser.getLocationAbsUrl()).toMatch("/Currencies");
	});

	it('should render quest when user navigates to /currency', function() {
		browser.get('#/Currencies');
		expect(browser.getLocationAbsUrl()).toMatch("/Currencies");
	});

	describe('quest', function() {
		beforeAll(function() {
			browser.get('#/');
		});

		it('should find all currency of binding currency.curname that are 4', function() {
			var els = element.all(by.binding('currency.curname'));
			expect(els.count()).toEqual(4);
		});

		it('should find all top menu items of binding menu that are 4', function() {
			var els = element.all(by.binding('menu'));
			expect(els.count()).toEqual(4);
		});

		it('text of the first element of binding menu should match the Build regexp', function() {
			var el = (element.all(by.binding('menu'))).getText();
			expect(el).toMatch(/Build/);
		});

		it('text of the last element of binding menu should match the Grow regexp', function() {
			var el = (element.all(by.binding('menu'))).getText();
			expect(el).toMatch(/Grow/);
		});

		it('should find all left menu items of binding group.items that are 11', function() {
			var els = element.all(by.css('.list-group-item'));
			expect(els.count()).toEqual(11);
		});

		it('text of the first element of class .list-group-item should match the Properties regexp', function() {
			var el = (element.all(by.css('.list-group-item')).first()).getText();
			expect(el).toMatch(/Properties/);
		});

		it('text of the last element of class .list-group-item should match the Currencies regexp', function() {
			var el = (element.all(by.css('.list-group-item')).last()).getText();
			expect(el).toMatch(/Currencies/);
		});

	});

});
