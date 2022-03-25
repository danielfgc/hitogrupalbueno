

<div class="container col-md-9 mt-md-5">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Unidades</th>
      <th scope="col">Precio</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    
      <?php
      $resultado = $conexion->query("select*from productos");
      foreach($resultado->fetchAll() as $fila){
         echo "<tr><th scope='row'>".$fila[0]."</th>";
          echo "<td>".$fila[1]."</td>";
          echo "<td>".$fila[2]."</td>";
          echo "<td>".$fila[3]." €</td>";
          echo "<td>".$fila[2]*$fila[3]." €</td>";
          echo "<td>".(1.21)*($fila[2]*$fila[3])." €</td>";
          echo "<td><a href='?controller=producto&action=updateshow&id=".$fila[0]."'>Actualizar</a></td>";
          echo "<td><a href='?controller=producto&action=delete&id=".$fila[0]."'>Eliminar</a></td></tr>";
      }
    ?>
    
  </tbody>
</table>
</div>





