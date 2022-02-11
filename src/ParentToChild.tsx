// import React, { useState } from 'react';

// interface Item {
//     title: string;
//   }
  
//   const items = [
//       {title: "chacked"},
//       {title: "chacked"},
//       {title: "chacked"},
//       {title: "chacked"},
//   ];

  
// export default function ParentToChild() {

//     const [someState, setSomeState] = useState("");

//    const toggleState = (e: React.MouseEvent, title: string) => {
//      setSomeState(title);
//    }
//   return (
//     <div>
//        <div>someState = {someState}</div>
//        <Child items={items} toggleState={(e, title) => toggleState(e, title)} />
//      </div>
//   )
// }

// type ChildProps = {
//     items: Item[];
//     toggleState: (e: React.MouseEvent, title: string) => void;
//    }
   
//    const Child: React.FC<ChildProps> = (props) => {
//       return <React.Fragment>
//        {props.items.map((item) => (
//           <button onClick={(e) => props.toggleState(e, item.title)}> pass clicked item title to parent </button>
//        ))}
//       </React.Fragment>
//    }

import React from 'react'

export default function ParentToChild() {
  return (
    <div>ParentToChild</div>
  )
}
