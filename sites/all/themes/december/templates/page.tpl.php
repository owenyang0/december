<div class="december">

  <?php if ($page['head']): ?>
    <div class="december__head">
      <?php print render($page['head']); ?>
    </div>
  <?php endif; ?>

  <div class="december__content">
    <?php print render($page['content']); ?>
  </div>

  <?php if ($page['footer']): ?>
    <div class="december__footer">
      <?php include_once("partials/footer.tpl.inc"); ?>
    </div>
  <?php endif; ?>
</div>
