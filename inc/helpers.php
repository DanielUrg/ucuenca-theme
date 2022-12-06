<?php
/**
 * Helpers de código reusable
 *
 * Este archivo contienen algunas funciones que son reutilizadas varias veces a lo largo del tema
 *
 * @package WordPress
 */

/**
 * FUnción de metadatos de los posts, los datos usan printf para que el traductor pueda cambiar el orden de la oración en función del idioma. Además es importante usar las versiones get de las funciones para evitar hacer echo dos veces puesto que la función printf ya echoes el resultado.
 *
 * @return void
 */
function _themename_post_meta() {
	printf(
		/* translators: %s es la fecha de la publicación */
		esc_html__( 'Posteado en %s', '_themename' ),
		'<a href="' . esc_url( get_permalink() ) . '"><time datetime="' . esc_attr( get_the_date( 'c' ) ) . '">' . esc_html( get_the_date() ) . '</time></a>'
	);

	printf(
		/* translators: %s es el nombre del autor */
		esc_html__( ' por %s', '_themename' ),
		'<a href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . get_the_author() . '</a>'
	);
}

/**
 * Función para retribuir el botón de leer más para los posts.
 *
 * @requires void
 */
function _themename_read_more() {
	?>
	<div class="post-meta">
		<a href="<?php echo esc_url( get_the_permalink() ); ?> " title="<?php the_title_attribute(); ?>">
			<?php esc_html_e( 'Leer más ', '_themename' ); ?> <span class="u-screen-reader-text"><?php esc_html_e( 'acerca de ', '_themename' ) . the_title(); ?> </span>
		</a>
	</div>
	<?php
}
/**
 * Función para el menu de Facultades y carreras.
 *
 * @requires void
 */
function _themename_menu_facultad( $id_facultad = null ) {

	?>
		<nav class="primari-nav" id="main-nav">
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".facultad">Facultad</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#" class="second-nav__item" data-filter=".historia">Historia</a>    
						<a href="#" class="second-nav__item" data-filter=".autoridades" >Autoridades</a> 
						<a href="#" class="second-nav__item" data-filter=".personal">Personal Administrativo</a> 
						<a href="#" class="second-nav__item" data-filter=".directorio">Directorio</a>  
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".pregrado">Carreras</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
					<?php
						$post_pregrado = new WP_Query(
							array(
								'posts_per_page' => -1,
								'post_type'      => 'uc_carrera',
								'order'          => 'ASC',
								'meta_query'     => array(
									array(
										'key'     => 'relacion_facultades',
										'compare' => 'LIKE',
										'value'   => '"' . $id_facultad . '"',
									),
								),
							)
						)
					?>
						<?php
						while ( $post_pregrado->have_posts() ) {
							$post_pregrado->the_post();
							?>
								<a href="<?php the_permalink(); ?>"><?php echo the_title(); ?></a>
						<?php } wp_reset_postdata(); ?>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".posgrados">Posgrados</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Investigación</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Grupos</a>
						<a href="#">Lineas de investigación</a>
						<a href="#">Gestión</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Vinculación</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Educación Continua</a>
						<a href="#">Proyectos</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Estudiantes</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Organizaciones</a>
						<a href="#">Internacionales</a>
						<a href="#">Nuestra cultura</a>
						<a href="#">Alumni</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Trámites</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Generales</a>
						<a href="#">Prácticas</a>
						<a href="#">Titulación</a>
						<a href="#">Horarios</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".eventos">Eventos</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
							arrow_downward
							</span>
						</div>
					</div>
					<div class="accordion">
						<div class="underline primari-nav__item" data-filter=".noticias">Noticias</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								arrow_downward
							</span>
						</div>
					</div>
				</nav>
	<?php
}
