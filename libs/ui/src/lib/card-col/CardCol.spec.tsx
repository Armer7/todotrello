import { render } from '@testing-library/react';

import CardCol from './CardCol';

describe('CardCol', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCol />);
    expect(baseElement).toBeTruthy();
  });
});
