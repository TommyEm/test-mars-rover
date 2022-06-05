/// <reference types="cypress" />

describe('Mars Rover', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Should display the title', () => {
		cy.get('[data-testid="main-title"]').should('exist');
	});
});
