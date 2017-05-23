# Candidates
### A little app enabling members to learn about candidates for an election

## Getting set up in development

- Install client-side dependencies `npm install`
- Install server-side dependencies `(cd server && npm install)`

## Running the app in development
- Start the client `npm start`
- Start the server (in a new shell) `cd server && npm start`
- Open the app `open http://localhost:3000`





This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  server/
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

## Integrating with an API Backend

These tutorials will help you to integrate your app with an API backend running on another port,
using `fetch()` to access it.

### Node
Check out [this tutorial](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo).

## Proxying API Requests in Development

>Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.<br>
For example, a production setup might look like this after the app is deployed:

```
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation
```

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:

```js
  "proxy": "http://localhost:4000",
```

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:4000/api/todos` as a fallback. The development server will only attempt to send requests without a `text/html` accept header to the proxy.

Conveniently, this avoids [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) and error messages like this in development:

```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.<br>
If the `proxy` option is **not** flexible enough for you, alternatively you can:

* Enable CORS on your server ([here’s how to do it for Express](http://enable-cors.org/server_expressjs.html)).
* Use [environment variables](#adding-custom-environment-variables) to inject the right server host and port into your app.

## Using HTTPS in Development

>Note: this feature is available with `react-scripts@0.4.0` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](#proxying-api-requests-in-development) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

## Pre-Rendering into Static HTML Files

If you’re hosting your `build` with a static hosting provider you can use [react-snapshot](https://www.npmjs.com/package/react-snapshot) to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page _with_ the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:

```js
  "homepage": "https://myusername.github.io/my-app",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save-dev gh-pages
```

Add the following scripts in your `package.json`:

```js
  // ...
  "scripts": {
    // ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#histories) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

### Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2. Install `serve` by running `npm install --save serve`.

3. Add this line to `scripts` in `package.json`:
    
    ```
    "now-start": "serve build/",
    ```
    
4. Run `now` from your project directory. You will see a **now.sh** URL in your output like this:
    
    ```
    > Ready! https://your-project-dirname-tpspyhtdtk.now.sh (copied to clipboard)
    ```
    
    Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://zeit.co/blog/now-static)

### S3 and CloudFront

See this [blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) on how to deploy your React app to Amazon Web Services [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/).

### Surge

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account. You just need to specify the *build* folder and your custom domain, and you are done.

```sh
              email: email@domain.com
           password: ********
       project path: /path/to/project/build
               size: 7 files, 1.8 MB
             domain: create-react-app.surge.sh
             upload: [====================] 100%, eta: 0.0s
   propagate on CDN: [====================] 100%
               plan: Free
              users: email@domain.com
         IP Address: X.X.X.X

    Success! Project is published and running at create-react-app.surge.sh
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file](https://surge.sh/help/adding-a-200-page-for-client-side-routing).

## Advanced Configuration

You can adjust various development and production settings by setting environment variables in your shell or with [.env](#adding-development-environment-variables-in-env).

Variable | Development | Production | Usage
:--- | :---: | :---: | :---
BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser](https://github.com/sindresorhus/opn#app) to override this behavior, or set it to `none` to disable it completely.
HOST | :white_check_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host.
PORT | :white_check_mark: | :x: | By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port.
HTTPS | :white_check_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode.
PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in [`package.json` (`homepage`)](#building-for-relative-paths). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application.
CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default.

## Troubleshooting

### `npm start` doesn’t detect changes

When you save a file while `npm start` is running, the browser should refresh with the updated code.<br>
If this doesn’t happen, try one of the following workarounds:

* If your project is in a Dropbox folder, try moving it out.
* If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher](https://github.com/facebookincubator/create-react-app/issues/1164) due to a Webpack bug.
* Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Working with editors supporting safe write”](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write).
* If your project path contains parentheses, try moving the project to a path without them. This is caused by a [Webpack watcher bug](https://github.com/webpack/watchpack/issues/42).
* On Linux and macOS, you might need to [tweak system settings](https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers) to allow more watchers.
* If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread](https://github.com/facebookincubator/create-react-app/issues/659).

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your [Watchman](https://facebook.github.io/watchman/) installation as described in [facebookincubator/create-react-app#713](https://github.com/facebookincubator/create-react-app/issues/713).

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

* [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
* [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
* [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use [Homebrew](http://brew.sh/), you can run these commands to update it:

```
watchman shutdown-server
brew update
brew reinstall watchman
```

You can find [other installation methods](https://facebook.github.io/watchman/docs/install.html#build-install) on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that *uninstalling* Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` silently fails

It is reported that `npm run build` can fail on machines with no swap space, which is common in cloud environments. If [the symptoms are matching](https://github.com/facebookincubator/create-react-app/issues/1133#issuecomment-264612171), consider adding some swap space to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames.
Please refer to [this section](#resolving-heroku-deployment-errors).

## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
