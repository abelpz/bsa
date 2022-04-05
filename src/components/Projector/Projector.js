import { Box, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';

function Projector() {
  const [fontSize, setFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  const [resource, setResource] = useState(
    localStorage.getItem('projectorResource') ?? 100
  );

  const [reference, setReference] = useState(localStorage.getItem('reference') ?? 100);

  const changed = useCallback((e) => {
    console.log(e);
    switch (e.key) {
      case 'projectorFontSize':
        setFontSize(e.newValue);
        break;

      case 'projectorResource':
        setResource(e.newValue);
        break;

      case 'reference':
        setReference(e.newValue);
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', changed, false);
    return () => window.removeEventListener('storage', changed);
  }, [changed]);

  return (
    <Box fontSize={fontSize + 'px'}>
      Projector
      <br />
      <Typography>{JSON.stringify({ fontSize, resource, reference })}</Typography>
    </Box>
  );
}

export default Projector;
