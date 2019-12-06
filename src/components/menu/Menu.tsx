import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collection } from '../../store/newCollectionReducers';
import { GlobalStore } from '../../store';

interface P {
  collections: Collection[];
}

const Menu: React.FC<P> = ({ collections }) => {
  return (
    <div>
      <h1>Menu works!</h1>
      {collections.map(item => {
        const { title } = item;
        return (
          <div key={title}>
            <span>{title}</span>
            <button>
              Pick List
            </button>
          </div>
        )
      })}
    </div>
  );
};

Menu.propTypes = {
  collections: PropTypes.array.isRequired
};

const mapStateToProps = ({ collections }: GlobalStore) => ({
  collections
});

export default connect(mapStateToProps)(Menu);
