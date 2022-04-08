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
    state: { fontSize, resourcesApp, appConfig },
    actions: { setAppConfig },
  } = useContext(AppContext);
  const [projectorFontSize, setProjectorFontSize] = useState(
    localStorage.getItem('projectorFontSize') ?? 100
  );

  const currentCards = useMemo(() => appConfig.lg.map((el) => el.i), [appConfig.lg]);

  useEffect(() => {
    localStorage.setItem('projectorFontSize', projectorFontSize);
  }, [projectorFontSize]);

  const listItems = useMemo(
    () =>
      resourcesApp.filter((el) => {
        return currentCards?.includes(el.owner + '__' + el.name);
      }),
    [currentCards, resourcesApp]
  );

  const [selectedResource, setSelectedResource] = useState(listItems[0]);

  useEffect(() => {
    localStorage.setItem('projectorResource', JSON.stringify(selectedResource));
  }, [selectedResource]);

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
    const currentValue = listItems.find((el) => el.id === e.target.value);
    if (currentValue) {
      setSelectedResource(currentValue);
    }
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
        <Select value={selectedResource.id} onChange={handleChange}>
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
          max={500}
          min={50}
          step={10}
          value={parseInt(projectorFontSize)}
        />
        <Typography>4. Pre-default theme</Typography>
        <Typography>In progress...</Typography>
      </Box>
    </Card>
  );
}

export default CardSettings;
