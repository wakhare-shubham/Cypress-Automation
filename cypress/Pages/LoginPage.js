class LoginPage {
  usernameField() {
    return cy.get("#username")
  }


  passwordField() {
    return cy.get("#password")
  }


  submitButton() {
    return cy.get("button[id='submit']")
  }

  login(username, password) {
    this.usernameField(username);
    this.passwordField(password);
    this.submitButton().click();
  }

}

export default new LoginPage();
