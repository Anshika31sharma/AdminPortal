import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Admin Portal UI', () => {
  test('renders Navbar with title', () => {
    render(<App />);
    expect(screen.getByText('Admin Portal')).toBeInTheDocument();
  });

  test('renders Sidebar items', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Application')).toBeInTheDocument();
  });

  test('renders Tabs and switches active tab', () => {
    render(<App />);
    const approvedTab = screen.getByTestId('approved-tab');
    const rejectedTab = screen.getByTestId('rejected-tab');

    fireEvent.click(approvedTab);
    expect(approvedTab).toHaveClass('border-b-2');

    fireEvent.click(rejectedTab);
    expect(rejectedTab).toHaveClass('border-b-2');
  });
});
