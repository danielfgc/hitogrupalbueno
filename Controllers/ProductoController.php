<?php
require_once('C:\xampp\htdocs\mvcmysql\connection.php');
class ProductoController
{
    function index()
    {
        require_once('Views/Producto/bienvenido.php');
    }
    function search()
    {
        require_once('Views/Producto/search.php');
    }
    function register()
    {
        require_once('Views/Producto/register.php');
    }
    function error()
    {
        require_once('Views/Producto/error.php');
    }
    function show()
    {
        // $listaProductos=Producto::all();
        $base = new Connect();
        $conexion = $base->getConnection();
        $resultado = $conexion->query("select*from Productos");
        require_once('Views/Producto/show.php');
    }
    function contacto()
    {
        // $listaProductos=Producto::all();
        require_once('Views/Producto/contacto.php');
    }
    function save()
    {
        $nombre = $_POST['nombre'];
        $unidades = $_POST['unidades'];

        $precio = $_POST['precio'];


        //$Producto= new Producto(null, $_POST['nombre'],$_POST['unidades'],$precio);
        $base = new Connect();
        $conexion = $base->getConnection();
        $insert = $conexion->prepare("insert into Productos values(default, :nombre,:unidades,:precio)");
        $insert->bindValue('nombre', $nombre);
        $insert->bindValue('unidades', $unidades);
        $insert->bindValue('precio', $precio);
        $insert->execute();

        require_once('Views/Producto/show.php');
    }
    function delete()
    {
        $base = new Connect();
        $conexion = $base->getConnection();
        $resultado = $conexion->query("delete from Productos where id =" . $_GET['id']);
        require_once('Views/Producto/delete.php');
    }
    function updateshow()
    {
        require_once('Views/Producto/updateshow.php');
    }
    function update()
    {
        $nombre = $_POST['nombre'];
        $unidades = $_POST['unidades'];
        $precio = $_POST['precio'];

        $base = new Connect();
        $conexion = $base->getConnection();
        $insert = $conexion->prepare("update Productos set nombre = :nombre, unidades= :unidades, precio= :precio  where id =" . $_GET['id']);
        $insert->bindValue('nombre', $nombre);
        $insert->bindValue('unidades', $unidades);
        $insert->bindValue('precio', $precio);
        $insert->execute();

        require_once('Views/Producto/show.php');
    }

    // public function inicioSesion($usuario, $pass)
    // {
    //     $mensaje = "";

    //     $conn = mysqli_connect("localhost", "root", "", "hito2");
    //     $sql = "SELECT*FROM usuarios WHERE usuario = '$usuario'";
    //     $resultado = mysqli_query($conn, $sql);
    //     $fila = mysqli_fetch_row($resultado);
    //     //Comprobar si contiene datos
    //     //var_dump($fila);
    //     if (is_array($fila) === true && password_verify($pass, $fila[2]) && $fila[4] === "1") {
    //         session_start();
    //         $_SESSION['idusuario'] = $fila[0];
    //         $_SESSION['usuario'] = $usuario;
    //         $_SESSION['contraseña'] = $pass;
    //         $_SESSION['email'] = $fila[3];
    //         $_SESSION['admin'] = $fila[4];
    //         $_SESSION['foto'] = $fila[5];
    //         header("Location: ../vistas/admin.php");
    //     } else {
    //         if (is_array($fila) === true && password_verify($pass, $fila[2])) {
    //             session_start();
    //             $_SESSION['idusuario'] = $fila[0];
    //             $_SESSION['usuario'] = $usuario;
    //             $_SESSION['contraseña'] = $pass;
    //             $_SESSION['email'] = $fila[3];
    //             $_SESSION['admin'] = $fila[4];
    //             $_SESSION['foto'] = $fila[5];
    //             header("Location: ../vistas/usuario.php");
    //         } else {
    //             $fila = "";
    //             $mensaje = "Usuario o contraseña incorrectos";
    //             echo "<h6>" . $mensaje . "</h6>";
    //         }
    //     }
    //     //Cerramos conexión
    //     mysqli_close($conn);
    // }
}
