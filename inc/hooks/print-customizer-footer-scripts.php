<?php
/**
 * Display the customizer footer scripts.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Display the customizer footer scripts.
 *
 * @author Greg Rickaby
 *
 * @return string Footer scripts.
 */
function print_customizer_footer_scripts() {
	// Check for footer scripts.
	$scripts = get_theme_mod( 'easy_journal_footer_scripts' );

	// None? Bail...
	if ( ! $scripts ) {
		return false;
	}

	// Otherwise, echo the scripts!
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
	echo get_post_content( $scripts );
}

add_action( 'wp_footer', __NAMESPACE__ . '\print_customizer_footer_scripts', 999 );
