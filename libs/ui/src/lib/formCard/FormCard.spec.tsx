import { render } from '@testing-library/react';

import { FormCard } from './FormCard';

describe('FormCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormCard />);
    expect(baseElement).toBeTruthy();
  });
});
