import '../support/commands'


describe('assignment test', () => {

  beforeEach(() => {
    cy.visit('https://easecommerce.in/app/login')
    cy.login('demouser@easecommerce.in', 'cE7iQPP^');
  })

  it('Login Test', () => {
    cy.url().should('contain', 'admin')
  })

  it('Switch to employee view', () => {
    cy.get("button[aria-label='Open Settings']").click()
    cy.contains("Switch to Employee").click()
    cy.url().should('contain', 'employee')
    cy.wait(2000)
    cy.get('div.MuiListItemText-root')
      .invoke('css', 'visibility', 'visible')
      .then(() => {
        cy.get('p.MuiTypography-root').should('be.visible');
      });
  })

  it('Task creation', () => {
    cy.get("button[aria-label='Open Settings']").click()
    cy.contains("Switch to Employee").click()
    cy.get("button").contains("Add Task").click()
    cy.get("input[placeholder='Select Super Category']").click()
    cy.contains("Listings & Catalogies").click()
    cy.get("input[placeholder='Select Sub Category']").click()
    cy.contains("Onboarding").click()
    cy.get("#task-name-input").type("Automation testing task")
    cy.get("input[placeholder='Select Assignee']").click()
    cy.contains("Ishika").click()
    cy.get("input[placeholder='Select Reviewers']").click()
    cy.contains("Prachi Panchal").click()
    cy.get("input[placeholder='Select Priority']").click()
    cy.contains("Medium").click({ force: true })
    cy.get("input[placeholder='DD/MM/YYYY']").type("04/04/2025")
    cy.get("div.ql-editor.ql-blank").type("Basic test for sample automation")
    cy.get("button[type='submit']").click()
    cy.get("button").contains("Yes, create it!").click()
    cy.get("#notistack-snackbar").should('be.visible')
    cy.get("p").contains("Automation testing task").should('be.visible')
  })

  it('Submit button should not visible', () => {
    cy.get("button[aria-label='Open Settings']").click()
    cy.contains("Switch to Employee").click()
    cy.get("button").contains("Add Task").click()
    cy.get("input[placeholder='Select Super Category']").click()
    cy.contains("Listings & Catalogies").click()
    cy.get("input[placeholder='Select Sub Category']").click()
    cy.contains("Onboarding").click()
    cy.get("button[type='submit']").should('be.disabled')
  })

  it('Negative test case', () => {
    cy.get("button[aria-label='Open Settings']").click()
    cy.contains("Switch to Employee").click()
    cy.get("button").contains("Add Task").click()
    cy.get("input[placeholder='Select Super Category']").click()
    cy.contains("Listings & Catalogies").click()
    cy.get("input[placeholder='Select Sub Category']").click()
    cy.contains("Onboarding").click()
    cy.get("#task-name-input").type("Automation testing task")
    cy.get("input[placeholder='Select Assignee']").click()
    cy.contains("Ishika").click()
    cy.get("input[placeholder='Select Reviewers']").click()
    cy.contains("Prachi Panchal").click()
    cy.get("input[placeholder='Select Priority']").click()
    cy.contains("Medium").click({ force: true })
    cy.get("div.ql-editor.ql-blank").type("Basic test for sample automation")
    cy.get("button[type='submit']").should('be.disabled')
  })

})
