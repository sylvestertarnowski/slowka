import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCollection } from '../../store/collectionsActions';
import { Collection } from '../../store/newCollectionReducers';
import { GlobalStore } from '../../store';

interface P {
  newCollection: Collection;
  saveCollection: (
    config: Collection
  ) => {
    type: string;
    payload: Collection;
  };
  collections: Collection[];
}

const CollectionSaveButton: React.FC<P> = ({
  saveCollection,
  newCollection,
  collections
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    const isTitleTaken = collections.some(
      ({ title }) => title === newCollection.title
    );
    if (isTitleTaken) {
      setShowWarning(true);
    } else {
      saveCollection(newCollection);
      setShowWarning(false);
      setShowSuccess(true);
    }
  };

  return (
    <>
      <button type="button" onClick={handleSave}>
        Save Collection
      </button>
      {showWarning && <div color="red">List title already exists!</div>}
      {showSuccess && <div color="green">Success!</div>}
    </>
  );
};

CollectionSaveButton.propTypes = {
  newCollection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    collection: PropTypes.array.isRequired
  }).isRequired,
  saveCollection: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired
};

const mapStateToProps = ({ newCollection, collections }: GlobalStore) => ({
  newCollection,
  collections
});

const mapDispatchToProps = {
  saveCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionSaveButton);
