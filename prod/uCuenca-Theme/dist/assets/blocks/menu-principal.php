<?php
/**
 * Menú Lateral
 *
 * Menú lateral principal
 *
 * @category   Components
 * @package    WordPress
 * @subpackage ucuenca_theme
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

?>
<a class="btn nav-btn nav-btn__home btn--blue shadow-right" href="<?php echo esc_url( site_url() ); ?>">
	<svg class="btn nav-btn nav-btn__home-icon--desktop">
		<use xlink:href="#ucuenca"></use>
		</svg>
		<svg class="nav-btn__home-icon">
			<use xlink:href="#uc"></use>
		</svg>
</a>
	<button  class="btn nav-btn nav-btn__main btn--red shadow-left" id="open-main-nav-bar">
		<span class="material-symbols-sharp"> manage_search </span>
	</button>
		<!-- <button
			class="btn nav-btn nav-btn__loggedin btn--blue shadow-left"
			id="open-loggedin-nav">
			<i class="fa-solid fa-plus"></i>
		</button> -->
		<!-- main-nav-bar--active -->
	<div class="main-nav-bar" id="main-nav-bar" >
			<div class="main-nav-bar__bg main-nav-bar__bg-1"></div>
			<div class="main-nav-bar__bg main-nav-bar__bg-2"></div>
			<div class="main-nav-bar__bg main-nav-bar__bg-3"></div>
			
			<button class="btn nav-btn nav-btn__cross btn--red shadow-left"
				id="close-main-nav-bar">
				<span class="material-symbols-sharp"> close </span>
			</button>
			

			<div class="main-nav-bar__content">
				<div class="decoration decoration-1">
					<svg>
						<use class="dec_1-1" xlink:href="#dec_1-1"></use>
						<use class="dec_1-2" xlink:href="#dec_1-2"></use>
					</svg>
				</div>
				<nav class="cervices-nav secondary-nav" id="main-nav">
					<a href="#"><span class="material-symbols-sharp">
							menu_book </span>Biblioteta</a>
					<a href="#"><span class="material-symbols-sharp">
							auto_stories </span>UCuenca Press</a>
					<a href="#"><span class="material-symbols-sharp">
							newspaper </span>Noticias</a>
					<a href="#">
						<span class="material-symbols-sharp">
							calendar_month </span>Eventos
					</a>
					<a href="#">
						<span class="material-symbols-sharp"> login </span>UCuenca en línea
					</a>
				</nav>
				<nav class="primari-nav" id="main-nav">
					<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-principal-home',
								'walker'         => new Custom_Walker_Menu2(),
							),
						);
						?>
					<button class="primari-nav__item btn btn--red shadow-left">
						Admisión y becas
					</button>
				</nav>
				<nav class="news-nav secondary-nav" id="main-nav">
					<a href="#">Nosotros</a>
					<a href="#">Asociaciones</a>
					<a href="#">Dirección de Cultura</a>
					<a href="#">Alumni</a>
				</nav>
			</div>
		</div>


<!-- modal-bg--active -->
<div class="modal-bg" id="modal-bg" ></div>
