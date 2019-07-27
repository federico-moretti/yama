/* global cy */

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have input and button', () => {
    cy.getByTestId('search-box-button').should('exist');
    cy.getByTestId('search-box-input').should('exist');
  });

  it('should search a movie', () => {
    cy.getByTestId('search-box-input').type('inception');
    cy.getByTestId('search-box-button').click();
    cy.getByText('Inception (2010)').should('exist');
  });

  it('should search a movie, open and close more info', () => {
    cy.getByTestId('search-box-input').type('inception');
    cy.getByTestId('search-box-button').click();

    cy.getAllByTestId('movie-box-button')
      .first()
      .click();
    cy.getByText('Vote:').should('exist');
    cy.getByText('Genres:').should('exist');
    cy.getByText('Plot:').should('exist');
  });

  it('should search a movie without a query and get an error', () => {
    cy.getByTestId('search-box-button').click();
    cy.getByTestId('search-box-error').should('exist');
  });
});
