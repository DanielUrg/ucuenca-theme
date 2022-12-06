<?php
/**
 * Encolar assets
 *
 * Este es un documento para incluir todos los archivos de css y javascript
 *
 * @package ucuenca_theme
 */

/**
 * Función para asignación de la versión de los assets
 *
 * Si se está desarrollando y la variable WP_DEBUG es true la variable
 * assets_version es un número aleatorio y para la versión de producción
 * cuando la variable WP_DEBUG es false se le asigna la versión del tema.
 *
 * @return $version
 */
function ucuenca_theme_get_assets_version() {
	$version;

	if ( WP_DEBUG === true ) {
		$version = wp_rand( 0, 1000 );
	} else {
		$version = wp_get_theme()->Version;
	}
	return $version;
}
$assets_version = ucuenca_theme_get_assets_version();
global $assets_version;

/**
 * Función de de agregar estilos y scripts
 *
 * @return void
 */
function ucuenca_theme_assets() {
	global $assets_version;
	wp_register_style( 'ucuenca_theme-stylesheet', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), $assets_version, 'all' );
	wp_enqueue_style( 'ucuenca_theme-stylesheet' );

	wp_enqueue_style( 'custom-google-fonts', '//fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0', array(), $assets_version );

	wp_register_script( 'ucuenca_theme-scripts', get_template_directory_uri() . '/dist/assets/js/bundle.js', array( 'jquery' ), $assets_version, true );
	wp_enqueue_script( 'ucuenca_theme-scripts' );
}
add_action( 'wp_enqueue_scripts', 'ucuenca_theme_assets' );

/**
 * Función de de agregar estilos y scripts del admin
 *
 * @return void
 */
function ucuenca_theme_admin_assets() {
	global $assets_version;
	wp_register_style( 'ucuenca_theme-admin-stylesheet', get_template_directory_uri() . '/dist/assets/css/admin.css', array( 'jquery' ), $assets_version, 'all' );
	wp_enqueue_style( 'ucuenca_theme-admin-stylesheet' );

	wp_enqueue_style( 'custom-google-fonts', '//fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@24,400,0,0', array(), $assets_version );

	wp_register_script( 'ucuenca_theme-admin-scripts', get_template_directory_uri() . '/dist/assets/js/admin.js', array(), $assets_version, true );
	wp_enqueue_script( 'ucuenca_theme-admin-scripts' );

}
add_action( 'admin_enqueue_scripts', 'ucuenca_theme_admin_assets' );

require_once 'classes/class-staticblocks.php';
new StaticBlocks( 'header' );
new StaticBlocks( 'footer' );
new StaticBlocks( 'menu-principal' );
new StaticBlocks( 'menu-facultad' );
new StaticBlocks( 'banner-home' );
new StaticBlocks( 'banner-facultad' );
new StaticBlocks( 'content-facultad' );
new StaticBlocks( 'content-facultades' );


/**
 * Clase para crear bloques dinámicos JSX
 */

require_once 'classes/class-dynamicblocks.php';

/**
 * Borrar
 * new JSXBlock( 'banner', true, array( 'fallbackimage' => get_theme_file_uri( '/images/library-hero.jpg' ) ) );
 * new JSXBlock( 'genericheading' );
 * new JSXBlock( 'genericbutton' );
 * new JSXBlock( 'slideshow', true );
 * new JSXBlock( 'slide', true, array( 'themeimagepath' => get_theme_file_uri( '/images/' ) ) );
 */
