import React from 'react'

const Login = () => {
  return (
    <div id="layoutAuthentication">
  <div id="layoutAuthentication_content">
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
              <div className="card-body">
                <form>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="inputEmail" type="email"/>
                    <label htmlFor="inputEmail">Correo</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="inputPassword" type="password" />
                    <label htmlFor="inputPassword">Contraseña</label>
                  </div>
     
                                <a className="btn btn-primary" href="index.html">Entrar</a>
                  
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
 
</div>

  )
}

export default Login