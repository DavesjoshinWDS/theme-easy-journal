<?php
/**
 * Returns true if a blog has more than 1 category, else false.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Returns true if a blog has more than 1 category, else false.
 *
 * @author WebDevStudios
 *
 * @return bool Whether the blog has more than one category.
 */
function get_categorized_blog() {
	$category_count = get_transient( 'easy_journal_categories' );

	if ( false === $category_count ) {
		$category_count_query = get_categories( [ 'fields' => 'count' ] );

		$category_count = isset( $category_count_query[0] ) ? (int) $category_count_query[0] : 0;

		set_transient( 'easy_journal_categories', $category_count );
	}

	return $category_count > 1;
}
