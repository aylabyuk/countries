import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import MaterialLink from '@material-ui/core/Link';

import AppContainer from '../../state/AppContainer';
import { useContext } from 'react';

const styles = theme => ({
  bcrumb: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
})

const renderLink = ({ name, path }) => {
  const { backToRoot } = useContext(AppContainer.Context);

  return (
    <Link href={path}>
      <MaterialLink color="inherit" href="" onClick={() => name === 'Continents' && backToRoot()}>
        { name }
      </MaterialLink>
    </Link>
  )
}

const renderText = ({name}) => {
  return (
    <Typography color="textPrimary">{name}</Typography>
  )
}

const BCrumbs = ({ classes }) => {
  const { currentPath } = useContext(AppContainer.Context);

  return (
    <div className={classes.bcrumb}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
        {
          currentPath.map(({ name, path }, index) => {
            if (index + 1 === currentPath.length) {
              return renderText({ name })
            } else {
              return renderLink({ name, path })
            }
          })
        }
      </Breadcrumbs>
    </div>
  )
}

export default withStyles(styles)(BCrumbs);
