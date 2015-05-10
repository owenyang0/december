<?php

  function get_related_node($original_node) {
    $related_nodes = _get_related_node($original_node);
    $nodes = array();

    foreach ($related_nodes as $related) {
      array_push($nodes, node_load($related->nid));
    }

    return $nodes;
  }

  function _get_related_node($original_node) {
    $ROW_COUNT = 3;

    $result = _select_related_table($original_node);
    $related_nodes = $result->fetchAllAssoc('nid');


    $last_row_count = $ROW_COUNT - $result->rowCount();

    if ($last_row_count > 0) {
      $another_nodes = _select_related_table($original_node, $last_row_count, TRUE)->fetchAllAssoc('nid');
      $related_nodes = array_merge($related_nodes, $another_nodes);
    }

    return $related_nodes;
  }

/**
 * @param $original_node
 * @return \DatabaseStatementInterface|null
 */
function _select_related_table($original_node, $count = 3, $is_start = FALSE) {
  $result = NULL;

  if ($is_start) {
    $result = db_select('node', 'n')
      ->fields('n', array('nid', 'type'))
      ->condition('n.type', array(
        'photo_product',
        'video_product'
      ), 'IN')
      ->condition('n.status', 1, '=')
      ->orderBy('created', 'DESC')
      ->range(0, $count)
      ->execute();

  } else {
    $result = db_select('node', 'n')
      ->fields('n', array('nid', 'type'))
      ->condition('n.type', array(
        'photo_product',
        'video_product'
      ), 'IN')
      ->condition('n.status', 1, '=')
      ->condition('n.created', $original_node->created, '<')
      ->orderBy('created', 'DESC')
      ->range(0, $count)
      ->execute();
  }

  return $result;
}
