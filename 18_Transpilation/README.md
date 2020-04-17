Transpilation
-----

# Overview
Set up a JavaScript directory with Babel to transpile ES6+ code to ES5.

The steps needed to set up a project for transpilation.
- create `src` directory, and place ES6 JavaScript files in the directory.
- `npm init` to create a package.json file in the root directory.
- `npm install babel-cli -D` to install the Babel command line.
- `npm install bable-preset-env -D` to install Babel preset environment npm packages.
- `touch .babelrc` to add the .babelrc file to the root directory.
- Preset the local project’s config to `"env"` in .babelrc.
- Add a script called `"build"` in package.json.
- `npm run build` to tranpile ES6 syntax to ES5.


(Source: Transpilation (n.d.). Retrieved from codeacademy https://www.codecademy.com/)