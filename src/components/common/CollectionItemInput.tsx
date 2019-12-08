import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _uniqueId from 'lodash/uniqueId';
import { connect } from 'react-redux';
import { addItem } from '../../store/newCollectionActions';
import { saveCollection } from '../../store/collectionsActions';
import { CollectionItem } from '../../store/newCollectionReducers';

interface P {
  addItem: (config: CollectionItem) => any;
}

const CollectionItemInput: React.FC<P> = ({ addItem }) => {
  const firstInput = React.createRef<HTMLInputElement>();
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [wordId] = useState(_uniqueId('word-'));
  const [translationId] = useState(_uniqueId('translation-'));

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addItem({ id: parseInt(_uniqueId(), 10), word, translation });
    setWord('');
    setTranslation('');
    firstInput.current && firstInput.current.focus();
  };

  return (
    <form className="Collection-Item-Input">
      <label htmlFor={wordId}>Word:</label>
      <input
        type="text"
        ref={firstInput}
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
  addItem: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addItem,
  saveCollection
};

export default connect(null, mapDispatchToProps)(CollectionItemInput);
