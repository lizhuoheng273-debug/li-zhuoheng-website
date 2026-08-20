import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('personal website', () => {
  it('opens in Chinese with Li Zhuoheng and the approved AI Product thesis', () => {
    render(<App />);

    expect(screen.getByText('李卓衡')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '把复杂的业务问题，转成值得被使用的 AI 产品。' })).toBeInTheDocument();
  });
});

it('switches the hero to professionally written English', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: 'EN' }));

  expect(screen.getByRole('heading', { name: 'Turning complex business problems into AI products worth using.' })).toBeInTheDocument();
});

it('presents Audencia and IELTS 7.5 in the academic record', () => {
  render(<App />);

  expect(screen.getByText(/Audencia Business School/)).toBeInTheDocument();
  expect(screen.getByText(/IELTS 7.5/)).toBeInTheDocument();
});
