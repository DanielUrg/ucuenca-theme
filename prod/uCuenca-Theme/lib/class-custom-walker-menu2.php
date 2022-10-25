<?php
/**
 * Custom Walker
 *
 * Archivo para obtener menús personalizados
 *
 * @category   Blocks
 * @package    WordPress
 * @subpackage ucuenca_theme
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

if ( ! class_exists( 'Custom_Walker_Menu2' ) ) {
	/**
	 * Clase para crear menús personalizados
	 */
	class Custom_Walker_Menu2 extends Walker_Nav_Menu {
		/**
		 * Funcion constructor
		 *
		 * @param type $output Se utiliza para agregar contenido adicional.
		 * @param type $item Cada elemento.
		 * @param type $depth Profundidad del elemento del menú. 0 -> Principal, 1 -> Submenu.
		 * @param type $args Un objeto de los argumentos wp_nav_menu() .
		 * @param type $id ID del elemento de menú actual. Predeterminado 0.
		 */
		public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
			if ( 0 === $depth ) {
				$output .= '<li> ';
				$output .=
					"<div class='accordion'>
						<a href='" . $item->url . "' class='underline primari-nav__item'>
							" . $item->title . "
						</a>
						<div class='accordion__plus'>
							<span class='material-symbols-sharp'>
								add
							</span>
						</div>
					</div>";

			}
			if ( 1 === $depth ) {
				$output .= '<li> ';
				$output .= "<a href='" . $item->url . "'>" . $item->title . '</a>';
			}
		}


		/**
		 * Funcion constructor
		 *
		 * @param type $output Se utiliza para agregar contenido adicional.
		 * @param type $depth Profundidad del elemento del menú. Se utiliza para relleno.
		 * @param type $args Un objeto de los argumentos wp_nav_menu() .
		 */
		public function start_lvl( &$output, $depth = 0, $args = array() ) {
				$indent  = str_repeat( "\t", $depth );
				$output .= "\n$indent<ul class=\"primari-nav__submenu accordion__panel\">\n";

		}
	}
}
