import React, { useEffect } from "react";

const WithLogger = (WrappedComponent) =>{
   const WithLogger = (props) =>{
    useEffect(()=>{
        console.log(`${WrappedComponent.name} Mounted`)
        return ()=>{
            console.log(`${WrappedComponent.name} UnMount`)
        }
    },[]);
    useEffect(()=>{
        console.log(`${WrappedComponent.name} update`)
    },[])
    return <WrappedComponent {...props}/>
   }
   WithLogger.displayName = `withLogger ${WrappedComponent.displayName || WrappedComponent.name}`
   return WithLogger
}
export default WithLogger;