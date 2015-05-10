<?php
  include_once "utils/common-utils.inc";

  $related_nodes = get_related_node($node);
  $infos = array();

  foreach ($related_nodes as $n) {
    array_push($infos, _related_info($n));
  }

  function _related_info($n) {
    $related_url = base_path() . drupal_get_path_alias('node/' . $n->nid);

    $is_video = $n->type === 'video_product';

    $title = '「' . $n->title . '」';

    preg_match("/src=\"(.*?)\"/", $n->field_photo['und']['0']['value'], $matches);
    $bg = $matches[1];

    preg_match("/<p>(.*?)<\/p>/", $n->field_information['und']['0']['value'], $extras);
    $extra = $extras[1];

    $info = array(
      'title' => $title,
      'url' => $related_url,
      'background' => $bg,
      'extrainfo' => $extra
    );

    return $info;
  }
?>

<div class="product__detail">
  <h1 class="product__title">
    <?php echo $node->title; ?>
  </h1>
  <div class="product__info">
    <?php echo $node->field_information['und']['0']['value']; ?>
  </div>

  <div class="product__main">
    <?php echo $node->field_main_text['und']['0']['value']; ?>
  </div>
  <ul class="product__photo">
    <?php
      foreach ($node->field_photo['und'] as $photo) {
        echo '<li class="product__photo-item">' . $photo['value'] . '</li>';
      }
    ?>
  </ul>
</div>

<?php include_once("partials/similar-product.tpl.inc"); ?>