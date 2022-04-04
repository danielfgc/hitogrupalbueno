<?php
  $conexion1 =Db::getConnect();
  $consulta1= $conexion1->query("select*from usuarios where iduser=('".$_COOKIE['iduser']."');");
  foreach($consulta1->fetchAll() as $user){
    $id = $user[0];
    $username = $user[1];
    $email = $user[2];
    $contraseña = $user[3];
    $urlfoto = $user[4];
    $pregunta = $user[5];
    $respuesta = $user[6];
  }
  $consulta1->closeCursor();
  ?>
<header>
      <nav class='navbar navbar-expand justify-content-between'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            <img src='<?php echo $urlfoto;?>' alt='Avatar Logo' style='width:70px;' class='rounded-pill'> 
          </a>
        </div>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>Gestor de vistas</a>

        </div>
          
            <div class='nav-item dropdown'>
              <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Bienvenid@ <?php echo $_COOKIE['usuario'];?>
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li><a class='dropdown-item' href='index.php?controller=usuario&action=cerrarsesion'>Cerrar Sesión</a></li>
              </ul>
            </div>
      
      </nav>
    </header>
    <main class='container'>
 
      <section class='container m-md-5 bg-white'>          
        <table class='table table-striped '>
          <thead>
            <tr>
              <th>IdVista</th>
              <th>Nombre de vista</th>
              <th>Editar</th>
              <th>Ver vista</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <?php 
            
              $consulta = Db::getConnect()->query("select*from vistas where iduser=('".$_COOKIE['iduser']."');");

              foreach($consulta->fetchAll() as $fila){
                echo " <tr>
                <td>".$fila[0]."</td>
                <td><p>".$fila[6]."</p></td>
                <td><a href='?controller=usuario&action=editarvista&idvista=".$fila[0]."'>Editar Vista</a></td>
                <td><a href='?controller=usuario&action=vervista&idvista=".$fila[0]."'>Ver Vista</a></td>";
                  echo "<td><a href='#' id='adelete' data-bs-toggle='modal' data-bs-target='#staticBackdrop".$fila[0]."'>Eliminar</a></td>
                  <div class='modal fade' id='staticBackdrop".$fila[0]."' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                    <div class='modal-dialog'>
                      <div class='modal-content'>
                        <div class='modal-header'>
                          <h5 class='modal-title' id='exampleModalLabel'>Está a punto de eliminar la vista ".$fila[6]."</h5>
                          <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body'>
                          ¿Desea Continuar?
                        </div>
                        <div class='modal-footer'>
                          <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Salir</button>
                          <a href='?controller=usuario&action=eliminar&idvista=".$fila[0]."'><button type='button' class='btn btn-danger'>Eliminar</button></a>
                        </div>
                      </div>
                    </div>
                  </div>";    
              echo "</tr>";
              }
              $consulta->closeCursor();
            ?>

            
          </tbody>
         
        </table>
         <a href="?controller=usuario&action=nuevavista"><button type="button" class="btn btn-secondary mt-2">Añadir vista +</button></a>
      </section>
    </main>