<?php
/**
 * Returns arrays of defaults for a block.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

use function davesjoshin\easy_journal\get_block_classes;
use function davesjoshin\easy_journal\get_formatted_args;
use function davesjoshin\easy_journal\get_formatted_atts;

/**
 * Returns arrays of Block defaults.
 *
 * @param array  $ej_args Array of arguments from the print_block() function.
 * @param array  $ej_defaults Array of defaults from the block.
 * @param object $ej_block Object containing the block's values.
 *
 * @author Oliver Harrison <oliver.harrison@webdevstudios.com>
 */
function setup_block_defaults( $ej_args, $ej_defaults, $ej_block = null ) {
	// Parse the $ej_args if we're rendering this with print_block() from a theme.
	if ( ! empty( $ej_args ) ) :
		$ej_defaults = get_formatted_args( $ej_args, $ej_defaults );
	endif;

	// Get custom classes for the block and/or for block colors.
	$ej_block_classes = isset( $ej_block ) ? get_block_classes( $ej_block ) : [];

	if ( ! empty( $ej_block_classes ) ) :
		$ej_defaults['class'] = array_merge( $ej_defaults['class'], $ej_block_classes );
	endif;

	// Set up element attributes.
	$ej_atts = get_formatted_atts( [ 'class', 'id' ], $ej_defaults );

	return [ $ej_defaults, $ej_atts ];
}
