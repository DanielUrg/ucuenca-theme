<button class="btn nav-btn nav-btn__home btn--blue shadow-right" href="#">
    <svg class="btn nav-btn nav-btn__home-icon--desktop">
        <use xlink:href="#ucuenca"></use>
        </svg>
        <svg class="nav-btn__home-icon">
            <use xlink:href="#uc"></use>
        </svg>
    </button>
    <button onclick="addMainActive()" class="btn nav-btn nav-btn__main btn--red shadow-left" id="open-main-nav-bar">
        <span class="material-symbols-sharp"> menu_open </span>
    </button>
        <!-- <button
            class="btn nav-btn nav-btn__loggedin btn--blue shadow-left"
            id="open-loggedin-nav">
            <i class="fa-solid fa-plus"></i>
        </button> -->
        <!-- main-nav-bar--active -->
    <div class="main-nav-bar" id="main-nav-bar">
            <div class="main-nav-bar__bg main-nav-bar__bg-1"></div>
            <div class="main-nav-bar__bg main-nav-bar__bg-2"></div>
            <div class="main-nav-bar__bg main-nav-bar__bg-3"></div>
            <button onclick="removeMainActive()" class="btn nav-btn nav-btn__cross btn--red shadow-left"
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
                    <div class="accordion">
                        <a href="academia" class="underline primari-nav__item">
                            Academia
                        </a>
                        <div class="accordion__plus">
                            <span class="material-symbols-sharp">
                                add
                            </span>
                        </div>
                    </div>
                    <div class="primari-nav__submenu accordion__panel">
                        <a href="#">Facultades</a>
                        <a href="#">Todos los programas</a>
                        <a href="#">Posgrados</a>
                        <a href="#">Instituto Tecnológico</a>
                        <a href="#">Instituto de idiomas</a>
                    </div>
                    <div class="accordion">
                        <a href="investigacion" class="underline primari-nav__item">
                            Investigación & Innovación
                        </a>
                        <div class="accordion__plus">
                            <span class="material-symbols-sharp">
                                add
                            </span>
                        </div>
                    </div>

                    <div class="primari-nav__submenu accordion__panel">
                        <a href="#">Departamentos y grupos</a>
                        <a href="#">Producción científica</a>
                        <a href="#">Divulgación científica</a>
                        <a href="#">Gestión de calidad</a>
                        <a href="#">Convocatorias & fondos</a>
                        <a href="#">Congresos</a>
                    </div>
                    <div class="accordion">
                        <a href="vinculacion" class="underline primari-nav__item">
                            Vinculación
                        </a>
                        <div class="accordion__plus">
                            <span class="material-symbols-sharp">
                                add
                            </span>
                        </div>
                    </div>

                    <div class="primari-nav__submenu accordion__panel">
                        <a href="#">Gestión de proyectos</a>
                        <a href="#">Inserción laboral</a>
                        <a href="#">Posgrados</a>
                        <a href="#">Practica Laborales</a>
                        <a href="#">Congresos</a>
                    </div>
                    <div class="accordion">
                        <a href="servicios" class="underline-1 primari-nav__item">
                            Servicios
                        </a>
                        <div class="accordion__plus">
                            <span class="material-symbols-sharp">
                                add
                            </span>
                        </div>
                    </div>

                    <div class="primari-nav__submenu accordion__panel">
                        <a href="#">Culturales</a>
                        <a href="#">De salud</a>
                        <a href="#">Legales & jurídicos</a>
                        <a href="#">Consultorios, clínicas y centros</a>
                        <a href="#">Teatro Carlos Cueva Tamaríz</a>
                    </div>
                    <div class="accordion">
                        <a href="vida-universitaria" class="underline-1 primari-nav__item">
                            Vida universitaria
                        </a>
                        <div class="accordion__plus">
                            <span class="material-symbols-sharp">
                                add
                            </span>
                        </div>
                    </div>
                    <div class="primari-nav__submenu accordion__panel">
                        <a href="#">Campus</a>
                        <a href="#">Comunidad Universitaria</a>
                        <a href="#">Tour </a>
                    </div>
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
<div class="modal-bg" id="modal-bg" onclick="removeMainActive()"></div>
