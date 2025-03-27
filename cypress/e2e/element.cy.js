describe('My First Test Suite', function () {
  it('My First Test Case', function () {
    cy.visit(Cypress.config('baseUrl'));
    cy.wait(3000);
    cy.get("div[id='SIvCob'] a[href]").then((elements) => {
      // Loop through all the elements and log their text
      for (let i = 0; i < elements.length; i++) {
   //     cy.log(`${elements[i].innerText}`);
        cy.log(elements[i].innerText);
      }
    });
  });
});
