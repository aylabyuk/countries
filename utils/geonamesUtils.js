import Geonames from 'geonames.js';

const geonames = new Geonames({username: 'thevinci', lan: 'en', encoding: 'JSON'});

module.exports = {
  // get all continents
  getContinents: async () => {
    return new Promise((resolve, reject) => {
      geonames.search({ q: 'CONT', fcodeName: 'continent' })
        .then(res => {
          const continents = res.geonames.filter((item) => item.fcode === 'CONT')
          resolve({continents})
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getTest: () => {
    return 'test'
  }
}