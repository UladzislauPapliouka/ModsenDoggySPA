describe('home', () => {
  it('test index page', () => {
    cy.visit('/');
    cy.get('p').contains('1');
    cy.get('button').contains('Increase').click();
    cy.get('p').contains('2');
  });
});
