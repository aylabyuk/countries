import gql from 'graphql-tag';

export default gql`
  query countries($continentName: String!) {
    countries(continentName: $continentName) {
      continent
      capital
      languages
      geonameId
      isoAlpha3
      fipsCode
      population
      isoNumeric
      areaInSqKm
      countryCode
      countryName
      continentName
      currencyCode
      north
      east
      south
      west
    }
  }
`