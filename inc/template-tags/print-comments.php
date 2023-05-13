<?php
/**
 * Display the comments if the count is more than 0.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Display the comments if the count is more than 0.
 *
 * @author WebDevStudios
 */
function print_comments() {
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
}
