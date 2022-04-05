import { Box, Button, Select, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@material-ui/core';
import { FontSizeSlider } from 'translation-helps-rcl';
import { Card } from 'translation-helps-rcl';
import { AppContext } from '../../context';
import { langNames } from '../../config/materials';

function CardSettings({ classes }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const projectorWindow = useRef();
  const {
    state: { fontSize, resourcesApp, resourceLinks },
    actions: { setAppConfig },
  } = useContext(AppContext);
  const [projectorResource, setProjectorResource] = useState();
  const [projectorFontSize, setProjectorFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  useEffect(() => {
    localStorage.setItem('projectorFontSize', projectorFontSize);
  }, [projectorFontSize]);

  useEffect(() => {
    localStorage.setItem('projectorResource', JSON.stringify(projectorResource));
  }, [projectorResource]);

  const listItems = useMemo(
    () =>
      resourcesApp.filter((el) => {
        return resourceLinks.includes(el.link);
      }),
    [resourceLinks, resourcesApp]
  );

  const [resource, setResource] = useState(listItems[0]);

  const onClose = () => {
    setAppConfig((prev) => {
      const next = { ...prev };
      for (let k in next) {
        next[k] = next[k].filter((el) => el.i !== 'projector');
      }

      return next;
    });
  };

  const handleProjectorToggle = () => {
    if (isOpen) {
      projectorWindow.current.close();
      setIsOpen(false);
    } else {
      projectorWindow.current = window.open('/projector', 'projector', 'popup=1');
      setIsOpen(true);
    }
  };
  const handleChange = (e) => {
    setResource(listItems[e.target.value]);
    setProjectorResource(listItems[e.target.value]);
  };

  return (
    <Card
      closeable
      onClose={onClose}
      title={t('Projector_settings')}
      classes={classes}
      id={'projector'}
      fontSize={fontSize}
    >
      <Box>
        <Typography>1. Open/Close functional</Typography>
        <Button
          variant="contained"
          color={isOpen ? 'secondary' : 'primary'}
          onClick={handleProjectorToggle}
        >
          {isOpen ? 'Close' : 'Open'}
        </Button>
        <Typography>2. Choose resource from opened cards</Typography>
        <Select value={resource.id} onChange={handleChange}>
          {listItems.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.title}({langNames[el.languageId].eng}|{el.name})
            </MenuItem>
          ))}
        </Select>
        <Typography>3. Font Size</Typography>
        <FontSizeSlider
          onChange={setProjectorFontSize}
          marks={false}
          max={150}
          min={50}
          step={10}
          value={projectorFontSize}
        />
        <Typography>4. Pre-default theme</Typography>
      </Box>
    </Card>
  );
}

export default CardSettings;
