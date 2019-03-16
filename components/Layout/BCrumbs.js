import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import MaterialLink from '@material-ui/core/Link';
import { withRouter } from 'next/router';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
})

const renderLink = ({ name, path }) => {
  return (
    <Link href={path} key={path}>
      <MaterialLink color="inherit" href="">
        {name}
      </MaterialLink>
    </Link>
  )
}

const BCrumbs = withRouter(({ router, classes }) => {
  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
        {/* render home link */}
        { renderLink({
          name: 'Home',
          path: '/'
        }) }
        {/* render continent link */}
        {
          router.query.name && renderLink({
            name: router.query.name,
            path: `/continent?name=${router.query.name}`
          })
        }
        {/* render country link */}
        {
          router.query.country && renderLink({
            name: router.query.country,
            path: `/continent/country?name=${router.query.name}&country=${router.query.country}`
          })
        }
      </Breadcrumbs>
    </div>
  )
})

export default withStyles(styles)(BCrumbs);
