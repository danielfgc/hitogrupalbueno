<div class="container pt-md-5 col-md-4">
<form action="?controller=producto&action=save" method="POST">
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre del producto</label>
    <input type="text" class="form-control" id="nombre" aria-describedby="Nombre" name="nombre">
    <div id="nombre" class="form-text"> Nombre del producto</div>
  </div>
  <div class="mb-3">
    <label for="unidades" class="form-label">Unidades</label>
    <input type="number" class="form-control" id="unidades" name="unidades">
  </div>
  <label for="precio" class="form-label">Precio</label>
  <div class="input-group mb-3">
    
    <input type="number" class="form-control" id="precio" name="precio" step="0.01">
    <span class="input-group-text" id="basic-addon1">€</span>
  </div>

  <button type="submit" class="btn btn-primary">Guardar</button>
</form>
</div>