<?php
/**
 * Plugin Name: Profile card
 * Plugin URI: ''
 * Description: Custom block for display profile in card formate with social links.
 * Author: Chintesh Prajapati
 * Author URI: https://profiles.wordpress.org/chinteshprajapati
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 *
 * @since 1.0.0
 */
function pcb_enqueue_enqueue_script() {
	wp_enqueue_script(
		'profile-card-enqueue-backend-script', // Unique handle.
		plugins_url( 'block.build.js', __FILE__ ), // block.js: We register the block here.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ) // Dependencies, defined above.
	);
	wp_enqueue_style( 'font-awesome-css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', '', '1.0','' );
	wp_enqueue_style( 'profile-card-css', plugins_url( 'profile-card.css', __FILE__ ), '', '1.0','' );
}
add_action( 'enqueue_block_editor_assets', 'pcb_enqueue_enqueue_script' );

add_action('wp_enqueue_scripts', 'pcb_callback_for_front_scripts');
function pcb_callback_for_front_scripts() {
    wp_enqueue_style( 'font-awesome-css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', '', '1.0','' );
	wp_enqueue_style( 'profile-card-css', plugins_url( 'profile-card.css', __FILE__ ), '', '1.0','' );
}