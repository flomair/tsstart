import * as React from "react";
import RVTree from "react-virtualized-tree";


import {Node} from "../../../models/tree.model";

import Deletable from './deleteable'
import Expandable from './expandeble'
import Favorite from './favorite'
import NameRenderer from './nameRenderer'

interface TreeProps{
    nodes: Node[];
    onChange : (nodes: Node[]) => void;
}

const Tree: React.SFC<TreeProps> = (props) =>{
    return <RVTree {...props}>
    {({ node, ...rest }) => {
      return (
        <Expandable node={node} {...rest}>
          <NameRenderer node={node} {...rest}>
            <Deletable node={node} {...rest}>
              <Favorite node={node} {...rest} />
            </Deletable>
          </NameRenderer>
        </Expandable>
      );
    }}
  </RVTree>
    }
export default Tree

    