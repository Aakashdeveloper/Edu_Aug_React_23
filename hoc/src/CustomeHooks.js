import React,{useEffect} from 'react';

// cutsome hooks

const useLogging = (componentName) => {

    useEffect(() => {
        console.log(`Component ${componentName} mounted`)
        return () => {
            console.log(`Component ${componentName} will unmount`)
        }
    },[componentName])
}


///component
const MyComp = () => {
    useLogging('MyComp');
    return <div>Test My Component</div>
}


export default MyComp