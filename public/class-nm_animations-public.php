<?php

// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

/**
 * The public-facing functionality of the plugin.
 */
class Nm_animations_Public
{

    /**
     * The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
    }

    /**
     * Register the stylesheets for the public-facing side of the site.
     */
    public function enqueue_styles()
    {
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/nm_animations-public.css', array(), $this->version, 'all');
    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/nm_animations-eyes.js', '', $this->version, false);
        wp_enqueue_script('animejs', plugin_dir_url(__FILE__) . 'js/anime.min.js', '', $this->version, false);
    }

    /**
     * Register shortcodes for the public rendering
     */
    public function add_shortcodes()
    {
        add_shortcode('nm_animation', array($this, 'render_animation'));
    }

    public function render_animation($args)
    {
        if (array_key_exists('text', $args) && array_key_exists('animation', $args)) {
            $copy_text = $args['text'];
            $animation = $args['animation'];
            
            if (file_exists(plugin_dir_path(__FILE__) . "/partials/nm_animations-{$animation}.php") &&
            file_exists(plugin_dir_path(__FILE__) . "/js/nm_animations-{$animation}.js")) {
                ob_start();
                require plugin_dir_path(__FILE__) . "/partials/nm_animations-{$animation}.php"; ?> 
                <script> 
                    const <?php echo $animation; ?>Animation = () => {
                        const assetPath = "<?php echo plugin_dir_url(__FILE__) . 'assets/'; ?>";
                        const copyText = '"<?php echo sanitize_text_field($copy_text); ?>"';
                        <?php require plugin_dir_path(__FILE__) . "/js/nm_animations-{$animation}.js"; ?> 
                    }
                    <?php echo $animation; ?>Animation(); 
                    </script> 
                <?php
                return ob_get_clean();
            } else {
                return 'Error: No animation assets found!';
            }
        } else {
            return 'Error: Animation name and copy text are required!';
        }
    }
}
