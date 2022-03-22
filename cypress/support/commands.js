/// <reference types='cypress' />

Cypress.Commands.add('registerDeliver', deliver => {
    cy.get('input[name=fullName]').type(deliver.name)
    cy.get('input[name=cpf]').type(deliver.cpf)
    cy.get('input[name=email]').type(deliver.email)
    cy.get('input[name=whatsapp]').type(deliver.whatsapp)
    cy.get('input[name=postalcode]').type(deliver.address.postalcode)
    cy.get('input[type=button][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)

    cy.get('input[name=address]').should('have.value', deliver.address.street)
    cy.get('input[name=district]').should('have.value', deliver.address.district)
    cy.get('input[name=city-uf]').should('have.value', deliver.address.city_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()
    cy.get('input[accept*=image]').selectFile(`cypress/fixtures/images/${deliver.cnh}`, { force: true })
    cy.get('form button[type=submit]').click()
})

Cypress.Commands.add('submitDeliverForm', () => {
    cy.get('form button[type=submit]').click()
})

Cypress.Commands.add('alertMessageShouldBe', expectedMessage => {
    cy.contains('.alert-error', expectedMessage).should('be.visible')
})

Cypress.Commands.add('modalContentShouldBe', expectedMessage => {
    cy.get('.swal2-container .swal2-html-container').should('include.text', expectedMessage)
})