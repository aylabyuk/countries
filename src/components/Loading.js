import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";

const Loading = (props) => {
  return (
    <LinearProgress color="primary" variant="indeterminate"/>
  );
}
 
export default Loading;