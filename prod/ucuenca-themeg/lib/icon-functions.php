<?php
/**
 * Funciones para iconos svg.
 *
 * Funciones utilizadas para iconos svg
 *
 * @package WordPress
 */

/**
 * Añade los iconos del archivo svg-defs.svg al footer
 */
function uc_svg_iconos() {
	// Define SVG sprite file.
	$svg_icons = get_stylesheet_directory() . '/dist/assets/svg/svg-defs.svg';

		// If it exists, include it.
	if ( file_exists( $svg_icons ) ) {
		require_once $svg_icons;
	}
}
add_action( 'wp_footer', 'uc_svg_iconos', 9999 );
