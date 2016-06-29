var path = require('path');

describe('Events Test', function() {
	browser.get('http://localhost:8080');

	var username = element(by.css('input[name="username"]'));
	var password = element(by.css('input[name="password"]'));
	var email = element(by.css('input[name="email"]'));

	describe('Username', function () {
		var messages= element(by.css('input[name="username"] + div'));

		it('should make sure the username is required', function() {
			username.click();
			element(by.css('body')).click();
			expect(messages.getText()).toContain('required');
		});

		it('should make sure the username is more than 3 characters', function() {
			username.sendKeys('aa');
			expect(messages.getText()).toContain('3');
		});
		
		it('should make sure the username maxlength is 20 characters', function() {
			username.sendKeys(protractor.Key.BACK_SPACE, protractor.Key.BACK_SPACE);
			username.sendKeys('abcdefghijklmnopqrstuvwxyz');
			expect(username.getAttribute('value')).toContain('abcdefghijklmnopqrst');
		});

		it('should not say anything when valid', function() {
			expect(messages.getText()).toEqual('');
		});
	});

	describe('Password', function () {
		var messages= element(by.css('input[name="password"] + div'));

		it('should make sure the password is required', function() {
			password.click();
			element(by.css('body')).click();
			expect(messages.getText()).toContain('required');
		});

		it('should make sure the password is more than 8 characters', function() {
			password.sendKeys('aa');
			expect(messages.getText()).toContain('8');
		});

		it('should not say anything when valid', function() {
			password.sendKeys('aaasdasd');
			expect(messages.getText()).toEqual('');
		});
	});

	describe('Email', function () {
		var messages= element(by.css('input[name="email"] + div'));

		it('should make sure the email is required', function() {
			email.click();
			element(by.css('body')).click();
			expect(messages.getText()).toContain('required');
		});

		it('should make sure the email is valid', function() {
			email.sendKeys('aaaaaa');
			expect(messages.getText()).toContain('valid');
		});

		it('should not say anything when valid', function() {
			email.sendKeys('aaasdasd@test.com');
			expect(messages.getText()).toEqual('');
		});
	});
});
