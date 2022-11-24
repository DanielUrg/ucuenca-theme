<?php
/**
 * Static Blocks
 *
 * Objetos de tipo bloque estáticos
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
 * Clase para crear bloques estáticos
 */
class StaticBlocks {
	/**
	 * Funcion constructor
	 *
	 * @param type $name Nombre del bloque.
	 */
	public function __construct( $name ) {
		$this->name = $name;
		add_action( 'init', array( $this, 'on_init' ) );
	}

	/**
	 * Funcion para render .php
	 *
	 * @param type $attributes Nombre del bloque.
	 * @param type $content Nombre del bloque.
	 */
	public function our_render_callback( $attributes, $content ) {
		ob_start();
		require get_theme_file_path( "/dist/assets/blocks/{$this->name}.php" );
		return ob_get_clean();
	}

	/**
	 * Clase para crear bloques estáticos
	 */
	public function on_init() {
		wp_register_script( $this->name, get_stylesheet_directory_uri() . "/dist/assets/blocks/{$this->name}.js", array( 'wp-blocks', 'wp-editor' ), true, true );

		register_block_type(
			"blocktheme/{$this->name}",
			array(
				'editor_script'   => $this->name,
				'render_callback' => array( $this, 'our_render_callback' ),
			)
		);
	}
}
