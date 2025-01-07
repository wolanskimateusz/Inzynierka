import axios from "axios";
import { useState } from "react";

interface LoginData
{
    username : string
    password : string
}

function Login()
{
        const [formData, setFormData] = useState<LoginData>({ username: '', password: '' });
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
            const response = await axios.post('https://localhost:7109/api/account/login', formData);
            alert('Zalogowano pomyślnie!');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.username);
          } catch (error) {
            alert('Logowanie nie powiodło się!');
          }
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <h2>Logowanie</h2>
            <input
              name="username"
              placeholder="Nazwa użytkownika"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Hasło"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Zaloguj się</button>
          </form>
        );
}

export default Login