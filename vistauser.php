

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <main class="col-12">
      <button type="button" class="btn btn-primary" onclick="guardarVista('guardarvista.php')">Guardar vista</button>
    <aside class="fixed-left col-4 row-12" id="inputs">
    <div id="pintar">
        
<button id="boton" type="button" class="btn btn-success" onclick="agregarTitulo()">Generar Titulo</button>
</div>
<div id="parrafos"><button type="button" class="btn btn-success" onclick="agregarParrafo()">Generar parrafo</button></div>
</aside>
<header class="fixed-right container col-8 row-12" id="cabecera">

</header>

<div id="cuerpo">


</div>

<footer id="footer">

</footer>
</main>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="guardar.js"></script>
<script src="vistauser.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>