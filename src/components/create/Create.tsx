import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollectionItemInput from '../common/CollectionItemInput';
import { Collection } from '../../store/newCollectionReducers';
import { GlobalStore } from '../../store';
import CollectionSaveButton from '../common/CollectionSaveButton';
import CollectionTitleInput from '../common/CollectionTitleInput';

interface P {
  newCollection: Collection;
}

const Create: React.FC<P> = ({ newCollection }) => {
  const { collection, title } = newCollection;

  return (
    <div>
      <h2>{title}</h2>
      <CollectionTitleInput />
      <ul>
        {collection.map(item => (
          <li>{`${item.word} - ${item.translation}`}</li>
        ))}
      </ul>
      <CollectionItemInput />
      <CollectionSaveButton />
    </div>
  );
};

Create.propTypes = {
  newCollection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    collection: PropTypes.array.isRequired
  }).isRequired
};

Create.defaultProps = {
  newCollection: {
    title: '',
    collection: []
  }
};

const mapStateToProps = (state: GlobalStore) => ({
  newCollection: state.newCollection
});

export default connect(mapStateToProps)(Create);
