<div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-md-3 col-auto px-0 collapse collapse-horizontal overflow-hidden shadow-lg p-3 mb-5 bg-body rounded" id="sidebar">
        <div class="list-group border-0 text-center text-sm-start min-vh-100" id="sidebar-menu">
          <div class="container mt-3">
            <button type="button" class="btn btn-primary mt-2" onclick="guardarVista('assets/async/guardarvista.php')">Guardar vista</button>
            <button type="button" class="btn btn-primary mt-2">volver a vistas</button>
            <h2>Elementos web</h2>
            <input type="text" class="form-control m-2" id="nombrevista" placeholder="Nombre de la vista" >
            <div id="accordion" class="shadow-lg mb-5 bg-body rounded">
              <div class="card d-flex">

                <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                  <div class="card-header">
                    Elementos de Cabecera
                  </div>
                </a>

                <div id="collapseOne" class="collapse" data-bs-parent="#accordion">

                  <div id="pintar">

                    <button id="boton" type="button" class="btn btn-success mt-3" onclick="agregarTitulo()">Generar Titulo</button>
                  </div>
                  <div id="parrafos"><button type="button" class="btn btn-success mt-3" onclick="agregarParrafo()">Generar parrafo</button></div>
                  <div id="fotos"><button type="button" class="btn btn-success mt-3" onclick="agregarImagen()">Generar Imagen</button></div>
                  <div id="enlaces"><button type="button" class="btn btn-success mt-3 mb-md-3" onclick="agregarEnlace()">Generar Enlace</button></div>
                </div>
              </div>
              <div class="card">

                <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                  <div class="card-header">
                    Elementos de cuerpo
                  </div>
                </a>

                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <div id="pintarcuerpo">

                      <button id="boton" type="button" class="btn btn-success mt-3" onclick="agregarTituloCuerpo()">Generar Titulo</button>
                    </div>
                    <div id="parrafoscuerpo"><button type="button" class="btn btn-success mt-3" onclick="agregarParrafoCuerpo()">Generar parrafo</button></div>
                    <div id="fotoscuerpo"><button type="button" class="btn btn-success mt-3" onclick="agregarImagenCuerpo()">Generar Imagen</button></div>
                    <div id="enlacescuerpo"><button type="button" class="btn btn-success mt-3 mb-md-3" onclick="agregarEnlaceCuerpo()">Generar Enlace</button></div>
                  </div>
                </div>
              </div>
              <div class="card">

                <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                  <div class="card-header">
                    Elementos de footer
                  </div>
                </a>

                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <div id="pintarfooter">

                      <button id="boton" type="button" class="btn btn-success mt-3" onclick="agregarTitulofooter()">Generar Titulo</button>
                    </div>
                    <div id="parrafosfooter"><button type="button" class="btn btn-success mt-3" onclick="agregarParrafofooter()">Generar parrafo</button></div>
                    <div id="fotosfooter"><button type="button" class="btn btn-success mt-3" onclick="agregarImagenfooter()">Generar Imagen</button></div>
                    <div id="enlacesfooter"><button type="button" class="btn btn-success mt-3 mb-md-3" onclick="agregarEnlacefooter()">Generar Enlace</button></div>
                  </div>
                </div>
              </div>
              <div class="card">

                <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
                  <div class="card-header">
                    Colores
                  </div>
                </a>

                <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
                  <div class="card-body">
                    <div class="mb-3 d-flex">
                      <label for="colorbody" class="form-label">Color Principal</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colorbody" oninput="colorBody()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colorcabecera" class="form-label">Color Cabecera</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colorcabecera" oninput="colorCabecera()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colorcuerpo" class="form-label">Color Cuerpo</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colorcuerpo" oninput="colorCuerpo()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colorfooter" class="form-label">Color Footer</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colorfooter" oninput="colorFooter()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colortextobody" class="form-label">Color Texto Principal</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colortextobody" oninput="colorBody()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colortextocabecera" class="form-label">Color Texto Cabecera</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colortextocabecera" oninput="colorCabecera()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colortextocuerpo" class="form-label">Color Texto Cuerpo</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colortextocuerpo" oninput="colorCuerpo()">
                    </div>
                    <div class="mb-3 d-flex">
                      <label for="colortextofooter" class="form-label">Color Texto Footer</label>
                      <input type="color" class="form-control w-25 mx-md-2" id="colortextofooter" oninput="colorFooter()">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <main class="col-md col border-start ps-md-2 pt-2" id="main">
        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="shadow-lg mb-5 rounded btn btn-success">Menu</a>
        <header class="container" id="cabeceras">
          <div id="cabecera"></div>
        </header>
        <hr>
        <div class="row" id="cuerpos">
          <div id="cuerpo">


          </div>
        </div>
        <hr>
        <div class="row" id="footers">
          <footer id="footer" class="d-flex justify-content-evenly flex-wrap">

          </footer>
        </div>
      </main>
    </div>
  </div>