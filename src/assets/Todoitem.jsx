// import React from 'react'

// function Todoitem({task}) {
//   return (
//     <div style={{backgroundColor:"white",margin:"10px",padding:"10px",width:"20p0x",borderRadius:"5px"}}>
//       {task}
//       </div>
//   )
// }

// export default Todoitem
import React from "react";

function Todoitem({ task }) {
  return (
    <div
      style={{
        backgroundColor: "#af7d7d",
        margin: "10px auto",
        padding: "10px",
        width: "200px",
        borderRadius: "5px",
      }}
    >
      {task}
    </div>
  );
}

export default Todoitem;