# learn_redux

## What Does the Redux Core Do?

The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

- `createStore` to actually create a Redux store
- `combineReducers` to combine multiple slice reducers into a single larger reducer
- `applyMiddleware` to combine multiple middleware into a store enhancer
- `compose` to combine multiple store enhancers into a single store enhancer

## What Does Redux Toolkit Do?

While these were the patterns originally shown in the Redux docs, they unfortunately require a lot of very verbose and repetitive code. Most of this boilerplate isn't necessary to use Redux. On top of that, the boilerplate-y code lead to more opportunities to make mistakes.

We specifically created Redux Toolkit to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.

Redux Toolkit starts with two key APIs that simplify the most common things you do in every Redux app:

- `configureStore` sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than `createStore`, because it takes named options parameters.

- `createSlice` lets you write reducers that use the Immer library to enable writing immutable updates using "mutating" JS syntax like `state.value = 123`, with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.

## Store

- keep redux store to only one store (while more than one is possible, but not recommended)
