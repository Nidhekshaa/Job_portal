// import { useState } from 'react'
// import './login.css'

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (username === '' || password === '') {
//       setError('Please fill in all fields.');
//     } else if (username === 'admin' && password === '1234') {
//       setError('Login successful!');
//       document.getElementById('error').style.color = 'green';
//     } else {
//       setError('Invalid username or password.');
//     }
//   }

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Login</h2>
//         <div className="input-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button onClick={handleLogin}>Login</button>
//         <div id="error" className="error-message">{error}</div>
//       </div>
//     </div>
//   );
// }
// export default Login;

import { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username === '' || password === '') {
      setError('Please fill in all fields.');
    } else if (!emailRegex.test(username)) {
      setError('Email must be a @gmail.com address.');
    } else if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and include upper, lower, number, and special characters.');
    } else if (username === 'admin@gmail.com' && password === 'Admin@1234') {
      setError('Login successful!');
      document.getElementById('error').style.color = 'green';
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
        </div>
        <button onClick={handleLogin}>Login</button>
        <div id="error" className="error-message">{error}</div>
        <div className="options">
          <a href="#">Forgot Password?</a>
          <a href="#">Create New Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
