<?php
/**
 * Customizer sections.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Register the section sections.
 *
 * @author WebDevStudios
 * @param object $wp_customize Instance of WP_Customize_Class.
 */
function customize_sections( $wp_customize ) {

	// Register additional scripts section.
	$wp_customize->add_section(
		'easy_journal_additional_scripts_section',
		[
			'title'    => esc_html__( 'Additional Scripts', 'easy-journal' ),
			'priority' => 10,
			'panel'    => 'site-options',
		]
	);

	// Register a social links section.
	$wp_customize->add_section(
		'easy_journal_social_links_section',
		[
			'title'       => esc_html__( 'Social Media', 'easy-journal' ),
			'description' => esc_html__( 'Links here power the print_social_network_links() template tag.', 'easy-journal' ),
			'priority'    => 90,
			'panel'       => 'site-options',
		]
	);

	// Register a header section.
	$wp_customize->add_section(
		'easy_journal_header_section',
		[
			'title'    => esc_html__( 'Header Customizations', 'easy-journal' ),
			'priority' => 90,
			'panel'    => 'site-options',
		]
	);

	// Register a footer section.
	$wp_customize->add_section(
		'easy_journal_footer_section',
		[
			'title'    => esc_html__( 'Footer Customizations', 'easy-journal' ),
			'priority' => 90,
			'panel'    => 'site-options',
		]
	);
}
add_action( 'customize_register', __NAMESPACE__ . '\customize_sections' );
