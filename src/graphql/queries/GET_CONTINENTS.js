import gql from 'graphql-tag';

export default gql`{
  continents {
    lat
    lng
    bbox {
      east
      south
      north
      west
      accuracyLevel
    }
    name
    geonameId
    population
  }
}`