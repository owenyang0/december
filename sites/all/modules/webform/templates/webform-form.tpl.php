<?php

/**
 * @file
 * Customize the display of a complete webform.
 *
 * This file may be renamed "webform-form-[nid].tpl.php" to target a specific
 * webform on your site. Or you can leave it "webform-form.tpl.php" to affect
 * all webforms on your site.
 *
 * Available variables:
 * - $form: The complete form array.
 * - $nid: The node ID of the Webform.
 *
 * The $form array contains two main pieces:
 * - $form['submitted']: The main content of the user-created form.
 * - $form['details']: Internal information stored by Webform.
 *
 * If a preview is enabled, these keys will be available on the preview page:
 * - $form['preview_message']: The preview message renderable.
 * - $form['preview']: A renderable representing the entire submission preview.
 */
?>



<?php

/*print_r($_REQUEST);*/


/*

Array ( [Drupal_tableDrag_showWeight] => 0 [el-finder-last-finder] => IB-CS6qUHzfEULSLjFQhmpV3LSs1OO0LHBAXY56lbRk [SESS98c80c16a02a9b4a135eddfbdb9eabdb] => ZAhU3ATNlHjnfu3B6ifg8ixGsVYGpnhNOzVTslxL_R0 [webform-12] => Array ( [1437636728] => 1437636728 [1437637371] => 1437637371 ) [has_js] => 1 [q] => contact-us )
 */
?>

<?php
  // Print out the progress bar at the top of the page
  print drupal_render($form['progressbar']);

  // Print out the preview message if on the preview page.
  if (isset($form['preview_message'])) {
    print '<div class="messages warning">';
    print drupal_render($form['preview_message']);
    print '</div>';
  }

  // Print out the main part of the form.
  // Feel free to break this up and move the pieces within the array.
  print drupal_render($form['submitted']);

  // Always print out the entire $form. This renders the remaining pieces of the
  // form that haven't yet been rendered above (buttons, hidden elements, etc).
  print drupal_render_children($form);
