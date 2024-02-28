AOS.init();

MyApp = {
    popVideos: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest(".itemVideo img.portada")) {
                    var nameURL = e.target.closest(".itemVideo").querySelector(".url").textContent;
                    Swal.fire({
                        showCloseButton: true,
                        html:
                            '<div class="video1-modal-content">' +
                            '<div class="video1-modal-content__mask">' +
                            '<div class="video1-modal-content__video-wrapper">' +
                            '<div style="padding:56.25% 0 0 0;position:relative;">' +
                            `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    });
                }
                if (e.target.closest("section.cuentos .contentVideos .itemVideo button")) {
                    e.target.closest(".itemVideo").classList.toggle("open")
                }
            })
        }
    },
    select: {
        init: function () {
            var selects = document.querySelectorAll("form select")
            selects.forEach(select => {
                select.addEventListener("click", function (e) {
                    selects.forEach(otroItem => {
                        if (otroItem !== select) {
                            otroItem.closest('.contentSelect').classList.remove("open");
                        }
                    })
                    select.closest('.contentSelect').classList.toggle("open");
                })
            });
        }
    },
    menuMovil: {
        init: function () {
            document.addEventListener("click", function (e) {
                if (e.target.closest("header .container .bntMenuMovil") || e.target.closest("section.menuMovil ul li a")) {
                    document.querySelector("header .container .bntMenuMovil").classList.toggle("open")
                    document.querySelector("section.menuMovil").classList.toggle("open")
                    document.querySelector("body").classList.toggle("scrollHidden")
                }
            })
        }
    },
    validate: {
        init: function () {
            const listainputs = document.querySelectorAll(".formulario form input")
            const listaselect = document.querySelectorAll(".formulario form select")
            const inputNumero = document.querySelector(".formulario form #celular")
            var inputCorreo = document.querySelector('.formulario form input[type=email]');

            function valiteInputs(e) {
                for (let y = 0; y < listainputs.length; y++) {
                    if (!listainputs[y].value) {
                        listainputs[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        listainputs[y].classList.remove("error");
                    }
                }
            }

            function validateSelect(e) {
                listaselect.forEach(function (select) {
                    if (select.value === select.options[0].value) {
                        select.classList.add('error');
                        e.preventDefault();
                    } else {
                        select.classList.remove('error');
                    }
                });
            }
            function validateNumbreTelefono(e) {
                const minimoCaracteres = 8;
                if (inputNumero.value.length <= minimoCaracteres) {
                    inputNumero.classList.add("error");
                    e.preventDefault();
                } else {
                    inputNumero.classList.remove("error");
                }
            }
            function validateInputCorreo(e) {
                var valueCorreo = inputCorreo.value;
                if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
                    inputCorreo.classList.remove("error");
                } else {
                    inputCorreo.classList.add("error");
                    e.preventDefault();
                }
            }
            function validateInputTerminos(e) {
                var inputTerminos = document.querySelector(".formulario form input[type='checkbox']");
                if (inputTerminos.checked) {
                    inputTerminos.closest(".checkbox").classList.remove("error");
                } else {
                    inputTerminos.closest(".checkbox").classList.add("error");
                    e.preventDefault();
                }
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest(".formulario form button")) {
                    valiteInputs(e)
                    validateSelect(e)
                    validateNumbreTelefono(e)
                    validateInputCorreo(e)
                    validateInputTerminos(e)
                }
            })
        }
    },
    elementoVisible: {
        init: function () {
            // Función para verificar si un elemento está en el viewport
            function isInViewport(element) {
                var rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // Función para agregar la clase ".visible" cuando el elemento está en el viewport
            function addVisibleClass() {
                var elemento = document.querySelector(".enunciado");
                var elemento2 = document.querySelector("footer .part1");
                if (elemento) {
                    if (isInViewport(elemento)) {
                        elemento.classList.add("visible");
                    }
                }
                if (elemento2) {
                    if (isInViewport(elemento2)) {
                        elemento2.classList.add("visible");
                    }
                }
            }

            // Ejecutar la función al cargar la página y al hacer scroll
            document.addEventListener("DOMContentLoaded", addVisibleClass);
            window.addEventListener("scroll", addVisibleClass);
        }
    },
    contentLottie: {
        init: function () {
            var cuadrado = document.getElementById('content');
            var ancho = cuadrado.offsetWidth;
            cuadrado.style.height = ancho + 'px';
            window.addEventListener('resize', function () {
                var ancho = cuadrado.offsetWidth;
                cuadrado.style.height = ancho + 'px';
            });
        }
    },
    mensajes: {
        init: function () {
            var texto1 = document.querySelectorAll("section.historyBoard .container .content .top .texto");
            var tl = gsap.timeline({
                scrollTrigger: {
                    //markers: true,
                    trigger: 'section.historyBoard .container .content .top',
                    start: '0% 50%',
                    end: '0% 50%',
                    scrub: 1,
                },
            });
            tl.to(texto1, { opacity: 1, duration: 500, ease: "none" })


            var texto2 = document.querySelectorAll("section.historyBoard .container .content .botom .texto");
            var tl2 = gsap.timeline({
                scrollTrigger: {
                    //markers: true,
                    trigger: 'section.historyBoard .container .content .botom',
                    start: '-20% 50%',
                    end: '-20% 50%',
                    scrub: 1,
                },
            });
            tl2.to(texto2, { opacity: 1, duration: 500, ease: "none" })
        }
    }
}

if ($('section.podcast').length > 0) {
    MyApp.popVideos.init();
}

if ($('.formulario select').length > 0) {
    MyApp.select.init();
}

if ($('.formulario').length > 0) {
    MyApp.validate.init();
}

if ($('section.menuMovil').length > 0) {
    MyApp.menuMovil.init();
}

if ($('.historyBoard').length > 0) {
    MyApp.contentLottie.init();
}

if ($('footer').length > 0) {
    MyApp.elementoVisible.init();
}

if ($('.historyBoard lottie-player').length > 0) {
    MyApp.mensajes.init();
}