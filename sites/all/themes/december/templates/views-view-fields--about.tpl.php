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
?>

<?php

$entity = $row->_field_data['nid']['entity'];

if (!function_exists('get_field_value')) {

  function get_field_value($fld, $entity) {
    return $entity->{$fld}['und'][0]['value'];
  }
}

$title = $entity->title;
$image = get_field_value('field_photo', $entity);
$className = 'galleries__unit';
$special_class_idx = array(1, 3, 8);

preg_match("/src=\"(.*?)\"/", $image, $matches);
$bg = $matches[1];

if (!isset ($view->rendered_idx)) {
  $view->rendered_idx = 0;
}

if (in_array($view->rendered_idx, $special_class_idx)) {
  $className = 'galleries__unit--high';
}
$view->rendered_idx++;

?>
<a class="<?php echo $className; ?>" href="<?php echo $bg; ?>" data-lightbox="about">
  <div class="image" style="background-image:url('<?php echo $bg; ?>');"></div>
  <div class="mask"><?php echo $title; ?></div>
</a>