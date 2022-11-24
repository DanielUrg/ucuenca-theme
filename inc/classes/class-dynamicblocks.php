<?php
/**
 * Dinamic Blocks
 *
 * Objetos de tipo bloque dinámicos
 *
 * @category   Blocks
 * @package    WordPress
 * @subpackage _themename
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

/**
 * Clase para crear bloques dinámicos
 */
class DynamicBlocks {
	/**
	 * Funcion constructor
	 *
	 * @param type $name Nombre del bloque.
	 * @param type $render_callback llamada de render.
	 * @param type $data datos adicionales.
	 */
	private function __construct( $name, $render_callback = null, $data = null ) {
		$this->name            = $name;
		$this->data            = $data;
		$this->render_callback = $render_callback;
		add_action( 'init', array( $this, 'on_init' ) );
	}

	/**
	 * Funcion constructor
	 *
	 * @param type $attributes atributos.
	 * @param type $content contenido.
	 */
	private function our_render_callback( $attributes, $content ) {
		ob_start();
		require get_theme_file_path( "/dist/assets/blocks/{$this->name}.php" );
		return ob_get_clean();
	}

	/**
	 * Funcion de inicio
	 */
	private function on_init() {
		wp_register_script( $this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array( 'wp-blocks', 'wp-editor' ), true, false );

		if ( $this->data ) {
			wp_localize_script( $this->name, $this->name, $this->data );
		}

		$our_args = array(
			'editor_script' => $this->name,
		);

		if ( $this->render_callback ) {
			$our_args['render_callback'] = array( $this, 'our_render_callback' );
		}

		register_block_type( "blocktheme/{$this->name}", $our_args );
	}
}
