import {configureStore} from '@reduxjs/toolkit'
import Operation from './operation'
 export const store = configureStore(
    {reducer:{
oper:Operation
    }
    }
)
