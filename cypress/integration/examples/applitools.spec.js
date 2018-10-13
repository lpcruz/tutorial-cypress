describe('Hello Cypress, This is Applitools', () => {
  it('works', () => {
    cy.visit('https://demo.applitools.com');
    cy.eyesOpen({
      appName: 'Hello Cypress, This is Applitools!',
      testName: 'My first Cypress Test',
      browser: { width: 800, height: 600 },
    });
    cy.eyesCheckWindow('Main Page');
    cy.get('#log-in').click();
    cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
});