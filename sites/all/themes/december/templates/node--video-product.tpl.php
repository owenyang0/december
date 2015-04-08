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
  <ul class="product__video">
    video
  </ul>
</div>

<?php include_once("partials/similar-product.tpl.inc"); ?>
<?php include_once("partials/footer.tpl.inc"); ?>