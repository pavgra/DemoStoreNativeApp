import * as React from 'react';
import { Component } from 'react';
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

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaymentInProgress: false,
        }
    }

    render() {
        return (
            <Cart
                {...this.props}
                isPaymentInProgress={this.state.isPaymentInProgress}
                startPayment={() => this.setState({ isPaymentInProgress: true })}
                cancelPayment={() => this.setState({ isPaymentInProgress: false })}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);