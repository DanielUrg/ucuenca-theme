<?php
/**
 * Search Route
 *
 * Archivo donde se implementan las búsquedas personalizadas API REST
 *
 * @package WordPress
 */

add_action( 'rest_api_init', '_themename_register_search' );

/**
 * Búsqueda personalizada
 */
function _themename_register_search() {
	register_rest_route(
		'_themename/v1',
		'search',
		array(
			'methods'  => WP_REST_SERVER::READABLE,
			'callback' => '_themename_search_results',
		),
	);
}

/**
 * Resultado de la búsqueda
 */
function _themename_search_results() {
	$professors = new WP_Query(
		array(
			'post_type' => 'profesor',
		)
	);
	return $professors->posts;
}
