<nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-center">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Supermercados Manolo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="?controller=producto&action=index">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?controller=producto&action=register">Registrar Producto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="?controller=producto&&action=show">Ver Productos</a>
        </li>
        <form class="d-flex" action="?controller=producto&&action=show" method="get">
        <input class="form-control me-1" type="search" placeholder="Buscar Producto" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      </ul>
    </div>
  </div>
</nav>