import { MenuItem } from '@material-ui/core';
import React, { useContext } from 'react';
import { getXY } from 'resource-workspace-rcl';
import { AppContext } from '../../context';
import { defaultCard, columns } from '../../config/base';
import { useTranslation } from 'react-i18next';

function ProjectorAdd() {
  const { t } = useTranslation();
  const {
    state: { appConfig },
    actions: { setAppConfig },
  } = useContext(AppContext);
  const handleAddCard = () => {
    setAppConfig((prev) => {
      const next = { ...prev };
      for (let k in next) {
        const pos = getXY(appConfig[k], columns[k], defaultCard[k].h, defaultCard[k].w);
        next[k] = next[k].concat({
          ...defaultCard[k],
          x: pos.x,
          y: pos.y,
          i: 'projector',
        });
      }
      return next;
    });
    setTimeout(function () {
      document.querySelector('#projector_title').scrollIntoView();
    }, 1000);
  };
  return (
    <MenuItem onClick={handleAddCard} divider={true}>
      {t('Projector_add')}
    </MenuItem>
  );
}

export default ProjectorAdd;
