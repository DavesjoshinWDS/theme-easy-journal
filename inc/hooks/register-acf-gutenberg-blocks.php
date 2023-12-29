<?php
/**
 * Functions related to ACF Gutenberg blocks.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Register ACF Gutenberg Blocks.
 *
 * @author WebDevStudios.
 */
function register_acf_gutenberg_blocks() {
	// Check function exists.
	if ( function_exists( 'acf_register_block_type' ) ) :
		$supports = [
			'align'  => false,
			'anchor' => true,
			'mode'   => false,
		];

		$previews = [
			'attributes' => [
				'mode' => 'preview',
				'data' => [ '_is_preview' => true ],
			],
		];

		// Post Listing.
		acf_register_block_type(
			[
				'name'            => 'ej-post-listing',
				'title'           => __( 'EJ Post Listing', 'easy-journal' ),
				'description'     => __(
					'A block used to display post listings.',
					'easy-journal'
				),
				'render_template' =>
					get_template_directory() .
					'/template-parts/blocks/post-listing.php',
				'category'        => 'easy journal',
				'icon'            => 'heart',
				'keywords'        => [ 'post listing', 'block' ],
				'mode'            => 'edit',
				'supports'        => $supports,
				'example'         => $previews,
			]
		);

	endif;
}
add_action( 'acf/init', __NAMESPACE__ . '\register_acf_gutenberg_blocks' );
