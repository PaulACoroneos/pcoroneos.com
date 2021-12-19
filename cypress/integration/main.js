describe('pcoroneos.com test', () => {
  it('Check about page ', () => {
    cy.visit('/about');
    cy.findByRole('heading', { name: /about me/i }).should('exist');
    cy.log('check my author card')
    cy.findByRole('listitem').within(() => {
      cy.findByText(/name/i).should('exist')
      cy.findByText(/paul coroneos/i).should('exist')
      cy.findByText(/twitter:/i).should('exist')
      cy.findByRole('link', { name: /@pacman326/i }).and('have.attr', 'href').and('match',/https:\/\/twitter.com\/@pacman326/)
      cy.findByText(/github:/i).should('exist')
      cy.findByRole('link', { name: /paulacoroneos/i }).and('have.attr', 'href').and('match',/https:\/\/github.com\/PaulACoroneos/)
    })
    cy.findByRole('link', { name: /← back to the blog/i })
  });
});
