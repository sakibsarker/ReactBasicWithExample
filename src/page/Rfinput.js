import React from 'react'

// function Rfinput() {
//   return (
//     <div>
//         <input text="text" />
//     </div>
//   )
// }
const FRInput=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FRInput