describe('Pokémon list and details flow', () => {
    it('should display a list of Pokémon and navigate to the detail page', () => {
      // Visit the Pokémon list page
      cy.visit('http://localhost:3000/pokemon')
  
      // Check that the Pokémon list is loaded and contains at least one item
      cy.get('button').contains('View Details').should('be.visible')
  
      // Click on the "View Details" button
      cy.get('button').contains('View Details').click()
  
      // Verify the navigation to the Pokémon detail page
      cy.url().should('include', '/pokemon/')
      cy.get('h1').should('contain.text', 'Pokémon Details')
    })
  })
  