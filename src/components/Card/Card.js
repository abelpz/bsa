import React from 'react';

import Chapter from '../Chapter/Chapter';
import SupportTQ from '../SupportTQ/SupportTQ';
import SupportTN from '../SupportTN/SupportTN';
import { useTranslation } from 'react-i18next';

import { resourcesList } from '../../config';

import useStyles from './styled';

function Card({ type, onClose, reference }) {
  let CurrentCard;
  const { t } = useTranslation();
  const resource = resourcesList[type];

  switch (resource.resourceId) {
    case 'tn':
      CurrentCard = SupportTN;
      break;

    case 'tq':
      CurrentCard = SupportTQ;
      break;

    default:
      CurrentCard = Chapter;
      break;
  }
  const classes = useStyles();
  return (
    <CurrentCard
      classes={classes}
      title={t(resource.resourceId)}
      onClose={onClose}
      type={type}
      reference={reference}
    />
  );
}

export default Card;