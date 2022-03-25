

<form action="actualizar vista" method="post" onchange="pintarCabecera()">
    <select name="hs" id="hs">
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
    </select>
    <input type="text" name="hcont" id="hcont" onkeyup="pintarCabecera()">
</form>

<header class="container d-flex justify-content-center" id="cabecera">

</header>

<div id="cuerpo">


</div>

<footer id="footer">

</footer>
<script src="vistauser.js"></script>