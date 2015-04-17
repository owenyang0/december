<header class="product__header">
    <?php include_once("partials/site-nav.tpl.inc"); ?>
</header>

<?php if (user_is_logged_in()) {
  echo $node->body['und']['0']['value'];
}
?>

<div class="product__detail"></div>

<?php include_once("partials/footer.tpl.inc"); ?>