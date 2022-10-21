<?php
if ( ! class_exists( 'Custom_Walker_Menu2' ) ) {


	class Custom_Walker_Menu2 extends Walker_Nav_Menu {


		public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {

			if ( 0 == $item->post_parent ) {
				$output .= "<li> ";
                $output .= 
                    "<div class='accordion'>
						<a href='".$item->url."' class='underline primari-nav__item'>
							". $item->title."
						</a>
						<div class='accordion__plus'>
							<span class='material-symbols-sharp'>
								add
							</span>
						</div>
					</div>";
                    ?>
                    <script>
                    console.log(<?php echo wp_json_encode( $item ); ?>);
                    </script>
                    <?php
			}
			if ( $item->post_parent !== 0 ) {
				$output .= "<li> ";
                $output .= "<a href='".$item->url."'>".$item->title."</a>";
			}
		}

		 public function end_el( &$output, $item, $depth = 0, $args = array() ) {

                 
		 }

		public function start_lvl( &$output, $depth = 0, $args = array() ) {
                $indent = str_repeat("\t", $depth);
                $output .= "\n$indent<ul class=\"primari-nav__submenu accordion__panel\">\n";

		}
		// public function end_lvl( &$output, $depth = 0, $args = array() ) {

		// }
	}
}
