<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Hello, world!</title>
  </head>
  <body>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-md-3 col-auto px-0 collapse collapse-horizontal overflow-hidden" id="sidebar">
            <div class="list-group border-0 text-center text-sm-start min-vh-100" id="sidebar-menu">
            <div class="container mt-3">
  <button type="button" class="btn btn-primary" onclick="guardarVista('guardarvista.php')">Guardar vista</button>
  <button type="button" class="btn btn-primary">volver a vistas</button>
  <h2>Elementos web</h2>
  <div id="accordion">
    <div class="card">
      <div class="card-header">
        <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
          Elementos de Cabecera
        </a>
      </div>
      <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
      
    <aside class="fixed-left col-4 row-12" id="inputs">
    <div id="pintar">
        
<button id="boton" type="button" class="btn btn-success mt-md-3" onclick="agregarTitulo()">Generar Titulo</button>
</div>
<div id="parrafos"><button type="button" class="btn btn-success mt-md-3" onclick="agregarParrafo()">Generar parrafo</button></div>
<div id="fotos"><button type="button" class="btn btn-success mt-md-3" onclick="agregarImagen()">Generar Imagen</button></div>
<div id="enlaces"><button type="button" class="btn btn-success mt-md-3" onclick="agregarEnlace()">Generar Enlace</button></div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
        Elementos de cuerpo
      </a>
      </div>
      <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
          Elementos de footer
        </a>
      </div>
      <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
        <main class="col-md col border-start ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="fa fa-navicon fa-lg py-2 p-1"></i> Menu</a>
            <header class="container" id="cabecera">

            </header>   
            <hr>
            <div class="row">
              <div id="cuerpo">
                

              </div>
            </div>
            <hr>
            <div class="row">
              <footer id="footer">

              </footer>
            </div>
        </main>
    </div>
</div>

<script src="vistauser.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>