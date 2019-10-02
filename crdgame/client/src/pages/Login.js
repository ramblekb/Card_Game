import React from 'react'
import Nav from '../components/Nav'

const Login = () => {
return(

<div>
<Nav />

<div className="login">
<h1>Login</h1>
<form method="post">
    <input type="text" name="u" placeholder="Username" required="required" />
    <input type="password" name="p" placeholder="Password" required="required" />
    <button type="submit" className="btn btn-primary btn-block btn-large">Login</button>
</form>
</div>

</div>

)
}
export default Login;