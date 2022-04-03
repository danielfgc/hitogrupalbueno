<main class="col-md col border-start ps-md-2 pt-2" id="main">
        <a href="?controller=usuario&action=lista"><button type="button" class="btn btn-primary mt-2"> Volver a vistas</button></a>
        <header class="container" id="cabeceras">
          <div id="cabecera">
            <?php
            require_once('connection.php');
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[1];
            }
            ?>
          </div>
        </header>
        <hr>
        <div class="row" id="cuerpos">
          <div id="cuerpo">
            <?php
            require_once('connection.php');
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[2];
            }
            ?>

          </div>
        </div>
        <hr>
        <div class="row" id="footers">
          <footer id="footer" class="d-flex justify-content-evenly flex-wrap">
            <?php
            require_once('connection.php');
            $conexion = Db::getConnect();
            $resultado = $conexion->prepare("SELECT*FROM vistas where idvista =".$_GET['idvista'].";");
            $resultado->execute();

            foreach ($resultado->fetchAll() as $fila) {
              echo $fila[3];
            }
            ?>
          </footer>
        </div>
      </main>