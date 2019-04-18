import gql from 'graphql-tag';

export default gql`
  query country($continentName: String!, $countryName: String!) {
    country(continentName: $continentName, countryName: $countryName) {
      continent
      capital
      languages {
        code
        name
      }
      geonameId
      isoAlpha3
      fipsCode
      population
      isoNumeric
      areaInSqKm
      countryCode
      countryName
      continentName
      currency {
        code
        symbol
      }
      north
      east
      south
      west
    }
  }
`