import gql from 'graphql-tag';

export default gql`
  query countries($continentName: String!) {
    countries(continentName: $continentName) {
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