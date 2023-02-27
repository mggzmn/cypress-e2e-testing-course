/// <reference types="Cypress" />
describe('task page', () => {
  it('should render the main image', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('.main-header img');
  });
  it('should display the page title',()=>{
    cy.visit('http://127.0.0.1:5173/');
    cy.get('h1').contains('React');
  });
});
