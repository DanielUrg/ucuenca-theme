<?php
/**
 * Content-facultades
 *
 * Pantilla para la página de facultades
 *
 * @category   Components
 * @package    WordPress
 * @subpackage _themename
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

?>
	<h1>FACULTADES:</h1>
	<?php
	$posts_events = new WP_Query(
		array(
			'posts_per_page' => 0,
			'post_type'      => 'uc_facultad',
			'order'          => 'ASC',
		)
	)
	?>
	<?php
	while ( $posts_events->have_posts() ) {
		$posts_events->the_post();
		?>
			<p>
				<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3> 
			</p>
	<?php } wp_reset_postdata(); ?>
