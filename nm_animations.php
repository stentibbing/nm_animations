<?php

/**
 * @link              https://www.taifuun.ee
 * @since             1.0.0
 * @package           Nm_animations
 *
 * @wordpress-plugin
 * Plugin Name:       Nordic Milk Animations
 * Plugin URI:        https://www.taifuun.ee
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.4
 * Author:            Taifuun OÜ
 * Author URI:        https://www.taifuun.ee
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nm_animations
 * Domain Path:       /languages
 * GitHub Plugin URI: stentibbing/nm_animations
 */

// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

/**
 * Currently plugin version.
 */
define('NM_ANIMATIONS_VERSION', '1.0.3');

/**
 * The code that runs during plugin activation.
 */
function activate_nm_animations()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-nm_animations-activator.php';
    Nm_animations_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_nm_animations()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-nm_animations-deactivator.php';
    Nm_animations_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_nm_animations');
register_deactivation_hook(__FILE__, 'deactivate_nm_animations');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-nm_animations.php';

/**
 * Begins execution of the plugin.
 */
function run_nm_animations()
{
    $plugin = new Nm_animations();
    $plugin->run();
}
run_nm_animations();
