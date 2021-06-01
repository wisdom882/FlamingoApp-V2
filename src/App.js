import './App.css';

import FirebaseProvider from "./context/firebaseContext"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route,Switch,Redirect} from "react-router-dom"
import Home from './admin/Home.component'
import NotFound from './admin/Notfound.component'
import Header from './components/header/header.component'
import UnAuthenticatedHome from './pages/unauthenticatedhome/unauthenticatedhome.component'
import Footer from './components/footer/footer.component'
import RestApiProvider from './context/restApiContext'
import footballAnatomy from "./pages/footbal-anatomy/football-anatomy.component"
import tactics from "./pages/tactics/tactics.component"
import positions from './pages/positions/positions.component'
import formations from './pages/formation/formation.component'
//import CheckIfUserIsLoggedIn from './components/userManagement';


function App() {
 
  return (
    <RestApiProvider>
      <div className="App">
        <div className="background"></div>
        <Header/>
        <Switch>
          <Route path="/userhome" component={Home}/>
          <Route path="/not-found" component={NotFound}/>
          <Route exact path="/" component={UnAuthenticatedHome} />
          <Route path="/login" component={SignInAndSignUpPage}/>
          <Route path="/footballanatomy" component={footballAnatomy}/>
          <Route path="/formations" component={formations}/>
          <Route path="/positions" component={positions}/>
          <Route path="/tactics" component={tactics}/>
          <Redirect to="/not-found"/>
        </Switch>
        <Footer/>
        {/* <Turbine/> */}
      </div>
    </RestApiProvider>
    
  );
}

export default App;
