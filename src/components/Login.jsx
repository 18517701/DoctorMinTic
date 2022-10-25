
function Login () {
    return(

        
        <body class="text-center">
            
                <form>
                    <img class="mb-4" src="https://st.depositphotos.com/1003492/3320/v/600/depositphotos_33208581-stock-illustration-medical-symbol.jpg" alt="" width="160" height="180"></img>
                    <h1 class="h3 mb-3 fw-normal">Ingresa</h1>
        
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="correo@correo.com"></input>
                        <label for="floatingInput">Correo electronico</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label for="floatingPassword">Contraseña</label>
                    </div>
        
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"></input> Recordarme
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">Entrar</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2021–2022</p>
                </form>
            
        </body>
        
    )
    
}

export default Login;