<?php
/**
 * Search Route
 *
 * Archivo donde se implementan las búsquedas personalizadas API REST
 *
 * @package WordPress
 */

add_action( 'rest_api_init', 'ucuenca_theme_register_search' );

/**
 * Búsqueda personalizada
 */
function ucuenca_theme_register_search() {
	register_rest_route(
		'ucuenca_theme/v1',
		'search',
		array(
			'methods'  => WP_REST_SERVER::READABLE,
			'callback' => 'ucuenca_theme_search_results',
		),
	);
}

/**
 * Resultado de la búsqueda
 */
function ucuenca_theme_search_results() {
	$professors = new WP_Query(
		array(
			'post_type' => 'profesor',
		)
	);
	return $professors->posts;
}
