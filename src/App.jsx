import React from 'react'
import { createContext } from 'react'
// import ComA from './ComA'
import Data from './Data';
import Component from './Component'


const App = () => {
    return (
        <>
            <Component
                q={Data[0].Q}
                ans={Data[0].A}
            />

        </>
    )
}

export default App;
