import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollectionItemInput from '../common/CollectionItemInput';

const Create = ({ newCollection }) => {
  const { collection, title } = newCollection;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {collection.map(item => (
          <li>{`${item.word} - ${item.translation}`}</li>
        ))}
      </ul>
      <CollectionItemInput />
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

const mapStateToProps = state => ({
  newCollection: state.newCollection
});

export default connect(mapStateToProps)(Create);
