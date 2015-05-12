<?php include_once "utils/common-utils.inc"; ?>

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

<?php include_once "partials/similar.tpl.inc"; ?>
