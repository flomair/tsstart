import * as React from "react";
import "react-virtualized/styles.css";
import "react-virtualized-tree/lib/main.css";
import "material-icons/css/material-icons.css";


import { Tree,Node} from "../../../models/tree.model";


import StatelessTree from '../../components/tree/'


interface IProps{
    tree: Tree;
    treeFetch : () => void;
}

export class StatefullTree extends React.Component<IProps,any> {
  constructor(props:IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = { nodes: [] };

  componentDidMount() {
    this.props.treeFetch();
  }

  componentWillReceiveProps(nextProps:IProps) {
    if (!this.props.tree.loading.loaded && nextProps.tree.loading.loaded)
      this.handleChange(nextProps.tree.data.map(n => n));
  }

  handleChange = (nodes: Node[])  => {
    this.setState({ nodes });
  };

  render() {
    return(
        <div style={{flex:1}}>
      <StatelessTree nodes={this.state.nodes} onChange={this.handleChange}/>
      </div>
    )
  }
}
