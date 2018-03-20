<?php
include_once('../routers/RouterPrincipal.php');
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
$r1 = new RouterPrincipal();
echo $r1->route();