<?php
$row_groups = array();

print '<pre>';

//print_r($rows);

print '</pre>';

foreach ($rows as $id => $row) {
  $COUNT = 3;
  $idx_first = $id / $COUNT;
  $idx = $id % $COUNT;

  $row_groups[$idx_first][$idx] = $row;
}
?>

<section class="homepage__product">
  <div class="slogan">
    <h1 class="slogan__title">DECEMBER WEDDING</h1>
    <div class="slogan__intro">
      <p>「拾贰记」团队的建立缘起十二月，</p>
      <p>创始人相信人与人之间的每个相遇都是上天的微妙安排。</p>
      <p>而婚姻是一辈子，最美妙的相遇。</p>
      <p>「拾贰记」希望创造一年十二个月的感动，致力将</p>
      <p>创意｜精细｜服务｜惊喜</p>
      <p>融汇在你一生中难忘的大日子，</p>
      <p>把你梦想中的婚礼完美呈现!</p>
    </div>
  </div>

  <?php foreach ($row_groups as $id => $group): ?>
    <?php print $group[0]; ?>
    <? if (count($group) > 1): ?>
      <div class="row">
        <?php
        foreach ($group as $idx => $row){
          if ($idx != 0) {
            print $row;
          }
        }
        ?>
      </div>
    <?php endif; ?>
  <?php endforeach; ?>
  <a href="/products-gallery?tid=All">查看所有作品 &gt;</a>
</section>
