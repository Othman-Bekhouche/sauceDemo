describe('Swag Labs - Page Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Doit afficher le formulaire de connexion', () => {
    cy.get('[data-test="login-container"]').should('be.visible')

    cy.get('#user-name')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Username')

    cy.get('#password')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Password')

    cy.get('#login-button')
      .should('be.visible')
      .and('have.value', 'Login')
  })

  it('Connexion réussie avec standard_user', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Afficher un message d’erreur si les champs sont vides', () => {
    cy.get('#login-button').click()

    cy.get('.error-message-container')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Utilisateur bloqué (locked_out_user)', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.error-message-container')
      .should('be.visible')
      .and('contain', 'locked out')
  })

})
