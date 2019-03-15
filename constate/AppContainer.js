import React, { useState } from 'react';
import createContainer from 'constate';

const AppContainer = createContainer(() => {
  const [count] = useState(0);
  return count;  
});

export default AppContainer;
