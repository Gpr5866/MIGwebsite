import Home from './pages/home/home'
import List from './pages/list/list'
import AddUser from './pages/add_user/adduser'
import EditUser from './pages/edit_user/edituser'
import ViewUser from './pages/view_user/viewuser'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='list-user' element={<List />} />
            <Route path='add-user' element={<AddUser />} />
            <Route path='edit-user/:id' element={<EditUser />} />
            <Route path='view-user/:id' element={<ViewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
