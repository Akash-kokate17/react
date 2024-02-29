import React from 'react'

 function MemoB({b}) {
    
    console.log('momoB rander()')
    return (
        <>
         <div>memoB : {b}</div>   
        </>
    )
}
export default React.memo(MemoB)