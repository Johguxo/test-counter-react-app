import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('render the initial number', () => {
  render(<App />);
  screen.getByText("4");
});

describe('buttons test', () => {
  test('button +', () => {
    render(<App />);
    const btn = screen.getByRole("button", {name:"+"});
    fireEvent.click(btn);
    screen.getByText("5")
  });
  test('button reset', () => {
    render(<App />);
    const btn = screen.getByRole("button", {name:"Reset"});
    fireEvent.click(btn);
    screen.getByText("0")
  });
  test('button -', () => {
    render(<App />);
    const btn = screen.getByRole("button", {name:"-"});
    fireEvent.click(btn);
    screen.getByText("3")
  });
})