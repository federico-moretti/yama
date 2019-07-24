/* global cy */

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a button', () => {
    cy.contains('Click Me').click();
  });
});
