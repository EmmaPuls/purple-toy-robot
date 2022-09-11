## Dev Environment

- node v16.16.0
- pnpm v7.11.0

## Stack

- pnpm to improve development experience
- MaterialUI for interactive UI components
- React
- TypeScript
- Reduxjs/toolkit for state management and thunks
- Emotion for styling
  \
  Originally I was using my own emotion theme, but after integrating MaterialUI I now have a hybrid theme. It was simple to move a few styles over, but focussed on features instead.
- Jest for testing
- React Testing Library for testing
- React-hooks testing library is not compatible with React 18, but I had no problems doing what I needed

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Once the build folder is ready to be deployed.
You may serve it with a static server:

`pnpm install -g serve`

`serve -s build`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
