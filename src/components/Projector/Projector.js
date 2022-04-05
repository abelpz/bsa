import { Box, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useContent } from 'translation-helps-rcl';

const server = 'https://git.door43.org/';
function Projector() {
  const [fontSize, setFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  const [resource, setResource] = useState(
    JSON.parse(localStorage.getItem('projectorResource')) ?? {}
  );

  const [reference, setReference] = useState(
    JSON.parse(localStorage.getItem('reference')) ?? {}
  );

  const changed = useCallback((e) => {
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
  let config = null;
  switch (resource.subject) {
    case 'TSV Translation Notes':
      config = {
        verse: String(reference.bible.verse),
        chapter: String(reference.bible.chapter),
        projectId: reference.bible.bookId,
        ref: resource.ref ?? 'master',
        languageId: resource.languageId ?? 'ru',
        resourceId: 'tn',
        owner: resource.owner ?? 'door43-catalog',
        server,
        httpConfig: { noCache: true },
      };
      break;
    // case 'Translation Academy':
    //   CurrentCard = SupportTA;
    //   break;
    case 'TSV Translation Questions':
    case 'Translation Questions':
      config = {
        verse: String(reference.bible.verse),
        chapter: String(reference.bible.chapter),
        projectId: reference.bible.bookId,
        ref: resource.ref ?? 'master',
        languageId: resource.languageId ?? 'ru',
        resourceId: 'tq',
        owner: resource.owner ?? 'door43-catalog',
        server,
      };
      break;

    case 'TSV Translation Words Links':
      config = {
        verse: String(reference.bible.verse),
        chapter: String(reference.bible.chapter),
        projectId: reference.bible.bookId,
        ref: resource.ref ?? 'master',
        languageId: resource.languageId ?? 'ru',
        resourceId: 'twl',
        owner: resource.owner ?? 'door43-catalog',
        server,
      };
      break;

    // case 'Open Bible Stories':
    //   CurrentCard = OBSVerses;
    //   break;

    case 'OBS Translation Questions':
    case 'TSV OBS Translation Questions':
      config = {
        verse: String(reference.bible.verse),
        chapter: String(reference.bible.chapter),
        projectId: reference.bible.bookId,
        ref: resource.ref ?? 'master',
        languageId: resource.languageId ?? 'ru',
        resourceId: 'obs-tq',
        owner: resource.owner ?? 'door43-catalog',
        server,
      };
      break;

    // case 'OBS Translation Notes':
    // case 'TSV OBS Translation Notes':
    //   CurrentCard = SupportOBSTN;
    //   break;

    // case 'OBS Study Questions':
    // case 'TSV OBS Study Questions':
    //   CurrentCard = SupportOBSSQ;
    //   break;

    // case 'OBS Study Notes':
    // case 'TSV OBS Study Notes':
    //   CurrentCard = SupportOBSSN;
    //   break;

    // case 'TSV OBS Translation Words Links':
    //   CurrentCard = SupportOBSTWL;
    //   break;

    case 'Bible':
    case 'Aligned Bible':
    case 'Hebrew Old Testament':
    case 'Greek New Testament':
      config = {
        verse: String(reference.bible.verse),
        chapter: String(reference.bible.chapter),
        projectId: reference.bible.bookId,
        ref: resource.ref,
        languageId: resource.languageId,
        resourceId: resource.name.split('_')[1],
        owner: resource.owner,
        server,
      };
      break;

    default:
    //return false;
  }
  console.log({ reference });
  console.log({ config });
  const content = useContent({
    ...config,
  });
  console.log({ content });

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
