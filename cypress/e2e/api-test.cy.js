/// <reference types="Cypress" />

describe('simple api testing', () => {

    it('Get Test', () =>{
        cy.request('GET' , 'https://petstore.swagger.io/v2/pet/1')
        .its('status')
        .should('equal', 200)
    })

    it('Post Test', () =>{
        cy.request({
            method: 'POST',
            url:  'https://petstore.swagger.io/v2/pet',
            body: {
                    "id": 1,
                    "category": {
                      "id": 1,
                      "name": "becks"
                    },
                    "name": "becks",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 1,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }
    
    })
    .its('status')
    .should('equal', 200)
    })

    it('Post Response Test', () =>{
        cy.request({
            method: 'POST',
            url:  'https://petstore.swagger.io/v2/pet',
            body: {
                    "id": 1,
                    "category": {
                      "id": 1,
                      "name": "becks"
                    },
                    "name": "becks",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 1,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }
    
    })
    .then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(1)
        expect(response.body.name).to.equal('becks')
        expect(response.body.category.name).to.equal('becks')
    })
    })

})