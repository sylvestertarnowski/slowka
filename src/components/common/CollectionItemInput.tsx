import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _uniqueId from 'lodash/uniqueId';
import { connect } from 'react-redux';
import { addItem } from '../../store/newCollectionActions';
import { saveCollection } from '../../store/collectionsActions';

interface P {
  addItem: (config: { word: string; translation: string }) => any;
}

const CollectionItemInput: React.FC<P> = ({ addItem }) => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [wordId] = useState(_uniqueId('word-'));
  const [translationId] = useState(_uniqueId('translation-'));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addItem({ word, translation });
  };

  return (
    <form className="Collection-Item-Input">
      <label htmlFor={wordId}>Word:</label>
      <input
        type="text"
        value={word}
        id={wordId}
        onChange={e => setWord(e.target.value)}
      />
      <label htmlFor={translationId}>
        Translation:
        <input
          type="text"
          value={translation}
          id={translationId}
          onChange={e => setTranslation(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

CollectionItemInput.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addItem,
  saveCollection
};

export default connect(null, mapDispatchToProps)(CollectionItemInput);
