<?php
/**
 * Prints HTML with meta information for the categories, tags and comments.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Prints HTML with meta information for the categories, tags and comments.
 *
 * @author WebDevStudios
 */
function print_entry_footer() {
	// Hide category and tag text for pages.
	if ( 'post' === get_post_type() ) {
		/* translators: used between list items, there is a space after the comma */
		$categories_list = get_the_category_list( esc_attr__( ', ', 'easy-journal' ) );
		if ( $categories_list && get_categorized_blog() ) {

			/* translators: the post category */
			printf( '<span class="cat-links">' . esc_attr__( 'Posted in %1$s', 'easy-journal' ) . '</span>', $categories_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		}

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', esc_attr__( ', ', 'easy-journal' ) );
		if ( $tags_list ) {

			/* translators: the post tags */
			printf( '<span class="tags-links">' . esc_attr__( 'Tagged %1$s', 'easy-journal' ) . '</span>', $tags_list ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- XSS OK.
		}
	}

	// if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
	// 	echo '<span class="comments-link">';
	// 	comments_popup_link( esc_attr__( 'Leave a comment', 'easy-journal' ), esc_attr__( '1 Comment', 'easy-journal' ), esc_attr__( '% Comments', 'easy-journal' ) );
	// 	echo '</span>';
	// }

	// edit_post_link(
	// 	sprintf(
	// 		/* translators: %s: Name of current post */
	// 		esc_html__( 'Edit %s', 'easy-journal' ),
	// 		wp_kses_post( get_the_title( '<span class="screen-reader-text">"', '"</span>', false ) )
	// 	),
	// 	'<span class="edit-link">',
	// 	'</span>'
	// );
}
