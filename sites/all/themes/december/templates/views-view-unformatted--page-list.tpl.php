<header class="product__header">
  <?php include_once("partials/site-nav.tpl.inc"); ?>
</header>

<?php
$results = $view->result;
?>

<div class="product__detail">
  <?php foreach ($rows as $id => $row): ?>
    <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  }
      if ($id == 0) { print ' style="display: block;"';} ?>>
      <?php print $row; ?>
    </div>
  <?php endforeach; ?>

  <ul class="product__next">
    <?php foreach ($results as $id => $ret): ?>
      <li class="product__next-unit" for="views-row-<?php echo $id + 1; ?>">
        <a class="<?php if ($id == 0) { echo 'active'; } ?>"
           href="/<?php echo drupal_get_path_alias('node/' . $ret->nid); ?>">
          <?php print $ret->node_title; ?></a>
      </li>
    <?php endforeach; ?>
  </ul>
</div>