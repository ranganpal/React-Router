import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Layout from './routes/Layout'
import {
  Home,
  About,
  Contact,
  User,
  Github
} from './components'
import { githubInfoLoader } from './components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//         loader: githubInfoLoader,
//       },
//       {
//         path: "user/:userId",
//         element: <User />,
//       },
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='github' element={<Github />} loader={githubInfoLoader} />
        <Route path='user/:userid' element={<User />} />
      </Route>
    ]
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
