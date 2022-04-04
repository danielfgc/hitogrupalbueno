
<div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-md-3 col-auto px-0 collapse collapse-horizontal overflow-hidden shadow-lg p-3 mb-5 bg-body rounded" id="sidebar">
        <div class="list-group border-0 text-center text-sm-start min-vh-100" id="sidebar-menu">
          <div class="container mt-3">
            <button type="button" class="btn btn-primary mt-2" onclick="actualizarVista('assets/async/actualizarvista.php')">Actualizar vista</button>
            <a href="?controller=usuario&action=lista"><button type="button" class="btn btn-primary mt-2">volver a vistas</button></a>
            <h2>Elementos web</h2>
            <input type="text" class="form-control m-2" id="nombrevista" placeholder="Nombre de la vista" >
            <div id="accordion" class="shadow-lg mb-5 bg-body rounded">
              <input type="text"  id="idvista" value="<?php echo $_GET['idvista'] ?>" hidden>
              <?php
              
              $conexion = Db::getConnect();
              $resultado = $conexion->prepare("SELECT*FROM vistas where idvista = ".$_GET['idvista'].";");
              $resultado->execute();

              foreach ($resultado->fetchAll() as $fila) {
                echo $fila[5];
              }
              $resultado->closeCursor();
              ?>
            </div>
          </div>
        </div>
      </div>
      <main class="col-md col border-start ps-md-2 pt-2" id="main">
        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="shadow-lg mb-5 rounded btn btn-success">Menu</a>
        <header class="container" id="cabeceras">
          <div id="cabecera">
            <?php
            
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[1];
            }
            $resultado->closeCursor();
            ?>
          </div>
        </header>
        <hr>
        <div class="row" id="cuerpos">
          <div id="cuerpo">
            <?php
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[2];
            }
            $resultado->closeCursor();
            ?>

          </div>
        </div>
        <hr>
        <div class="row" id="footers">
          <footer id="footer" class="d-flex justify-content-evenly flex-wrap">
            <?php
            
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[3];
            }
            $resultado->closeCursor();
            ?>
          </footer>
        </div>
      </main>
    </div>
  </div>