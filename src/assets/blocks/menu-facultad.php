<?php
/**
 * Menú Lateral
 *
 * Menú lateral para cada facultad
 *
 * @category   Components
 * @package    WordPress
 * @subpackage _themename
 * @author     Your Name <yourname@example.com>
 * @license    https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @link       https://yoursite.com
 * @since      1.0.0
 */

?>
<h3>header</h3>
				<nav class="primari-nav" id="main-nav">
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".facultad">Facultad</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#" class="second-nav__item" data-filter=".historia">Historia</a>    
						<a href="#" class="second-nav__item" data-filter=".autoridades" >Autoridades</a> 
						<a href="#" class="second-nav__item" data-filter=".personal">Personal Administrativo</a> 
						<a href="#" class="second-nav__item" data-filter=".directorio">Directorio</a>  
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".pregrado">Carreras</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
                    <?php
                        $post_pregrado = new WP_Query(
                            array(
                                'posts_per_page' => -1,
                                'post_type'      => 'uc_carrera',
                                'order'          => 'ASC',
                                'meta_query'     => array(
                                    array(
                                        'key'     => 'relacion_facultades',
                                        'compare' => 'LIKE',
                                        'value'   => '"' . get_the_ID() . '"',
                                    ),
                                ),
                            )
                        )
                        ?>
                        <?php
                        while ( $post_pregrado->have_posts() ) {
                            $post_pregrado->the_post();
                            ?>
                                <a href="<?php the_permalink()?>"><?php echo the_title() ?></a>
                        <?php } wp_reset_postdata(); ?>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".posgrados">Posgrados</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Investigación</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Grupos</a>
						<a href="#">Lineas de investigación</a>
						<a href="#">Gestión</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Vinculación</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Educación Continua</a>
						<a href="#">Proyectos</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Estudiantes</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Organizaciones</a>
						<a href="#">Internacionales</a>
						<a href="#">Nuestra cultura</a>
						<a href="#">Alumni</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item">Trámites</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								add
							</span>
						</div>
					</div>
					<div class="primari-nav__submenu accordion__panel" >
						<a href="#">Generales</a>
						<a href="#">Prácticas</a>
						<a href="#">Titulación</a>
						<a href="#">Horarios</a>
					</div>
					<div class="accordion accordion-secundario">
						<div class="underline primari-nav__item" data-filter=".eventos">Eventos</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
							arrow_downward
							</span>
						</div>
					</div>
					<div class="accordion">
						<div class="underline primari-nav__item" data-filter=".noticias">Noticias</div>
						<div class="accordion__plus">
							<span class="material-symbols-sharp">
								arrow_downward
							</span>
						</div>
					</div>
				</nav>
<!-- modal-bg--active -->
<div class="modal-bg" id="modal-bg" ></div>
