import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  });

  it('should render the Start Quiz button', () => {

    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz');
    
  });

  it('Start Quiz by click action on button', () => {

    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz').click();
    
  });

})