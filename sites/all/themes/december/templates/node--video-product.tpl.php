<?php
  include_once "utils/common-utils.inc";
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
  <div class="product__video">
    <?php echo $node->field_video['und']['0']['value']; ?>
  </div>
</div>