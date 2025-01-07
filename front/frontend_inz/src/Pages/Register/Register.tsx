import axios from "axios";
import { useState } from "react";

interface RegisterData
{
    username: string
    email: string
    password: string
    confirmPassword: string
}

function Register()
{
    const [formData, setFormData] = useState<RegisterData>({ username: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        setError("Hasła muszą być takie same!");
        return;
      }
  
      setError(null);
    try {
      await axios.post('https://localhost:7109/api/account/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert('Rejestracja zakończona sukcesem!');
    } catch (error) {
      alert('Rejestracja nie powiodła się!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rejestracja</h2>
      <input
        name="username"
        placeholder="Nazwa użytkownika"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Hasło"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Zarejestruj się</button>
    </form>
  );
}

export default Register