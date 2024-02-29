import React from 'react'

 function MemoA({a}) {
    
    console.log('momoA rander()')
    return (
        <>
           <div> memoA{a}</div> 
        </>
    )
}
export default React.memo(MemoA)