import React, { useState } from 'react';

import { MenuItem } from '@material-ui/core';
import CanvasPic from './CanvasPic';

import { DialogUI } from '../../components';

function VerseInPictures({ verse }) {
  const [showVerseInPictures, setShowVerseInPictures] = useState(false);

  return (
    <>
      <MenuItem
        divider={true}
        onClick={() => {
          setShowVerseInPictures(true);
        }}
      >
        text
      </MenuItem>
      <DialogUI
        open={showVerseInPictures}
        onClose={() => {
          setShowVerseInPictures(false);
        }}
        title="Share a verse"
      >
        <CanvasPic verse={verse} />
      </DialogUI>
    </>
  );
}

export default VerseInPictures;
