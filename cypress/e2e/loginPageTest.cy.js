import LoginPage from "../Pages/LoginPage";

describe('My First Test Suite', function () {


    // beforeEach(() => {
    //     cy.visit(Cypress.config('baseUrl'));
    // });

    // it('My First Test Case', function () {
    //   cy.fixture('example').then((data)=>{
    //     LoginPage.login(data.username, data.password)
    //     cy.get('input[type="file"]').attachFile('example.pdf')
    //   })
    // });

    it('Stores a string in Cypress.env', () => {
      const myString = 'shubham!';
      Cypress.env('sharedString', myString);
    });
    
    it('Accesses the stored string', () => {
      const retrievedString = Cypress.env('sharedString');
      cy.log(retrievedString); // Logs: "Hello, Cypress!"
    });
    
});
