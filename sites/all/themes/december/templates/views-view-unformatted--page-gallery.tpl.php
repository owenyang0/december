<header class="product__header">
  <?php include_once("partials/site-nav.tpl.inc"); ?>
</header>

<?php
  $row_groups = array();

  foreach ($rows as $id => $row) {
    $COUNT = 3;
    $idx_first = $id / $COUNT;
    $idx = $id % $COUNT;

    $row_groups[$idx_first][$idx] = $row;
  }
?>

<div class="product__detail product__detail--gallery">
  <?php foreach ($row_groups as $id => $group): ?>
    <li class="products__unit">
      <div class="products__unit--row-one"><?php print $group[0]; ?></div>
    <? if (count($group) > 1): ?>
      <div class="products__unit--row-two">
      <?php
        foreach ($group as $idx => $row){
          if ($idx != 0) {
            print $row;
          }
        }
      ?>
      </div>
    <?php endif; ?>
    </li>
  <?php endforeach; ?>
</div>