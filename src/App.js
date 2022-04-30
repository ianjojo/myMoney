import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>

            <Route exact path='/signup'>
              {!user && <Signup />}
              {user && <Redirect to='/' />}
            </Route>
            <Route exact path='/login'>
              {!user && <Login />}
              {user && <Redirect to='/' />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
