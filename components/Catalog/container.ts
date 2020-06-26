import { connect } from 'react-redux';
import { RootState } from 'store';
import Catalog from './presenter';

const mapStateToProps = (state: RootState) => ({
    items: state.catalog.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);