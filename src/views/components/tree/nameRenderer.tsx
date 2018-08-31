import * as React from "react";
export default  ({ node: { name  }, children }: {node:{name: string}, children: any}) => (
    <span>
      {name}
      {children}
    </span>
  );