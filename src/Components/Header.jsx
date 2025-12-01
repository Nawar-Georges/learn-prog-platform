import {useState, useEffect} from 'react'; 
import '../Stylesheets/Header.css';

const Header = () => {  
    
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [isDark, setIsDark] = useState(() => {
      try {
        return localStorage.getItem('theme') === 'dark';
      } catch (e) {
        return false;
      }
    });

    useEffect(() => {
      try {
        document.body.classList.toggle('dark-mode', isDark);
        document.body.classList.toggle('light-mode', !isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (e) {
        // ignore in environments without localStorage
      }
    }, [isDark]);
    

    return (
        <>
          <ul className='header-ulist'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Courses & Tracks</li>
            <li className='nav-link'>AI Interviewer</li>

            {
                !isLoggedIn ?  
                <li className="nav-auth">
                  <div className="auth-buttons">
                    <button
                      className="theme-toggle"
                      onClick={() => setIsDark(prev => !prev)}
                      aria-label="Toggle theme"
                      title="Toggle light / dark"
                    >
                      {isDark ? '☀️' : '🌙'}
                    </button>
                    <button className='signUp'>Sign Up</button>
                    <button className='logIn'>Log In</button>
                  </div>
                </li>

                :
                <li className='nav-auth'>
                    <img className='profile-pic' src='https://www.w3schools.com/howto/img_avatar.png' alt='Profile Pic' />
                     <i className='userName'>Username</i>
                    <button className='logOut'>Log Out</button>
                </li>
            }



          </ul>
        </>
    )


}

export default Header;