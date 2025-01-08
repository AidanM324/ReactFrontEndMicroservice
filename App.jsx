
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListUserComponent from './components/ListUserComponent'
import UserComponent from './components/UserComponent'
import UserLoginComponent from './components/UserLoginComponent'
import TrekComponent from './components/TrekComponent'
import TrekAdminComponent from './components/TrekAdminComponent'
import TrekUpdateComponent from './components/TrekUpdateComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
       <HeaderComponent />
        <Routes>
          {/* // http://localhost:8082 */}
          <Route path='/' element = { <ListUserComponent />}></Route>
          {/* // http://localhost:8082/getAllAccounts */}
          <Route path= '/getAllAccounts' element = { <ListUserComponent />}></Route>
          {/* // http://localhost:8082/create-user */}
          <Route path= '/create-user' element = { <UserComponent />}></Route>
           {/* // http://localhost:8082/edit-user/1 */}
           <Route path= '/edit-user/:id' element = { <UserComponent />}></Route>
           {/* // http://localhost:8082/verify-user */}
           <Route path= '/verify-user' element = { <UserLoginComponent />}></Route>
           {/* // http://localhost:8082/getAllMountains */}
          <Route path= '/getAllMountains' element = { <TrekComponent />}></Route>
           {/* // http://localhost:8082/trek-microservice/1 */}
           <Route path= '/trek-microservice/:mountainId' element = { <TrekComponent />}></Route>
           {/* // http://localhost:8082/trekadmin-microservice */}
           <Route path= '/trekadmin-microservice' element = { <TrekAdminComponent />}></Route>
           {/* // http://localhost:8081/create-mountain */}
           <Route path= '/create-mountain' element = { <TrekUpdateComponent />}></Route>
           {/* // http://localhost:8081/edit-mountain/1 */}
           <Route path= '/edit-mountain/:id' element = { <TrekUpdateComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
