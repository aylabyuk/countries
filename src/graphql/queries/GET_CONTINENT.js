import gql from 'graphql-tag';

export default gql`
  query continent($continentName: String!) {
    continent(continentName: $continentName) {
      name
      geonameId
      lat
      lng
      bbox {
        east
        south
        north
        west
      }
      population
    }
  }
`