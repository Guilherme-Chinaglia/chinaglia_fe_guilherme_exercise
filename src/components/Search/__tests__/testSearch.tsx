import {render, fireEvent, screen} from '@testing-library/react';
import Teams from 'pages/Teams';
import React from 'react';


describe('Teams', () => {
  it('should filter teams based on the search term', () => {
    const teams = [
      {id: 1, name: 'Team A'},
      {id: 2, name: 'Team B'},
      {id: 3, name: 'Team C'},
    ];
    const {getByLabelText, queryByText} = render(<Teams />);
    const searchInput = screen.getByLabelText('Search');
    fireEvent.change(searchInput, {target: {value: 'team'}});
    expect(screen.getByText('Team A')).toBeInTheDocument();
    expect(screen.getByText('Team B')).toBeInTheDocument();
    expect(screen.getByText('Team C')).toBeInTheDocument();
    fireEvent.change(searchInput, {target: {value: 'b'}});
    expect(screen.queryByText('Team A')).not.toBeInTheDocument();
    expect(screen.getByText('Team B')).toBeInTheDocument();
    expect(screen.queryByText('Team C')).not.toBeInTheDocument();
  });
});
