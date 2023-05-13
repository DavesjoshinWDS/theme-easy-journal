<?php
/**
 * The template used for displaying Buttons in the scaffolding library.
 *
 * @package easy-journal
 */

use function davesjoshin\easy_journal\print_scaffolding_section;

?>

<section class="section-scaffolding">

	<h2 class="scaffolding-heading" id="<?php esc_html_e( 'buttons', 'easy-journal' ); ?>"><?php esc_html_e( 'Buttons', 'easy-journal' ); ?></h2>
	<?php
		// Button.
		print_scaffolding_section(
			[
				'title'       => 'Button',
				'description' => 'Display a button.',
				'usage'       => '<button class="button" href="#">Click Me</button>',
				'output'      => '<button class="button">Click Me</button>',
			]
		);
		?>
</section>
