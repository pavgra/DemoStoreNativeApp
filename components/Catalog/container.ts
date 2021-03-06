import { connect } from 'react-redux';
import { RootState, actions } from '../../store';
import Catalog from './presenter';

const mapStateToProps = (state: RootState) => ({
    items: state.catalog.items,
    itemsInCart: state.cart.items,
});

const mapDispatchToProps = {
    addToCart: actions.cart.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);