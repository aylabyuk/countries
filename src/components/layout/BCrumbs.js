import React from 'react';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import { withRouter, Link } from 'react-router-dom';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
})

const renderLink = ({ item, index, loc }) => {
  let text = item;
  if (index === 0) {
    text = 'Home'
  }

  const path = loc.filter((item, i) => {
    return i <= index;
  }).join('/')

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Typography color="textPrimary">{text}</Typography>
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
                { renderLink({item, index, loc}) }
              </div>
            )
          })
        }
      </Breadcrumbs>
    </div>
  )
})

export default withStyles(styles)(BCrumbs);
