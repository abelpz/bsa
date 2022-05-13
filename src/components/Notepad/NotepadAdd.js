import { MenuItem } from '@material-ui/core';
import React, { useContext } from 'react';
import { getXY } from 'resource-workspace-rcl';
import { AppContext } from '../../context';
import { defaultCard, columns } from '../../config/base';
import { useTranslation } from 'react-i18next';

function NotepadAdd({ handleCloseMainMenu }) {
  const { t } = useTranslation();
  const {
    state: { appConfig },
    actions: { setAppConfig },
  } = useContext(AppContext);
  const handleAddCard = () => {
    handleCloseMainMenu();
    setAppConfig((prev) => {
      const next = { ...prev };
      for (let k in next) {
        const pos = getXY(appConfig[k], columns[k], defaultCard[k].h, defaultCard[k].w);
        next[k] = next[k].concat({
          ...defaultCard[k],
          h: 8,
          x: pos.x,
          y: pos.y,
          i: 'notepad',
        });
      }
      return next;
    });
  };
  return (
    <MenuItem onClick={handleAddCard} divider={true}>
      {t('Notepad_add')}
    </MenuItem>
  );
}

export default NotepadAdd;
