<?php

function december_preprocess_page(&$vars){
  if (isset($vars['node']) && isset($vars['node']->type)) {
    switch($vars['node']->type) {
      case 'standard_page':
        drupal_add_js(drupal_get_path('theme', 'december') . '/js/products.js');
        break;
    }
  }
}

?>