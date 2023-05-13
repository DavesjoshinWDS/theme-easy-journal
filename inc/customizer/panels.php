<?php
/**
 * Customizer panels.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Add a custom panels to attach sections too.
 *
 * @author WebDevStudios
 *
 * @param WP_Customize_Manager $wp_customize Instance of WP_Customize_Class.
 */
function customize_panels( $wp_customize ) {
	// Register a new panel.
	$wp_customize->add_panel(
		'site-options',
		[
			'priority'       => 10,
			'capability'     => 'edit_theme_options',
			'theme_supports' => '',
			'title'          => esc_html__( 'Site Options', 'easy-journal' ),
			'description'    => esc_html__( 'Other theme options.', 'easy-journal' ),
		]
	);
}

add_action( 'customize_register', __NAMESPACE__ . '\customize_panels' );
