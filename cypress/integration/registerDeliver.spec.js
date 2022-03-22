/// <reference types="cypress" />
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {
    let deliver

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    })

    it('User should be deliver', () => {
        deliver = signupFactory.deliver()
        cy.registerDeliver(deliver)

        const expectedMessage = 'Recebemos os seus dados.'
        cy.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', () => {
        deliver = signupFactory.deliver()
        deliver.cpf = '123456789AB'
        cy.registerDeliver(deliver)

        cy.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', () => {
        deliver = signupFactory.deliver()
        deliver.email = 'tiago.teste.com'
        cy.registerDeliver(deliver)

        cy.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it('Required fields', () => {
        const errorMessages = [
            'É necessário informar o nome',
            'É necessário informar o CPF',
            'É necessário informar o email',
            'É necessário informar o CEP',
            'É necessário informar o número do endereço',
            'Selecione o método de entrega',
            'Adicione uma foto da sua CNH'
        ]

        cy.submitDeliverForm()
        errorMessages.forEach(message => {
            cy.alertMessageShouldBe(message)
        })
    })
})