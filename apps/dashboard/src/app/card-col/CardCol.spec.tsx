import { render } from '@testing-library/react';

import { CardCol } from './CardCol';

describe('CardCol', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCol id="1" title="new" />);
    expect(baseElement).toBeTruthy();
  });
});
