<?php
/**
 * Template Name: Scaffolding
 *
 * Template Post Type: page, scaffolding, easy_journal_scaffolding
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package easy-journal
 */

use function davesjoshin\easy_journal\main_classes;

get_header(); ?>

	<main id="main" class="<?php echo esc_attr( main_classes( [ 'relative' ] ) ); ?>">

		<?php do_action( 'easy_journal_scaffolding_content' ); ?>

	</main><!-- #main -->

<?php get_footer(); ?>
