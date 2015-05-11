<?php

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

  if ($is_video) {
    $bg = $n->field_video['und']['0']['value'];
  }

  $info = array(
    'title' => $title,
    'url' => $related_url,
    'is_video' => $is_video,
    'background' => $bg,
    'extrainfo' => $extra
  );

  return $info;
}


?>


<div class="related">
  <h2 class="related__title">类似作品</h2>
  <ul class="related__list row">
    <?php foreach ($infos as $info): ?>
      <li class="related__item"">
        <?php if ($info['is_video']): ?>
          <?php print $info['background']; ?>
        <?php else: ?>
          <div class="related__item-image" style="background-image:url('<?php echo $info['background']; ?>');"></div>
        <?php endif; ?>
        <div class="related__item-info">
          <h2 class="related__item-title"><?php echo $info['title']; ?></h2>
          <p class="related__item-date-place"><?php echo $info['extrainfo']; ?></p>
          <a class="btn btn--light" href="<?php echo $info['url']; ?>">查看活动</a>
        </div>
      </li>
    <?php endforeach; ?>
  </ul>
</div>