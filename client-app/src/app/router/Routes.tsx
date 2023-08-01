import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForms from "../../features/activities/form/ActivityForms";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes : RouteObject[] = [

    {
        path: '/',
        element: <App/>,
        children : [

           
            {path: 'activities', element: <ActivityDashboard/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'createActivity', element: <ActivityForms key='create' />},
            {path: 'manage/:id', element: <ActivityForms key='manage'/>},
        ]

    }

]




export const router = createBrowserRouter(routes);