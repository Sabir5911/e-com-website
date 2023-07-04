'use client'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import {store} from'@/store/store'
import { store } from '@/app/store/store'

const Providers=({children}:{children:React.ReactNode})=>{
 return(
  <Provider store={store}>
    {children}
</Provider>
 )
}


export default Providers