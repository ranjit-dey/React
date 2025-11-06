import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import NotFound from './pages/NotFound'
import BlogDetails from './pages/BlogDetails'
import BlogLayout from './layouts/BlogLayout'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "blogs", element: <Blogs /> },
//       { path: "blogs/:id", element: <BlogDetails /> },
//       { path: "create", element: <CreateBlog /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<BlogLayout />}>
                <Route path="" element={<Blogs />} />
                <Route path=":blogId" element={<BlogDetails />} />
            </Route>
            <Route path="create" element={<CreateBlog />} />
            <Route path="*" element={<NotFound />} />
        </Route>,
    ),
)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
