import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCollection } from '../../store/collectionsActions';
import { Collection } from '../../store/newCollectionReducers';
import { GlobalStore } from '../../store';

interface P {
  newCollection: Collection;
  saveCollection: (config: {
    collection: Collection;
  }) => {
    action: string;
    payload: { collection: Collection };
  };
}

const CollectionSaveButton: React.FC<P> = ({
  saveCollection,
  newCollection
}) => {
  return (
    <button
      type="button"
      onClick={() => saveCollection({ collection: newCollection })}
    >
      Save Collection
    </button>
  );
};

CollectionSaveButton.propTypes = {
  newCollection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    collection: PropTypes.array.isRequired
  }).isRequired,
  saveCollection: PropTypes.func.isRequired
};

const mapStateToProps = ({ newCollection }: GlobalStore) => ({
  newCollection
});

const mapDispatchToProps = {
  saveCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionSaveButton);
