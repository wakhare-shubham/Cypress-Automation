import 'cypress-real-events/support';

import 'cypress-iframe';
import 'cypress-file-upload';
import '@shelex/cypress-allure-plugin';




Cypress.Commands.add('login', (username, password) => {
    cy.get("#login-form-username").type(username);
    cy.get("#login-form-password").type(password);
    cy.get("button").contains("Login").click();
  });


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })