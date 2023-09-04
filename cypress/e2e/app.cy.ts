
describe('app.cy.ts', () => {
  it('should visit the route "/" and display title "x-clone app is running!"', () => {
    cy.visit('/')
    cy.get('.content span').contains('x-clone app is running!')
  })
})