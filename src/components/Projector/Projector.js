import React, { useCallback, useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function Projector() {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

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

      case 'index':
        setIndex(e.newValue + 1);
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

  useEffect(() => {
    setContent(localStorage.getItem(resource.owner + '__' + resource.name));
  }, [resource.name, resource.owner, index, bookId, chapter, verse]);

  return (
    <Box fontSize={fontSize * 2 + '%'}>
      <ReactMarkdown>{content}</ReactMarkdown>
      <div>{`${t(bookId)} ${chapter}:${verse}`}</div>
      <div>{resource.title}</div>
    </Box>
  );
}

export default Projector;
