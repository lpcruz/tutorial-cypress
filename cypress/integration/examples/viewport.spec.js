/// <reference types="Cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://demo.applitools.com/')
  })

  afterEach(() => {
    cy.eyesClose();
  });

  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    cy.eyesOpen({
      browser: "chrome",
      batchName: "cy.viewport()",
      appName: "Cypress Viewport Example",
      testName: "cy.viewport() - set the viewport size and dimension"
    });
    // cy.get('#navbar').should('be.visible')
    cy.viewport(320, 480)


    cy.eyesCheckWindow("330x480");

    // // the navbar should have collapse since our screen is smaller
    // cy.get('#navbar').should('not.be.visible')
    // cy.get('.navbar-toggle').should('be.visible').click()
    // cy.get('.nav').find('a').should('be.visible')

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)
    cy.eyesCheckWindow("2999x2999");


    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)

    cy.viewport('macbook-15')
    cy.eyesCheckWindow("macbook-15");

    cy.viewport('macbook-13')
    cy.eyesCheckWindow("macbook-13");
    cy.viewport('macbook-11')
    cy.eyesCheckWindow("macbook-11");
    cy.viewport('ipad-2')
    cy.eyesCheckWindow("ipad-2");
    cy.viewport('ipad-mini')
    cy.eyesCheckWindow("ipad-mini");
    cy.viewport('iphone-6+')
    cy.eyesCheckWindow("iphone-6+");
    cy.viewport('iphone-6')
    cy.eyesCheckWindow("iphone-6");
    cy.viewport('iphone-5')
    cy.eyesCheckWindow("iphone-5");
    cy.viewport('iphone-4')
    cy.eyesCheckWindow("iphone-4");
    cy.viewport('iphone-3')
    cy.eyesCheckWindow("iphone-3");

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  })
})
