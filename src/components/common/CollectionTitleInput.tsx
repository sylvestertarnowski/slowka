import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GlobalStore } from '../../store';
import { addTitle } from '../../store/newCollectionActions';
import _uniqueId from 'lodash/uniqueId';

interface P {
  title: string;
  addTitle: (title: string) => { type: string; payload: string };
}

const CollectionTitleInput: React.FC<P> = ({ addTitle, title }) => {
  const [titleId] = useState(_uniqueId('new-list-title-'));

  return (
    <label htmlFor={titleId}>
      Title:
      <input
        id={titleId}
        type="text"
        value={title}
        onChange={e => addTitle(e.target.value)}
      />
    </label>
  );
};

CollectionTitleInput.propTypes = {
  addTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = (state: GlobalStore) => ({
  title: state.newCollection.title
});

const mapDispatchToProps = {
  addTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionTitleInput);
