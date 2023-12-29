<?php
/**
 * Returns an array of classes from a block's Gutenberg fields.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Returns an updated array of classes.
 *
 * @author WebDevStudios
 *
 * @param array $block Array of block attributes.
 *
 * return array The updated array of classes.
 */
function get_block_classes( $block ) {
	$ej_block_classes = [];

	if ( ! empty( $block['className'] ) ) :
		$ej_block_classes[] = $block['className'];
	endif;

	if ( ! empty( $block['backgroundColor'] ) ) {
		$ej_block_classes[] = 'has-background';
		$ej_block_classes[] = 'has-' . $block['backgroundColor'] . '-background-color';
	}

	if ( ! empty( $block['textColor'] ) ) {
		$ej_block_classes[] = 'has-text-color';
		$ej_block_classes[] = 'has-' . $block['textColor'] . '-color';
	}

	return $ej_block_classes;
}
