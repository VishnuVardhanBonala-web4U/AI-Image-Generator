/* import { render, screen } from '@testing-library/react';
import App from './App';

test( 'renders learn react link',
  () =>
  {
    render( <App /> );
    const linkElement = screen.getByText( /react learn/i );
    expect( linkElement ).toBeInTheDocument();

  } );
 */

import Enzyme, { shallow } from 'enzyme';

import App from "./App"
import ReactEighteenAdapter from '@cfaester/enzyme-adapter-react-18';
 
Enzyme.configure( { adapter: new ReactEighteenAdapter() } );

test( "checking header tag", () =>
{
  const wrapper = shallow( <App name="vishnu"/> )
  expect(wrapper.find('#myname').text()).toBe('vishnu')
} );

test( " Counter values checking", () =>
{
  const wrapper = shallow( <App /> )
  expect(wrapper.find('#count').text()).toBe('0')
})