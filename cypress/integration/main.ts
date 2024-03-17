describe("pcoroneos.com test", () => {
  it("User visits main page then clicks first blog post. It should return a post. ", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: /latest blog posts/i });
    cy.findByTestId("article-0").within(() =>
      cy.findByTestId("article-link").click()
    );
    cy.findByTestId("blog-post");
  });
});
