<?php

  include __DIR__ . "/../data/albumData.php";

  $result = []; 

  if(isset($_GET['search'])) {
    $search = $_GET['search'];

    foreach($albums as $album) {
      if(strpos(strtolower($album['title']), $search) !== false) {
        $result[] = $album; 
      } 
    }
  } 
  else {
    $search = '';
    $result = $albums; 
  }
  
  /* Create JSON */
  header('Content-Type: application/json');
  echo json_encode($result);
?>