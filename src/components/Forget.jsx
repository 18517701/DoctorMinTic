
function Forget () {
 return (


<div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Has olvidado tu contraseña? Recuperala aqui con tu correo registrado.</p>

      <form action="recover-password.html" method="post"></form>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email"></input>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-block">Pedir nueva contraseña</button>
            </div>
        </div>
    </div>
 </div>

 )

}
export default Forget;