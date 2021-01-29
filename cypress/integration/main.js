describe('pcoroneos.com test', () => {
  it('Check header nav and header 1', () => {
    cy.visit('/');
    cy.get('header').within(() => {
      cy.findByRole('link', { name: /paul coroneos home/i }).should('exist');
      cy.findByRole('img', { name: /paul coroneos profile image/i });
      cy.findByRole('link', { name: /blog/i }).should('exist');
      cy.findByRole('link', { name: /portfolio/i }).should('exist');
      cy.findByRole('link', { name: /about/i }).should('exist');
    });
    cy.findByRole('heading', { name: /latest blog posts/i }).should('exist');
  });
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
