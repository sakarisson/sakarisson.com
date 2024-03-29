---
title: Quick tip for generating component props for testing
date: 2022-12-27
description: A nifty little trick I've been using when testing React components
---

As component testing has become more common and intuitive to React developers, it's become common practice in most teams to run unit tests against their React components using tools like [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

It's a nice tool that allows you to easily instantiate React components and interact with them in a unit test environment. This is useful because it more closely simulates the user experience rather than just testing business logic, functions and classes.

One tiny nit I've been running into over the years is the issue of creating props. It's a small issue, but after a while it does get a bit annoying to have to copy-paste the same props over and over, especially if they are not really related to what we are actually testing.

As an example, let's consider the scenario where we are testing a `Button` component with the following props:

```typescript
type Button = {
  label: string;
  icon?: React.ReactNode;
  variant: 'primary' | 'secondary';
  status?: 'enabled' | 'disabled';
  onClick: () => void;
  dataTestId?: string;
};
```

And a corresponding click registration test suite:

```typescript
it('handles click when enabled', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(
    <Button
      label="Click me"
      variant="primary"
      status="enabled"
      onClick={onClick}
      dataTestId="button"
    />,
  );
  fireEvent.click(getByTestId('button'));
  expect(onClick).toHaveBeenCalled();
});

it('does not handle click when disabled', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(
    <Button
      label="Click me"
      variant="primary"
      status="disabled"
      onClick={onClick}
      dataTestId="button"
    />,
  );
  fireEvent.click(getByTestId('button'));
  expect(onClick).not.toHaveBeenCalled();
});
```

It's not the end of the world, but in this test we are explicitly passing a some props that we don't actually care about, such as `label` and `variant`.

With a big test suite this can become cumbersome and tedious, especially if the API contract changes, and you need to update the props passed to the component.

## The solution

I've been using a simple `getProps` function that works very nicely for these simple use cases. It's a function that returns some default props and can take overrides as arguments:

```typescript
const getProps = (
  // Using `React.ComponentProps` here, but `Props` can also be imported directly
  overrides: Partial<React.ComponentProps<typeof Button>> = {},
): Props => ({
  // Default props
  label: 'Click me',
  variant: 'primary',
  status: 'enabled',
  onClick: jest.fn(),
  ...overrides,
});
```

Why have it as a function instead of just a static object? The reason is because we want handlers to be uniquely defined functions for each test run. For example, if we had a constant `props` object, then in this case the `onClick` handler would evaluate as the same instance of `jest.fn()` on each test run.

With the helper the same test suite as above can be rewritten as:

```typescript
it('handles click when enabled', () => {
  const props = getProps({
    dataTestId: 'button',
    status: 'enabled',
  });
  const { getByTestId } = render(<Button {...props} />);
  fireEvent.click(getByTestId('button'));
  expect(props.onClick).toHaveBeenCalled();
});

it('does not handle click when disabled', () => {
  const props = getProps({
    dataTestId: 'button',
    status: 'disabled',
  });
  const { getByTestId } = render(<Button {...props} />);
  fireEvent.click(getByTestId('button'));
  expect(props.onClick).not.toHaveBeenCalled();
});
```

It's a small difference in this contrived example, but I've found it to be quite useful when dealing with tests in real life. The nice thing is that function itself is so simple that it can easily be reimplemented in each test suite.

It's also entirely type-safe, so you'll immediately be warned if the prop interface doesn't match anymore. In this case we would simply go to the test suite and update the `getProps` function, instead of needing to modify all of the component calls individually.
