import './App.css'
import {RouterProvider} from 'react-router-dom'
import {router} from './core/routes/AppRoutes'
import { Provider } from 'react-redux'
import {store} from "./core/redux/store.ts";

function App() {

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </>
    )
}

export default App
