import React from 'react';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import MaterialLink from '@material-ui/core/Link';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
})

// const renderLink = ({ name, path }) => {
//   return (
//     // <Link href={path} key={path}>
//       <MaterialLink color="inherit" href="">
//         {name}
//       </MaterialLink>
//     // </Link>
//   )
// }

const BCrumbs = ({ router, classes }) => {
  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
        
      </Breadcrumbs>
    </div>
  )
}

export default withStyles(styles)(BCrumbs);
