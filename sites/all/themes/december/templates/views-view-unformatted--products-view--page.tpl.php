<header class="product__header">
  <?php include_once("partials/site-nav.tpl.inc"); ?>
</header>

<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>


<div class="product__detail product__detail--list">
  <div class="text">
    <div class="product__content">
      <h1 class="title">春 ‧ 忆</h1>
      <div class="info">2014.9.20 朗豪酒店</div>
      <div class="main">"也许这十年里，任何一天，任何一个人，
        任何一件事的细微改变，都会让这个故事换一个结局。
        我们从来不用向人描述，可你就是这么不知不觉"</div>
      <a class="btn btn--more" href="#">MORE</a>
    </div>
    <ul class="product__next">
      <li class="product__next-unit">
        <a class="active" href="#">两百公里的浪漫</a>
      </li>
      <li class="product__next-unit">
        <a class="" href="#">BE WITH YOU</a>
      </li>
    </ul>
  </div>
  <div class="image" style="background-image:url('http://602080.user-website8.com/sites/default/files/files/sunshine_1.png');"></div>
</div>


<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
    <?php print $row; ?>
  </div>
<?php endforeach; ?>

<?php include_once("partials/footer.tpl.inc"); ?>