<?php
$absolute_path = $_GET['q'];
$current_path = '/' . $absolute_path;

$tid = $_GET['tid'];
$full_path = $current_path . '?tid=';
?>

<div class="control">
  <ul class="control__type">
    <li class="control__type--unit <?php if($tid == 4) echo ' active'; ?>">
      <a class="link" href="<?php echo $full_path . '4'; ?>">婚礼</a>
    </li>
    <li class="control__type--unit <?php if($tid == 1) echo ' active'; ?>">
      <a class="link" href="<?php echo $full_path . '1'; ?>">求婚</a>
    </li>
    <li class="control__type--unit <?php if($tid == 2) echo ' active'; ?>">
      <a class="link" href="<?php echo $full_path . '2'; ?>">活动</a>
    </li>
    <li class="control__type--unit <?php if($tid == 3) echo ' active'; ?>">
      <a class="link" href="<?php echo $full_path . '3'; ?>">视频</a>
    </li>
  </ul>
  <ul class="control__switch">
    <li class="control__type--unit <?php if($absolute_path == 'products-gallery') echo ' active'; ?>">
      <a class="control__switch--tile link link--switch icon icon--tile" href="/products-gallery?tid=All"></a>
    </li>
    <li class="control__type--unit <?php if($absolute_path == 'products-list') echo ' active'; ?>">
      <a class="control__switch--list link link--switch icon icon--list" href="/products-list?tid=All"></a>
    </li>
  </ul>
</div>