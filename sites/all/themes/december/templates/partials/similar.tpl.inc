<?php
  $similar_flds = array('field_similar',
    'field_similar2',
    'field_similar3'
  );
  $similars = array();

  foreach ($similar_flds as $similar_fld) {
    $n = get_similar_node($similar_fld, $node);
    if (!empty($n)) {
      $similars[] = $n;
    }
  }
?>

<?php if (count($similars) > 0): ?>
  <div class="related">
    <h2 class="related__title">类似作品</h2>
    <ul class="related__list row">
      <?php foreach ($similars as $idx => $similar): ?>
        <?php if (!empty($similar)): ?>
          <?php
          $title = $similar->title;
          $info = get_field_value('field_information', $similar);
          $image = get_field_value('field_photo', $similar);
          $url = base_path() . drupal_get_path_alias('node/' . $similar->nid);

          preg_match("/src=\"(.*?)\"/", $image, $images);
          $bg = $images[1];

          preg_match("/<p>(.*?)<\/p>/", $info, $extras);
          $extra = $extras[1];

          $embed = get_field_value('field_video', $similar);
          $is_video = $similar->type == 'video_product';
          ?>

          <li class="related__item">
            <?php if ($is_video): ?>
              <?php print $embed; ?>
            <?php else: ?>
              <div class="related__item-image" style="background-image:url('<?php echo $bg; ?>');"></div>
            <?php endif; ?>
            <div class="related__item-info">
              <h2 class="related__item-title">「<?php echo $title; ?>」</h2>
              <p class="related__item-date-place"><?php echo $extra; ?></p>
              <a class="btn btn--light" href="<?php echo $url; ?>">查看活动</a>
            </div>
          </li>
        <?php endif; ?>
      <?php endforeach; ?>
    </ul>
  </div>
<?php endif; ?>