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
