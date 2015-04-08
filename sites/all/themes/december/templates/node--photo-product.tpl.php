<header class="product__header">
  <?php include_once("partials/site-nav.tpl.inc"); ?>
</header>
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
<div class="related">
  <h2 class="related__title">类似作品</h2>
  <ul class="related__list row">
    <li class="related__item" style="background-image: url(/sites/all/themes/december/images/product_1.png);"></li>
    <li class="related__item" style="background-image: url(/sites/all/themes/december/images/product_2.png);"></li>
    <li class="related__item" style="background-image: url(/sites/all/themes/december/images/product_3.png);"></li>
  </ul>
</div>

<?php include_once("partials/footer.tpl.inc"); ?>