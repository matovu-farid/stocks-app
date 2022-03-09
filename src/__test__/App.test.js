import {
  render, waitFor, screen, fireEvent,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockData from './mockData';
import TestApp from './TestApp';

const server = setupServer(
  rest.get(/stock-screener/i, (req, res, ctx) => res(ctx.json(mockData))),
);

beforeAll(() => server.listen({
  onUnhandledRequest: 'bypass',
}));
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

it('renders a item with apple text on homepage', async () => {
  render(
    <TestApp />,
  );
  await waitFor(() => screen.getByText(/apple/i));
  expect(screen.queryByText(/apple/i)).toBeInTheDocument();
});
it('searches for badvalue and apple is filtered from sreen', async () => {
  render(
    <TestApp />,
  );
  const search = screen.queryByPlaceholderText(/search/i);
  await waitFor(() => screen.getByText(/apple/i));
  expect(search).toBeInTheDocument();
  expect(screen.queryByText(/apple/i)).toBeInTheDocument();
  expect(screen.queryByDisplayValue(/badvalue/)).not.toBeInTheDocument();
  fireEvent.change(search, { target: { value: 'badvalue' } });
  expect(screen.queryByDisplayValue(/badvalue/)).toBeInTheDocument();
  expect(screen.queryByText(/apple/i)).not.toBeInTheDocument();
});

it('renders a company stats for apple when clicked', async () => {
  render(
    <TestApp />,
  );
  await waitFor(() => screen.getByText(/apple/i));
  expect(screen.queryByText(/stats by company/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/apple/i));
  expect(screen.queryByText(/stats by company/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/company stats/i)).toBeInTheDocument();
});
