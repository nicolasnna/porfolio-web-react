import { createBrowserRouter } from "react-router-dom"
import MainPage from "../pages/MainPage"
import ProjectsPage from "../pages/ProjectsPage"
import NotFoundPage from '../pages/NotFoundPage'

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "projects",
    element: <ProjectsPage />
  },
])

