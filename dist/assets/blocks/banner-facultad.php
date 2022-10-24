<?php
/**
 * Banner Facultad
 *
 * Muestra el banner de la facultad
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
<div class= 'page-banner' >
	<div class="page-banner__bg-image" style="background-image: url(
		<?php
		echo esc_url(
			get_field( 'banner_facultades' )['sizes']['banner_facultad']
		);
		?>
		)"></div>	
		<div class    = 'page-banner__content container container--narrow' >
			<h1 class = 'page-banner__title' > 
				<?php echo esc_attr( get_the_title() ); ?>
			</h1>
			<div class="page-banner__intro">
				<?php echo esc_attr( get_field( 'introduccion_fc' ) ); ?>
			</div>
		</div>
</div>
