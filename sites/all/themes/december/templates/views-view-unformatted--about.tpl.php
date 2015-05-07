<?php
$row_groups = array();

foreach ($rows as $id => $row) {
  $COUNT = 3;
  $idx_first = $id / $COUNT;
  $idx = $id % $COUNT;

  $row_groups[$idx_first][$idx] = $row;
}
?>

<div class="container container--service-content">
  <div class="galleries">
  <?php foreach ($row_groups as $id => $group): ?>
    <div class="galleries__column">
      <?php
        foreach ($group as $idx => $row) {
          print $row;
        }
      ?>
    </div>
  <?php endforeach; ?>
  </div>
</div>