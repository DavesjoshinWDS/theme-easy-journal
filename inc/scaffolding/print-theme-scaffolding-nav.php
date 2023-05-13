<?php
/**
 * Add a scaffolding nav for easier access.
 *
 * @package easy-journal
 */

namespace davesjoshin\easy_journal;

/**
 * Add a scaffolding nav for easier access.
 *
 * @author JC Palmes
 */
function print_theme_scaffolding_nav() {
	?>
	<nav class="scaffolding-nav">
		<span><?php echo esc_html__( 'Scroll to:', 'easy-journal' ); ?></span>
		<a href="#globals" class="link"><?php echo esc_html__( 'Globals', 'easy-journal' ); ?></a>
		<a href="#typography" class="link"><?php echo esc_html__( 'Typography', 'easy-journal' ); ?></a>
		<a href="#media" class="link"><?php echo esc_html__( 'Media', 'easy-journal' ); ?></a>
		<a href="#icons" class="link"><?php echo esc_html__( 'Icons', 'easy-journal' ); ?></a>
		<a href="#buttons" class="link"><?php echo esc_html__( 'Buttons', 'easy-journal' ); ?></a>
		<a href="#forms" class="link"><?php echo esc_html__( 'Forms', 'easy-journal' ); ?></a>
		<a href="#elements" class="link"><?php echo esc_html__( 'Elements', 'easy-journal' ); ?></a>
	</nav><!-- .scaffolding-nav -->
	<?php
}
