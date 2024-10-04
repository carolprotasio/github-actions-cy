const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'chrome'
})
.then((results) => {
  const args = {
    target: process.env.TTARGET_TOKEN_CHROME,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
