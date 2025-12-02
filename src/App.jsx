import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Section from './Components/Section.jsx';
import LoginPage from './Components/Login/LoginPage.jsx';
import SignupPage from './Components/Signup/SignupPage.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Section/> */}
      <LoginPage />
      {/* <SignupPage /> */}
      <Footer />
    </div>
  );
}

export default App;
