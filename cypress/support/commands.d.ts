/// <reference types='cypress' />
declare namespace Cypress {
    interface Chainable {
        /** Fill and submit the deliver form with the data passed as argument
         * @param deliver An object with the data of the deliver
         * @example
         * cy.registerDeliver({
         *  name: `Roberto`,
            cpf: '1111111111',
            email: 'test@email.com',
            whatsapp: "19999999999",
            address: {
                postalcode: "12345678",
                street: "Some Street",
                number: "1000",
                details: "Some details",
                district: "Some district",
                city_state: "New York"
            },
            delivery_method: "Moto",
            cnh: "cnh-example.jpg"
         * })
         */
        registerDeliver(deliver: object): void

        /** Submit the deliver form.
         */
        submitDeliverForm(): void

        /** Validates if the error has the message passed as argument
         * @param expectedMessage A string with the expected error message
         * @example cy.alertMessageShouldBe('É necessário informar o nome')
         */
        alertMessageShouldBe(expectedMessage: string): void

        /** Validates if the success modal has the message passed as argument
         * @param expectedMessage A string with the expected success message
         * @example cy.modalContentShouldBe('Dados salvos!')
         */
        modalContentShouldBe(expectedMessage: string): void
    }
}