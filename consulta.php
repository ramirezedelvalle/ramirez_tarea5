<?php
// Obtener el método de la petición
$method = $_SERVER['REQUEST_METHOD'];

// Verificar si el método es GET o POST
if ($method === 'GET') {
    echo "El método utilizado es GET";
} elseif ($method === 'POST') {
    echo "El método utilizado es POST";
} else {
    echo "El método utilizado no es GET ni POST";
}
?>


