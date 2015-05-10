<?php
  print '<pre>';
  print_r($infos);
  print '</pre>';
?>


<div class="related">
  <h2 class="related__title">类似作品</h2>
  <ul class="related__list row">
    <?php foreach ($infos as $info): ?>
      <li class="related__item" style="background-image: url('<?php echo $info['background']; ?>');">
        <div class="related__item-info">
          <h2 class="related__item-title"><?php echo $info['title']; ?></h2>
          <p class="related__item-date-place"><?php echo $info['extrainfo']; ?></p>
          <a class="btn btn--light" href="<?php echo $info['url']; ?>">查看活动</a>
        </div>
      </li>
    <?php endforeach; ?>
  </ul>
</div>