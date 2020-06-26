import { connect } from 'react-redux';
import { RootState, actions } from '../../store';
import Cart from './presenter';

const mapStateToProps = (state: RootState) => ({
    items: state.catalog.items,
    itemsInCart: state.cart.items,
});

const mapDispatchToProps = {
    clear: actions.cart.clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);