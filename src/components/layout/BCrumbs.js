import React from 'react';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MaterialLink from '@material-ui/core/Link';
import { withRouter, Link } from 'react-router-dom';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
})

const renderLink = ({ item, index }) => {
  return (
    <Link to='/' >
      <MaterialLink color="inherit" href="">
        {item}
      </MaterialLink>
    </Link>
  )
}

const BCrumbs = withRouter(({ location, classes }) => {
  const loc = location.pathname.split('/');

  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
        {
          loc.map((item, index) => {
            return (
              <div key={item}>
                { renderLink({item, index}) }
              </div>
            )
          })
        }
      </Breadcrumbs>
    </div>
  )
})

export default withStyles(styles)(BCrumbs);
