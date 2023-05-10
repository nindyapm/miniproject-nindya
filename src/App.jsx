import {BrowserRouter ,Routes, Route} from "react-router-dom"
import Routers from './config/Routers'

function App() {
  return (
        <BrowserRouter>
          <Routes>
            {Routers.map((router,index) => {
              return <Route path={router.path} element={router.element} key={index} />
            })}
          </Routes>
        </BrowserRouter>
  )
}

export default App
