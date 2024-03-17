
describe('example to-do app', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('existe label nombre y existe el input asociado', ()=>{
        cy.contains('Nombre').should('exist')
        cy.get('#nameFormTest').should('exist')
    })

    it('escribe correctamente input Name', ()=>{
        cy.get('#nameFormTest').type('paula')
        cy.get('#nameFormTest').should('have.value', 'paula')
    })
    
    it('existe label apellidos, input asociado y escribe input apellido', ()=>{
        cy.contains('Apellido').should('exist')
        cy.get('#lastNameFormTest').type('smith')
        cy.get('#lastNameFormTest').should('have.value', 'smith')   
    })

})  