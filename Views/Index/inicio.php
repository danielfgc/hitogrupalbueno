<main>
<section class="container col-md-4">
<ul class="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-bs-toggle="pill" data-bs-target="#pills-login" role="tab" type="button" aria-controls="pills-login" aria-selected="true">Inicio de sesión</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-bs-toggle="pill" data-bs-target="#pills-register" role="tab" type="button" aria-controls="pills-register" aria-selected="false">Nuevo usuario</a>
  </li>
</ul>
<div class="tab-content"  id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    
      <div class="form-outline mb-4">
        <label class="form-label" for="usuario">Nombre de usuario</label>
        <input type="text" id="usuario" class="form-control" name="usuario" />  
      </div>

      <div class="form-outline mb-4">
        <label class="form-label" for="contraseña" >Contraseña</label>
        <input type="password" id="contraseña" class="form-control"  name="contraseña"/>
      </div>
        <div id="errlogin"></div>
      <div class="row mb-4">


        <div class="col-md-6 d-flex justify-content-start">
          <a href="#" id="contra" data-bs-toggle="modal" data-bs-target="#recuperar">¿Olvidó su contraseña?</a>
        </div>
        <div class="modal fade" id="recuperar" tabindex="-1" aria-labelledby="recuperar" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="recuperar">Recuperar Contraseña</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-outline mb-4">
                  <label class="form-label" for="recuperaruser">Introduzca su nombre de Usuario</label>
                  <input type="text" id="recuperaruser" class="form-control" name="recuperaruser" />  
                </div>
              </div>
              <div class="modal-footer">
                <div id="erroruser"></div>
                <button type="button" class="btn btn-primary editar" data-bs-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger editar" data-bs-toggle="modal" id="aciertouser" data-bs-target="" onmouseover="recuperar1('assets/async/verificaruser.php')">Siguiente</button>
              </div>
            </div>
          </div>
        </div>

        <div class='modal fade' id='respuestarecu' tabindex='-1' aria-labelledby='respuestarecu' aria-hidden='true'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <div class='modal-header'>
        <input type="text" id="user" name="iduser" value="" class="form-control" hidden/>
          <h5 class='modal-title' id='respuestarecu'>Pregunta secreta</h5>
          <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
        </div>
        <div class='modal-body'>
          <div class='form-outline mb-4'>
            <label class='form-label' for='respuestarecu' id='pregunta'></label>
            <input type='text' id='respuestarecu' class='form-control' name='respuestarecu' />  
            <div id="errorrespuesta"></div>
          </div>
        </div>
        <div class='modal-footer'>
          <button type='button' class='btn btn-primary editar' data-bs-dismiss='modal'>Salir</button>
          <button type='button' class='btn btn-danger editar' id="aciertorespuesta"  data-bs-toggle='modal' data-bs-target='' onmouseover="recuperar2('assets/async/verificarrespuesta.php')">Siguiente</button>
        </div>
      </div>
    </div>
  </div>
  
      <div class="modal fade" id="repetir" tabindex="-1" aria-labelledby="repetir" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="repetir">Reestablecer contraseña</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-outline mb-4">
                  <label class="form-label" for="repetir" id="preguntarecu">Nueva Contraseña</label>
                  <input type="password" id="recucontra" class="form-control" name="recucontra" />  
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="repetir" id="preguntarecu">Repetir nueva contraseña</label>
                  <input type="password" id="reperecucontra" class="form-control" name="reperecucontra" />  
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary editar" data-bs-dismiss="modal">Salir</button>
                <button type="button" class="btn btn-danger editar" onclick="recuperar3('assets/async/recpuerarcontraseña.php')">Recuperar</button>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div id="errorlogin"></div>
      <button class="btn btn-primary btn-block editar" onclick="login('assets/async/login.php')">Iniciar Sesión</button>
   
  </div>