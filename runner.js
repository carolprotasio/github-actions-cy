const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImIwZTMzY2QxLWMwOGYtNDUyNy04ZmJlLTk0YWUyODYwYmRiMS0xNzI4MDcxOTY2NTYzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzU1MTM0YmItYjk4Ny00NDY3LTk2M2YtZDQ4N2UxNTI4YjRkIiwidHlwZSI6InQifQ.aGn19w-aqQJaERC9LPtEpU-XBuEDKt8murzsJRdxMOA'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
