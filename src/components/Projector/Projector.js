import React, { useCallback, useEffect, useState } from 'react';

import { Box, Typography } from '@material-ui/core';

function Projector() {
  const [fontSize, setFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  const [isObs, setIsObs] = useState(localStorage.getItem('isObs') ?? false);

  const [resource, setResource] = useState(
    JSON.parse(localStorage.getItem('projectorResource')) ?? {}
  );

  const [reference, setReference] = useState(
    JSON.parse(localStorage.getItem('reference')) ?? {}
  );

  const changed = useCallback((e) => {
    switch (e.key) {
      case 'projectorFontSize':
        setFontSize(parseInt(e.newValue));
        break;

      case 'isObs':
        setIsObs(e.newValue);
        break;

      case 'projectorResource':
        setResource(JSON.parse(e.newValue));
        break;

      case 'reference':
        setReference(JSON.parse(e.newValue));
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', changed, false);
    return () => window.removeEventListener('storage', changed);
  }, [changed]);

  const { bookId, chapter, verse } = isObs === 'true' ? reference.obs : reference.bible;

  return (
    <Box fontSize={fontSize + 'px'}>
      Projector
      <br />
      <Typography>{JSON.stringify({ fontSize, resource, reference })}</Typography>
      <Typography>
        Content:{localStorage.getItem(resource.owner + '__' + resource.name)}
      </Typography>
      <Typography>Reference: {`${bookId} ${chapter}:${verse}`}</Typography>
      <Typography>Name: {resource.title}</Typography>
    </Box>
  );
}

export default Projector;
