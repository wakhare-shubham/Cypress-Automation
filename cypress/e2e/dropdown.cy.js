describe('My First Test Suite', function () {
    it('My First Test Case', function () {
      cy.visit("https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html");
      cy.wait(2000);//
      cy.get('#menu1').click()
     cy.get("ul[aria-labelledby='menu1']").contains('CSS').click()
    });
  });