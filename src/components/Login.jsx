import { Link } from "react-router-dom";

function Login () {
    return(
        
<body>
  <div className="container">
<div class="login-box">
  <div class="login-logo">
    <a href="#"><b>CITAS </b>MEDICAS</a>
  </div>
  
  <div className="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Inicia sesion </p>
 
      <form action="../../index3.html" method="post" >
        <div className="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember"></input>
              <label for="remember">
                Recuerdame
              </label>
            </div>
          </div>
          
          <div className="col-4">
            <button type="submit" class="btn btn-primary btn-block">Entrar</button>
          
          </div>
          
        </div>
      </form>

      <div className="social-auth-links text-center mb-3">
        <p>- O -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Entrar usando Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Entrar usando Google+
        </a>
      </div>
   

      <p class="mb-1">
        <Link
        className= 'block text-center my-4'to="forget">Olvide mi contraseña</Link>
      </p>
      <p class="mb-0">
        <Link
        className='block text-center my-4' to ="registrar">Registrarme</Link>
      </p>
    </div>
  
  </div>
  </div>
  </div>
        </body>
         
    )
    
}

export default Login;