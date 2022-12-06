<?php
/**
 * Content-facultad
 *
 * Pantilla para la página de facultad
 *
 * @category   Components
 * @package    WordPress
 * @subpackage ucuenca_theme
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

?>
<div class="first_content">
	<div class="grid">
		<div class="vision Facultad">
			<h2 class="headline">Visión general</h2>
			<div class="vision_content">
				<p><?php echo esc_attr( get_field( 'vision_general_fc' ) ); ?></p>
			</div>	
		</div>
		<div class="pregrado Facultad Carreras">
			<h2 class="headline" id="pregrado">Pregrado</h2>
			<?php
				$post_pregrado = new WP_Query(
					array(
						'posts_per_page' => 4,
						'post_type'      => 'uc_carrera',
						'order'          => 'ASC',
						'meta_query'     => array(
							array(
								'key'     => 'facultades',
								'compare' => 'LIKE',
								'value'   => '"' . get_the_ID() . '"',
							),
						),
					)
				)
				?>
				<?php
				while ( $post_pregrado->have_posts() ) {
					$post_pregrado->the_post();
					?>
					<div class="pregrado_card">
						<img class="pregrado_card__image" src="<?php the_post_thumbnail_url(); ?>">
						<div class="pregrado_card__content">
							<h3 class="pregrado_card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
							<p>
								<?php
								if ( has_excerpt() ) {
									the_excerpt();
								}
								?>
							</p>
						</div>
						<div class="accordion__plus">
								<span class="material-symbols-sharp">
									add
								</span>
						</div>
					</div>
				<?php } wp_reset_postdata(); ?>
			<p class="t-center no-margin"><a href="<?php echo esc_url( get_post_type_archive_link( 'carreras' ) ); ?>" class="btn btn--blue">Ver mas carreras</a></p>	
		</div>
		<div class="Posgrados" id="posgrados">
			<h2 class="headline">Posgrado</h2>
			<?php
				$post_posgrados = new WP_Query(
					array(
						'posts_per_page' => 4,
						'post_type'      => 'uc_posgrado',
						'order'          => 'ASC',
						'meta_query'     => array(
							array(
								'key'     => 'facultades',
								'compare' => 'LIKE',
								'value'   => '"' . get_the_ID() . '"',
							),
						),
					)
				)
				?>
				<?php
				while ( $post_posgrados->have_posts() ) {
					$post_posgrados->the_post();
					?>
					<div class="posgrado_card">
						<div class="posgrado_card__content">
							<h3 class="posgrado_card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
							<p>
								<?php
								if ( has_excerpt() ) {
									the_excerpt();
								}
								?>
							</p>
						</div>
						<div class="accordion__plus">
								<span class="material-symbols-sharp">
									add
								</span>
						</div>
					</div>
				<?php } wp_reset_postdata(); ?>
			<p class="t-center no-margin"><a href="<?php echo esc_url( get_post_type_archive_link( 'posgrados' ) ); ?>" class="btn btn--blue">Ver mas posgrados</a></p>	
		</div>
	</div>
</div>
<div class="second_content">
	<div class="eventos" id="eventos">
		<h2 class="headline">Eventos</h2>
		<?php
			$post_eventos = new WP_Query(
				array(
					'posts_per_page' => 3,
					'post_type'      => 'uc_evento',
					'order'          => 'ASC',
					'meta_query'     => array(
						array(
							'key'     => 'facultades',
							'compare' => 'LIKE',
							'value'   => '"' . get_the_ID() . '"',
						),
					),
				)
			)
			?>
			<?php
			while ( $post_eventos->have_posts() ) {
				$post_eventos->the_post();
				?>
				<div class="event_card">
					<img class="event_card__image" src="<?php the_post_thumbnail_url(); ?>">
					<div class="event_card__content">
						<h3 class="event_card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<div class="group1">
							<p>
								<?php
								$fecha_inicio = new DateTime(
									get_field(
										'fecha_inicio_evento'
									)
								);
									echo esc_attr( $fecha_inicio->format( 'd' ) );
								$fecha_fin = new DateTime(
									get_field(
										'fecha_inicio_evento'
									)
								);
									echo esc_attr( '-' . $fecha_fin->format( 'd' ) );
								?>
							</p>

						</div>
						<div class="group2">
								<p><?php echo esc_attr( get_field( 'ubicacion_evento' ) ); ?></p>
								<p><?php echo esc_attr( get_field( 'horario' ) ); ?></p>
						</div>
						</div>
						<div class="group3">
						<p>
							<?php
							if ( has_excerpt() ) {
								the_excerpt();
							} else {
								echo esc_attr( wp_trim_words( get_the_content(), 180 ) );
							}
							?>
						</p>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>

						</div>
						
					</div>
					</div>
					
				</div>
			<?php } wp_reset_postdata(); ?>
		<p class="t-center no-margin"><a href="<?php echo esc_url( get_post_type_archive_link( 'eventos' ) ); ?>" class="btn btn--blue">Ver mas eventos</a></p>	
	</div>
	<div class="noticias" id="noticias">
		<h2 class="headline">Noticias</h2>
		<?php
			$post_noticias = new WP_Query(
				array(
					'posts_per_page' => 4,
					'post_type'      => 'uc_noticia',
					'order'          => 'ASC',
					'meta_query'     => array(
						array(
							'key'     => 'facultades',
							'compare' => 'LIKE',
							'value'   => '"' . get_the_ID() . '"',
						),
					),
				)
			)
			?>
			<?php
			while ( $post_noticias->have_posts() ) {
				$post_noticias->the_post();
				?>
				<div class="noticia_card">
					<div class="noticia_card__content">
						<h3 class="noticia_card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
					</div>
					<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
					</div>
				</div>
			<?php } wp_reset_postdata(); ?>
		<p class="t-center no-margin"><a href="<?php echo esc_url( get_post_type_archive_link( 'posgrados' ) ); ?>" class="btn btn--blue">Ver mas posgrados</a></p>	
	</div>
</div>
