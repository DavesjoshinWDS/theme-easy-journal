<?php
/**
 * Easy Journal - Post Listing Block
 * 
 * @package easy-journal
 */

use function davesjoshin\easy_journal\get_acf_fields;
use function davesjoshin\easy_journal\setup_block_defaults;

$ej_block = isset( $block ) ? $block : '';
$ej_args  = isset( $args ) ? $args : '';

$ej_defaults = [
	'class'  => [ 'ej-block', 'ej-post-listing' ],
	'id'     => ( isset( $block ) && ! empty( $block['anchor'] ) ) ? $block['anchor'] : '',
	'fields' => [], // Fields passed via the print_block() function.
];

[ $ej_defaults, $ej_atts ] = setup_block_defaults( $ej_args, $ej_defaults, $ej_block );

$ej_post_listing = ! empty( $ej_defaults['fields'] ) ?
	$ej_defaults['fields'] :
	get_acf_fields( [ 'posts_limit' ], $block['id'] );

$ej_posts_limit = 12;
$ej_posts_args = array(
    'post_type'     => 'post',
    'numberposts'   => $ej_post_listing['posts_limit']
);
$ej_posts_query = get_posts( $ej_posts_limit );
?>

<?php if ( ! empty( $ej_block['data']['_is_preview'] ) ) : ?>
<figure>
	<img src="<?php echo esc_url( get_template_directory_uri() . '/src/images/placeholder.png' ); ?>"
		alt="<?php esc_html_e( 'Preview of the Easy Journal Post Listing block', 'easy-journal' ); ?>">
</figure>
<?php else : ?>
    <section <?php echo $ej_atts; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

        <?php foreach ( $ej_posts_query as $ej_post ) : ?>
            <article class="ej-post-listing-item" tabindex="0">
                <h2>
                    <a href="<?php echo esc_attr( $ej_post->guid ); ?>">
                        <?php echo esc_html( $ej_post->post_title ); ?>
					</a>
                </h2>
                <div class="post-excerpt">
                    <?php echo get_the_excerpt($ej_post->ID); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> 
                </div>
            </article>        
        <?php endforeach; ?>

    </section>
<?php endif; ?>