import { render, screen } from '@testing-library/react';
import HomeContainer from './HomeContainer';

it('SHould render custom data', ()=> {

    render(<HomeContainer />)
    const custom = screen.getAllByRole('button');
   

    userEvent.click(custom[0])
    .then(() =>{
        const heartAttack = screen.getByText('Heart Attack')
        expect(heartAttack).toBeInTheDocument
    })
  
  
   
  
   
})