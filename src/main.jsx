import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import PaperDetailPage from './pages/PaperDetailPage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import ContactUs from './components/ContacUs.jsx';
import { Route } from 'react-router-dom';
import QuestionPaperFindingPage from './pages/QuestionPaperFindingPage.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<HomePage/>
//       },
//       {
//         path:"About",
//         element:null
//       },{
//         path:"question",
//         element:<ResultsPage/>
//       },{
//         path:"contact",
//         element:<ContactUs />
//       }

//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<HomePage/>}/>
     <Route path='questions' element={<QuestionPaperFindingPage/>}/>
     <Route path='contact' element={<ContactUs/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
