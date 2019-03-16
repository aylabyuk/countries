import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import MaterialLink from '@material-ui/core/Link';
import { withRouter } from 'next/router'

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
})

const renderLink = ({ name, path }) => {
  return (
    <Link href={path} key={path}>
      <MaterialLink color="inherit" href="">
        { name }
      </MaterialLink>
    </Link>
  )
}

const renderText = ({name}) => {
  return (
    <Typography color="textPrimary" key={name}>{name}</Typography>
  )
}

const BCrumbs = withRouter(({ router, classes }) => {
  console.log(router)
  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
        {
          
        }
      </Breadcrumbs>
    </div>
  )
})

export default withStyles(styles)(BCrumbs);
