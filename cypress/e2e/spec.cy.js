describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    describe('Drag and Drop Test', () => {
      it('should drag and drop an element', () => {
        cy.visit('your-page-url');
        
        // Get source and target elements
        const source = cy.get('#source-element');
        const target = cy.get('#target-element');
        
        // Trigger drag-and-drop using the plugin's realEvents method
        source.realType('dragstart');
        target.realType('drop');
      });
    });
    
  })
})