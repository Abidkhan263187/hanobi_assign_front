import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { FormPage } from '../Pages/Formpage'
import { ResultPage } from '../Pages/ResultPage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/form/:userName' element={<FormPage/>}/>
            <Route path='result' element={<ResultPage/>}/>
        </Routes>
    </div>
  )
}
