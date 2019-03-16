import { withRouter } from 'next/router'

const Continent = withRouter(props => (
  <div>
    <h1>{props.router.query.name}</h1>
    <p>This is the blog post content.</p>
  </div>
))

export default Continent