describe('Test de prueba', () => {
  
  beforeEach('open application', () =>{
    cy.openHomePage()
})
  
  it('passes', () => {
    cy.get('.toggle').click()
    cy.get(':nth-child(18) > a').click()
    const codigoAscii = 
    //Math.floor(Math.random() * (122 - 97 + 1)) + 97
    Math.floor(Math.random() * 2) === 0
  ? Math.floor(Math.random() * (90 - 65 + 1)) + 65  // Letra mayúscula (65-90)
  : Math.floor(Math.random() * (122 - 97 + 1)) + 97; // Letra minúscula (97-122)
    const letraAleatoria = String.fromCharCode(codigoAscii)
    cy.get('#myInput').type(letraAleatoria).then((input)=>{
      const texto = input.text()
    cy.get('#myInputautocomplete-list').should('contain', texto)
    })
  })

 /*    it.only('numeros y signos', () => {
      cy.get('.toggle').click()
      cy.get(':nth-child(18) > a').click()
     
      const codigoAscii = Math.floor(Math.random() * (254 - 0 + 1)) + 0;
      const letraRandom = String.fromCharCode(codigoAscii);
      
      cy.get('#myInput').type(letraRandom).then(() => {
        const letrasIncluidas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
          'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z'];
  
        if (letrasIncluidas.includes(letraRandom)) {
          cy.get('#myInputautocomplete-list').should('contain', letraRandom);
        } else {
          cy.get('#myInputautocomplete-list').should('be.empty');
        }
      })
  }) */
  it.only('numeros y signos', () => {
    cy.get('.toggle').click()
    cy.get(':nth-child(18) > a').click()
   
    const codigoAscii = Math.floor(Math.random() * (254 - 32 + 1)) + 32;
    const letraRandom = String.fromCharCode(codigoAscii);
    const letrasIncluidasExpresionRegular = /^[a-vy-zA-VY-Z]$/;

    cy.get('#myInput').type(letraRandom).then(() => {
      if (letrasIncluidasExpresionRegular.test(letraRandom)) {
        cy.get('#myInputautocomplete-list').should('contain', letraRandom);
      } else {
        cy.get('#myInputautocomplete-list').should('be.empty');
      }
    })
})
})