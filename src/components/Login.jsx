import React, { useState, useEffect } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    terms: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [isValid, setIsValid] = useState(false);


  useEffect(() => {
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = passwordRegex.test(formData.password);
    const isTermsAccepted = formData.terms;

    setIsValid(isEmailValid && isPasswordValid && isTermsAccepted);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: inputValue });


    if (name === 'email') {
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? '' : 'Geçerli bir email giriniz!'
      });
    }
    if (name === 'password') {
      setErrors({
        ...errors,
        password: passwordRegex.test(value) ? '' : 'Şifre en az 8 karakter, bir büyük harf ve bir rakam içermelidir!'
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formData.email && errors.email && <p style={{ color: 'red' }} className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Şifre:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {formData.password && errors.password && <p style={{ color: 'red' }} className="error">{errors.password}</p>}
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
            Şartları kabul ediyorum
          </label>
        </div>

        <button type="submit" disabled={!isValid}>Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;