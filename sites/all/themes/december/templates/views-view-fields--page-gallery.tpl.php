<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */

$entity = $row->_field_data['nid']['entity'];


if (!function_exists('get_field_value')) {

  function get_field_value($fld, $entity) {
    return $entity->{$fld}['und'][0]['value'];
  }
}

if (!function_exists('is_video')) {

  function is_video($entity) {
    return $entity->type == 'video_product';
  }
}


$title = $entity->title;
$info = get_field_value('field_information', $entity);
$main = get_field_value('field_main_text', $entity);
$image = get_field_value('field_photo', $entity);
$url = drupal_get_path_alias('node/' . $row->nid);

preg_match("/src=\"(.*?)\"/", $image, $matches);
$bg = $matches[1];

preg_match("/<p>(.*?)<\/p>/", $info, $extras);
$extra = $extras[1];

$embed = get_field_value('field_video', $entity);
$is_video = $entity->type == 'video_product';

?>

<div class="product">
  <div class="background">
    <?php if ($is_video): ?>
      <?php print $embed; ?>
    <?php else: ?>
      <div class="img" style="background-image:url('<?php echo $bg; ?>');"></div>
    <?php endif; ?>
  </div>
  <div class="desc">
    <h1 class="desc__title"><?php echo $title; ?></h1>
    <div class="desc__info"><?php echo $extra; ?></div>
  </div>
</div>
