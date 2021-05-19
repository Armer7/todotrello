import { render } from '@testing-library/react';

import EditCard from './edit-card';

describe('EditCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< EditCard />);
    expect(baseElement).toBeTruthy();
  });
});
