<?php
  $pre = get_pre_node($node);
  $next = get_next_node($node);


  function get_url($n) {
    return
      !empty($n)
        ? base_path() . drupal_get_path_alias('node/' . $n['nid'])
        : NULL;
  }

  $pre_url = get_url($pre);
  $next_url = get_url($next);
?>


<div class="product__control">
  <div class="lb-nav">
    <?php if ($pre_url != NULL): ?>
      <a class="lb-prev" href="<?php echo $pre_url; ?>"></a>
    <?php endif; if ($next_url != NULL): ?>
      <a class="lb-next" href="<?php echo $next_url; ?>"></a>
    <?php endif; ?>
  </div>
</div>