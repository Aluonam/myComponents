
describe('example to-do app', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('comprobar que el label nombre sale en pantalla', ()=>{
        cy.contains('Nombre').should('exist')
    })

    it('comprobar que se escribe nombre' , ()=>{
        cy.get('#nameFormTest').should('exist')
    })

    it('existe label nombre y existe el input asociado', ()=>{
        cy.contains('Nombre').should('exist')
        cy.get('#nameFormTest').should('exist')
    })


    

})