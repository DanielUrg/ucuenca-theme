<?php
/**
 * Funciones generales
 *
 * Este es el documento de funciones
 *
 * @category   Components
 * @package    WordPress
 * @subpackage ucuenca_theme
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

/**
 * Funcionalides
 *
 * Agrega funcionalidades al sitio
 */
function ucuenca_theme_features() {
	add_theme_support( 'title-tag' ); /* Añade el titulo de cada página/post en la pestaña del navegador */
	add_theme_support( 'post-thumbnails' ); /* Añade el suporte para imágenes destacadas dentro de los post */
	add_image_size( 'banner', 400, 260, true );
	add_image_size( 'banner_facultad', 400, 260, true );
	register_nav_menu( 'menu-principal-home', 'Menú principal home' ); /* Añade el soporte para menús de navegación en el dashboard (headerMenuLocation=>nombre a llamar) */
	register_nav_menu( 'menu-facultades', 'Menú facultades' ); /* Añade el soporte para menús de navegación en el dashboard (headerMenuLocation=>nombre a llamar) */

}

add_action( 'after_setup_theme', 'ucuenca_theme_features' );

/**
 * Walker
 *
 * Agrega Walker para personalizar los menús
 */
function register_custom_nav_walker() {
	require_once 'inc/classes/class-custom-walker-menu2.php';
}
add_action( 'after_setup_theme', 'register_custom_nav_walker' );


/**
 * Funciones que son reutilizadas varias veces a lo largo del tema.
 */
require_once 'inc/helpers.php';
/**
 * Este es un documento para incluir todos los archivos de css y javascript.
 */
require_once 'inc/enqueue-assets.php';
/**
 * Este es un documento para incluir todos los archivos de css y javascript.
 */
require_once 'inc/icon-functions.php';
