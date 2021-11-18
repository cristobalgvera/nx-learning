import { render } from '@testing-library/react';

import Counter from './counter';

describe('Counter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Counter />);
    expect(baseElement).toBeTruthy();
  });

  it('should display zero as default initial count', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('counter').innerHTML).toBe('0');
  });

  it('should display the initial count', () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    expect(getByTestId('counter').innerHTML).toBe('5');
  });

  it('should display the incremented count', () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const incrementButton = getByTestId('increment-button');
    incrementButton.click();
    expect(getByTestId('counter').innerHTML).toBe('6');
  });

  it('should display the decremented count', () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const decrementButton = getByTestId('decrement-button');
    decrementButton.click();
    expect(getByTestId('counter').innerHTML).toBe('4');
  });

  it('should display the incremented count after multiple clicks', () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const incrementButton = getByTestId('increment-button');
    incrementButton.click();
    incrementButton.click();
    incrementButton.click();
    expect(getByTestId('counter').innerHTML).toBe('8');
  });

  it('should display the decremented count after multiple clicks', () => {
    const { getByTestId } = render(<Counter initialCount={5} />);
    const decrementButton = getByTestId('decrement-button');
    decrementButton.click();
    decrementButton.click();
    decrementButton.click();
    expect(getByTestId('counter').innerHTML).toBe('2');
  });
});
