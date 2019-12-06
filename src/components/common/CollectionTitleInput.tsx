import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GlobalStore } from '../../store';
import { addTitle } from '../../store/newCollectionActions';

interface P {
  title: string;
  addTitle: ({
    title
  }: {
    title: string;
  }) => { type: string; payload: { title: string } };
}

const CollectionTitleInput: React.FC<P> = ({ addTitle, title }) => {
  return (
    <input
      type="text"
      value={title}
      onChange={e => addTitle({ title: e.target.value })}
    />
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
