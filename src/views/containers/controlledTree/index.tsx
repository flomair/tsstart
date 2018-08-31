import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { AppState } from "../../../redux/app-state.model";
import {treeFetch} from "../../../redux/tree/actions";
import {StatefullTree} from "./inner";

const mapStateToProps = (state: AppState) => ({
    tree: state.tree,
});

const mapDispatchToProps = (dispatch: any) =>
bindActionCreators({treeFetch},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StatefullTree);