import './App.css';

import FirebaseProvider from "./context/firebaseContext"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
//import CheckIfUserIsLoggedIn from './components/userManagement';


function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <SignInAndSignUpPage />
      </div>
    </FirebaseProvider>
  );
}

export default App;
