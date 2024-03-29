<?php
/**
 * Template part for displaying posts.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package easy-journal
 */

use function davesjoshin\easy_journal\print_post_date;
use function davesjoshin\easy_journal\print_post_author;
use function davesjoshin\easy_journal\print_entry_footer;

?>

<article <?php post_class( 'post-container' ); ?>>

	<header class="entry-header">
		<?php
		if ( is_single() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. */
					esc_html__( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'easy-journal' ),
					[
						'span' => [
							'class' => [],
						],
					]
				),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			)
		);

		wp_link_pages(
			[
				'before' => '<div class="page-links">' . esc_attr__( 'Pages:', 'easy-journal' ),
				'after'  => '</div>',
			]
		);
		?>
	</div><!-- .entry-content -->

</article><!-- #post-## -->
