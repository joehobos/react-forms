import React  from 'react'
import { useState } from 'react'
import App from '../App'

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()

    if(username.length < 8) {
      setError('Username must be at least 8 characters in length')
      return
    }

    if(password.length < 6) {
      setError('Password must be at least 6 characters in length')
      return
    }
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
       {
        method: "POST",
        body: JSON.stringify({
          username: "",
          password: "",
        }),
        
        })

      const result = await response.json();
      setToken(result.token)
      console.log(result);
    }catch (error) {
        setError(error.message)
      }
    
    }

    return (
      <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:{""}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:{""}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </>
    );
}
