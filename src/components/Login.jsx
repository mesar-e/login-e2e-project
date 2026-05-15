import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>
            <input 
              type="checkbox" 
              name="terms" 
              checked={formData.terms} 
              onChange={handleChange} 
            />
            Şartları kabul ediyorum
          </label>
        </div>
        <button type="submit" disabled={true}>Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;