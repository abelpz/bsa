import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import uuid from 'react-uuid';
import { Card } from 'translation-helps-rcl';
import { AppContext } from '../../context';
import Main from './Main';
import Sidebar from './Sidebar';

function Notepad({ classes }) {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const { t } = useTranslation();
  const {
    state: { fontSize },
    actions: { setAppConfig },
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onClose = () => {
    setAppConfig((prev) => {
      const next = { ...prev };
      for (let k in next) {
        next[k] = next[k].filter((el) => el.i !== 'notepad');
      }

      return next;
    });
  };

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <Card
      closeable
      onClose={onClose}
      title={t('Notepad')}
      classes={classes}
      id={'notepad'}
      fff
      fontSize={fontSize}
    >
      <div className="Notepad">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </Card>
  );
}

export default Notepad;
