

// FUNÇÃO PARA EXECUTAR O CÓDIGO APÓS CARREGAMENTO DA PÁGINA
document.addEventListener('DOMContentLoaded', function () {


    const buttonLanguage = document.querySelector('#button-link-header-language')
    const introContainer = document.querySelector('#intro-container')
    const textIntro1 = document.querySelector('#text-intro-1')
    const textIntro2 = document.querySelector('#text-intro-2')
    const textIntro3 = document.querySelector('#text-intro-3')
    const textIntro4 = document.querySelector('#text-intro-4')
    const textIntro5 = document.querySelector('#text-intro-5')
    const textIntro6 = document.querySelector('#text-intro-6')
    const logoBox = document.querySelector('#logo-box')

    // FUNÇÃO DE TRANSIÇÃO DA INTRODUÇÃO DA PÁGINA
    function introTransition() {

        scrollPageReset()
        textIntro1.style.display = 'block'
        setTimeout(() => {
            textIntro1.style.display = 'none'
            textIntro2.style.display = 'block'
            setTimeout(() => {
                textIntro2.style.display = 'none'
                textIntro3.style.display = 'block'
                setTimeout(() => {
                    textIntro3.style.display = 'none'
                    textIntro4.style.display = 'block'
                    setTimeout(() => {
                        textIntro4.style.display = 'none'
                        textIntro5.style.display = 'block'
                        setTimeout(() => {
                            textIntro5.style.display = 'none'
                            textIntro6.style.display = 'block'
                            setTimeout(() => {
                                textIntro6.style.transform = 'translateY(-500%)'
                                textIntro6.style.transition = 'transform 0.8s'
                                setTimeout(() => {
                                    introContainer.style.transform = 'translateY(-90vh)'
                                    introContainer.style.transition = 'transform 1s ease-out'
                                    setTimeout(() => {
                                        introContainer.style.zIndex = '0'
                                        logoBox.style.opacity = '1'
                                        logoBox.style.transition = 'opacity 0.5s'
                                        setTimeout(() => {
                                            headerTransition()
                                            setTimeout(() => {
                                                homepageTransition()
                                            }, 200)
                                        }, 200)
                                    }, 1000)
                                }, 350)
                            }, 350)
                        }, 350)
                    }, 350)
                }, 350)
            }, 350)
        }, 500)
    }

    const buttonHeaderHome = document.querySelector('#button-link-header-home')
    const buttonHeaderAbout = document.querySelector('#button-link-header-about')
    const buttonHeaderProjects = document.querySelector('#button-link-header-projects')
    const buttonHeaderHomeMobile = document.querySelector('#button-link-header-home-mobile')
    const buttonHeaderAboutMobile = document.querySelector('#button-link-header-about-mobile')
    const buttonHeaderProjectsMobile = document.querySelector('#button-link-header-projects-mobile')
    const buttonHeaderLanguageText = document.querySelector('#text-button-language-mobile')
    const contactTextMenu = document.querySelector('#contact-text-mobile')
    const selectLanguageBox = document.querySelector('#select-box')
    const textHomepage1 = document.querySelector('#homepage-text-1')
    const textHomepage2 = document.querySelector('#homepage-text-2')
    const textHomepage3 = document.querySelector('#homepage-text-3')
    buttonHeaderHome.style.transition = 'opacity 0.6s'
    buttonHeaderAbout.style.transition = 'opacity 0.6s'
    buttonHeaderProjects.style.transition = 'opacity 0.6s'
    selectLanguageBox.style.transition = 'opacity 0.6s'

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DO HEADER - POSIÇÃO NÃO VISÍVEL
    function headerTransitionReset() {

        buttonHeaderHome.style.opacity = '0'
        buttonHeaderAbout.style.opacity = '0'
        buttonHeaderProjects.style.opacity = '0'
        selectLanguageBox.style.opacity = '0'
    }

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DO HEADER
    function headerTransition() {

        buttonHeaderHome.style.opacity = '1'
        buttonHeaderMenu.style.opacity = '1'
        if (window.innerWidth > 450) {
            setTimeout(() => {
                buttonHeaderAbout.style.opacity = '1'
                setTimeout(() => {
                    buttonHeaderProjects.style.opacity = '1'
                    setTimeout(() => {
                        selectLanguageBox.style.opacity = '1'
                    }, 180)
                }, 180)
            }, 180)
        }
        else {
            buttonHeaderAbout.style.opacity = '1'
            buttonHeaderProjects.style.opacity = '1'
            selectLanguageBox.style.opacity = '1'
        }
    }


    textHomepage1.style.transition = 'transform 0.5s'
    textHomepage2.style.transition = 'transform 0.5s'
    textHomepage3.style.transition = 'transform 0.5s'
    const homepageButton1 = document.querySelector('#homepage-button-1')
    const homepageButton2 = document.querySelector('#homepage-button-2')
    const homepageButton3 = document.querySelector('#homepage-button-3')
    const homepageButton4 = document.querySelector('#homepage-button-4')

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DA PÁGINA PRINCIPAL - POSIÇÃO NÃO VISÍVEL
    function homepageTransitionReset() {

        textHomepage1.style.transform = 'translateY(-15vh)'
        textHomepage2.style.transform = 'translateY(-15vh)'
        textHomepage3.style.transform = 'translateY(-15vh)'
        homepageButton1.style.marginBottom = '100%'
        homepageButton2.style.marginBottom = '100%'
        homepageButton3.style.marginBottom = '100%'
        homepageButton4.style.marginBottom = '100%'
    }

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DA PÁGINA PRINCIPAL
    function homepageTransition() {

        changeLanguageHome()

        if (window.innerWidth > 450) {
            setTimeout(() => {
                textHomepage1.style.transform = 'translateY(0)'
                textHomepage2.style.transform = 'translateY(0)'
                textHomepage3.style.transform = 'translateY(0)'
                homepageButton1.style.marginBottom = '0'
                homepageButton2.style.marginBottom = '0'
                homepageButton3.style.marginBottom = '0'
                homepageButton4.style.marginBottom = '0'
            }, 500)
        }
        else {
            textHomepage1.style.transform = 'translateY(0)'
            textHomepage2.style.transform = 'translateY(0)'
            textHomepage3.style.transform = 'translateY(0)'
            homepageButton1.style.marginBottom = '0'
            homepageButton2.style.marginBottom = '0'
            homepageButton3.style.marginBottom = '0'
            homepageButton4.style.marginBottom = '0'
        }
    }

    introTransition()

    const aboutText1 = document.querySelector('#about-text-1')
    const aboutText2 = document.querySelector('#about-text-2')
    const technologiesLabelBox1 = document.querySelector('#technologies-label-box-1')
    const technologiesLabelBox2 = document.querySelector('#technologies-label-box-2')
    const technologiesLabelBox3 = document.querySelector('#technologies-label-box-3')
    const technologiesLabelBox4 = document.querySelector('#technologies-label-box-4')
    const technologiesLabelBox5 = document.querySelector('#technologies-label-box-5')
    const technologiesLabelBox6 = document.querySelector('#technologies-label-box-6')
    const technologiesLabelBox7 = document.querySelector('#technologies-label-box-7')
    aboutText1.style.transition = 'left 0.5s ease'
    aboutText2.style.transition = 'left 0.5s ease'
    technologiesLabelBox1.style.transition = '0.3s linear'
    technologiesLabelBox2.style.transition = '0.3s linear'
    technologiesLabelBox3.style.transition = '0.3s linear'
    technologiesLabelBox4.style.transition = '0.3s linear'
    technologiesLabelBox5.style.transition = '0.3s linear'
    technologiesLabelBox6.style.transition = '0.3s linear'
    technologiesLabelBox7.style.transition = '0.3s linear'

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DO ABOUT - POSIÇÃO NÃO VISÍVEL
    function aboutTransitionReset() {

        aboutText1.style.left = '20vw'
        aboutText1.style.opacity = '0'
        aboutText2.style.left = '20vw'
        aboutText2.style.opacity = '0'
        technologiesLabelBox1.style.opacity = '0'
        technologiesLabelBox2.style.opacity = '0'
        technologiesLabelBox3.style.opacity = '0'
        technologiesLabelBox4.style.opacity = '0'
        technologiesLabelBox5.style.opacity = '0'
        technologiesLabelBox6.style.opacity = '0'
        technologiesLabelBox7.style.opacity = '0'
    }

    aboutTransitionReset()

    // FUNÇÃO DE TRANSIÇÃO DE TEXTOS DO ABOUT
    function aboutTransition() {

        aboutText1.style.left = '0'
        aboutText1.style.opacity = '1'
        setTimeout(() => {
            aboutText2.style.left = '0'
            aboutText2.style.opacity = '1'
            setTimeout(() => {
                technologiesLabelBox1.style.opacity = '1'
                setTimeout(() => {
                    technologiesLabelBox2.style.opacity = '1'
                    setTimeout(() => {
                        technologiesLabelBox3.style.opacity = '1'
                        setTimeout(() => {
                            technologiesLabelBox4.style.opacity = '1'
                            setTimeout(() => {
                                technologiesLabelBox5.style.opacity = '1'
                                setTimeout(() => {
                                    technologiesLabelBox6.style.opacity = '1'
                                    setTimeout(() => {
                                        technologiesLabelBox7.style.opacity = '1'
                                    }, 60)
                                }, 60)
                            }, 60)
                        }, 60)
                    }, 60)
                }, 60)
            }, 60)
        }, 300)
    }

    const spanTextHome1 = document.querySelector('#span-text-home-1')
    const spanTextHome2 = document.querySelector('#span-text-home-2')
    const spanTextAbout1 = document.querySelector('#span-text-about-1')
    const spanTextAbout2 = document.querySelector('#span-text-about-2')
    const spanTextProject1 = document.querySelector('#span-text-project-1')
    const spanTextProject2 = document.querySelector('#span-text-project-2')
    const homepageText1 = document.querySelector('#homepage-text-1')
    const homepageText2 = document.querySelector('#homepage-text-2')
    const homepageText3 = document.querySelector('#homepage-text-3')
    const buttonLinkHeaderCVMobile = document.querySelector('#button-link-header-cv-mobile')
    const buttonLinkHomepageCV = document.querySelector('#button-link-homepage-CV')
    let language = "PT"

    buttonLanguage.addEventListener('change', function () {
        if (buttonLanguage.value === "Português") { language = "PT" }
        else if (buttonLanguage.value === "English") { language = "EN" }
        else { language = "ES" }
    })

    // FUNÇÃO ALTERAÇÃO DE TEXTO DA PÁGINA PRINCIPAL ACORDO COM IDIOMA SELECIONADO
    function changeLanguageHome() {

        if (language === "PT") {
            spanTextHome1.innerHTML = "Principal"
            spanTextHome2.innerHTML = "Principal"
            spanTextAbout1.innerHTML = "Sobre mim"
            spanTextAbout2.innerHTML = "Sobre mim"
            spanTextProject1.innerHTML = "Projetos"
            spanTextProject2.innerHTML = "Projetos"
            homepageText1.innerHTML = "OLÁ, EU SOU O LUCKAS"
            homepageText2.innerHTML = "DESENVOLVEDOR"
            homepageText3.innerHTML = "FRONT-END"
            homepageButton4.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon">CURRÍCULO'
            buttonLinkHeaderCVMobile.href = "./assets/Luckas Matos CV (PT-BR).pdf"
            buttonLinkHomepageCV.href = "./assets/Luckas Matos CV (PT-BR).pdf"
        }

        else if (language === "EN") {
            spanTextHome1.innerHTML = "Home"
            spanTextHome2.innerHTML = "Home"
            spanTextAbout1.innerHTML = "About me"
            spanTextAbout2.innerHTML = "About me"
            spanTextProject1.innerHTML = "Projects"
            spanTextProject2.innerHTML = "Projects"
            homepageText1.innerHTML = "HELLO, I'M LUCKAS"
            homepageText2.innerHTML = "FRONT-END"
            homepageText3.innerHTML = "DEVELOPER"
            homepageButton4.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon">RESUME'
            buttonLinkHeaderCVMobile.href = "./assets/Luckas Matos CV (EN).pdf"
            buttonLinkHomepageCV.href = "./assets/Luckas Matos CV (EN).pdf"
        }

        else {
            spanTextHome1.innerHTML = "Principal"
            spanTextHome2.innerHTML = "Principal"
            spanTextAbout1.innerHTML = "Sobre mi"
            spanTextAbout2.innerHTML = "Sobre mi"
            spanTextProject1.innerHTML = "Proyectos"
            spanTextProject2.innerHTML = "Proyectos"
            homepageText1.innerHTML = "HOLA, SOY LUCKAS"
            homepageText2.innerHTML = "DESARROLLADOR"
            homepageText3.innerHTML = "FRONT-END"
            homepageButton4.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon">CURRÍCULO'
            buttonLinkHeaderCVMobile.href = "./assets/Luckas Matos CV (ES).pdf"
            buttonLinkHomepageCV.href = "./assets/Luckas Matos CV (ES).pdf"
        }

    }

    // FUNÇÃO ALTERAÇÃO DE TEXTO DA PÁGINA ABOUT DE ACORDO COM IDIOMA SELECIONADO
    function changeLanguageAbout() {

        if (language === "PT") {
            aboutText1.innerHTML = "Luckas Matos"
            aboutText2.innerHTML = "Me chamo Luckas Matos e atualmente estou em transição de carreira para a área de desenvolvimento web.<br><br>Após um primeiro contato com a programação e definir este novo caminho para a minha vida, iniciei meus estudos na área Full Stack em abril de 2023 na instituição DevClub, com previsão de término até dezembro do mesmo ano. Algumas das tecnologias que irei aprender neste treinamento estão listadas abaixo.<br><br>Atualmente estou focado em conhecer ferramentas e realizar projetos voltados ao Front-end. Meu objetivo é dominar o ciclo completo de desenvolvimento full stack web e mobile, assumindo desafios e entregando soluções.<br><br>Se você está procurando um programador motivado, dedicado e apaixonado pela área, estou pronto para contribuir com minha energia e habilidades."        
        }

        else if (language === "EN") {
            aboutText1.innerHTML = "Luckas Matos"
            aboutText2.innerHTML = "My name is Luckas Matos and I am currently in a career transition to the web development area.<br><br>After a first contact with programming and defining this new path for my life, I started my studies in the Full Stack area in April 2023 at the DevClub institution, scheduled to end by December of the same year Some of the technologies I will learn in this training are listed below.<br><br>Currently I am focused on knowing tools and carrying out projects aimed at the Front-end. My goal is to master the full cycle of full stack web and mobile development, taking on challenges and delivering solutions.<br><br>If you are looking for a motivated, dedicated and passionate programmer, I am ready to contribute my energy and skills."
        }

        else {
            aboutText1.innerHTML = "Luckas Matos"
            aboutText2.innerHTML = "Mi nombre es Luckas Matos y actualmente estoy en una transición de carrera al área de desarrollo web.<br><br>Después de un primer contacto con la programación y definir este nuevo camino para mi vida, comencé mis estudios en el área de Full Stack en abril de 2023 en la institución DevClub, cuya finalización está prevista para diciembre del mismo año. A continuación se enumeran algunas de las tecnologías que aprenderé en esta capacitación.<br><br>Actualmente estoy enfocado en conocer herramientas y realizar proyectos encaminados a el front-end. Mi objetivo es dominar el ciclo completo de desarrollo web y móvil de pila completa, asumiendo desafíos y brindando soluciones.<br><br>Si está buscando un programador motivado, dedicado y apasionado, estoy listo para contribuir con mi energía y mis habilidades."
        }
    }

    changeLanguageHome()
    changeLanguageAbout()

    const tabletImageFront = document.querySelector('#tablet-image-front')
    const smartphoneImageFront = document.querySelector('#smartphone-image-front')
    const tabletImageBack = document.querySelector('#tablet-image-back')
    const smartphoneImageBack = document.querySelector('#smartphone-image-back')
    const flipCardInner = document.querySelector('#flip-card-inner')
    const projectTextBox = document.querySelector('#project-text-box')
    const projectText1 = document.querySelector('#project-text-1')
    const projectText2 = document.querySelector('#project-text-2')
    const projectText3 = document.querySelector('#project-text-3')
    const projectText4 = document.querySelector('#project-text-4')
    const projectText5 = document.querySelector('#project-text-5')
    const nextPageProject = document.querySelector('#next-page')
    const previoustPageProject = document.querySelector('#previous-page')
    const buttonLabel1 = document.querySelector('#project-button-label-1')
    const buttonLabel2 = document.querySelector('#project-button-label-2')

    let rotationAngle = 0
    let pageNumber = 1

    // FUNÇÃO TRANSIÇÃO DE TEXTO DOS PROJETOS DE ACORDO COM A PÁGINA OU IDIOMA SELECIONADO
    function changePageTextProject() {

        const projectButton1 = document.querySelector('#project-button-1')
        const projectButton2 = document.querySelector('#project-button-2')

        projectTextBox.style.transform = 'translateX(60vw)'
        projectTextBox.style.opacity = '0'
        setTimeout(() => {
            projectTextBox.style.transform = 'translateX(0)'
            projectTextBox.style.opacity = '1'
            if (pageNumber === 1) {

                projectButton1.href = 'https://luckasmatos-artesano.netlify.app/'
                projectButton2.href = 'https://github.com/luckasmatos/Landing-Page-Artesano'

                if (language === "PT") {
                    projectText1.innerHTML = 'LANDING PAGE ARTESANO'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desenvolver uma Landing page para um comércio de massas artesanais a ser utilizada como agregador de links, redirecionando os visitantes para outros produtos e serviços.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGIAS UTILIZADAS: </strong>Foram utilizadas as tecnologias HTML e CSS, bem como Media Queries para redimencionar o conteúdo a diferentes dispositivos e tamanhos de telas.<br><br>'
                    projectText4.innerHTML = '<strong>DESIGN: </strong>O cliente forneceu a logo, o slogan e os links. Com base nessas informações e com o ramo de atuação do comércio foram definidos os estilos da página, como: plano de fundo, fontes, paleta de cores e posicionamento dos elementos.<br><br>'
                    projectText5.innerHTML = '<strong>TEMPO DE DESENVOLVIMENTO: </strong>2 dias.'
                    buttonLabel1.innerHTML = 'ACESSAR'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
                else if (language === "EN") {
                    projectText1.innerHTML = 'LANDING PAGE ARTESANO'
                    projectText2.innerHTML = '<strong>OBJECTIVE: </strong>Develop a Landing page for an artisan pasta trade to be used as a link aggregator, redirecting visitors to other products and services.<br><br>'
                    projectText3.innerHTML = '<strong>TECHNOLOGIES USED: </strong>HTML and CSS technologies were used, as well as Media Queries to resize the content for different devices and screen sizes.<br><br>'
                    projectText4.innerHTML = '<strong>DESIGN: </strong>The client provided the logo, tagline and links. Based on this information and with the branch of activity of the trade, the styles of the page were defined, such as: background, fonts, color palette and positioning of the elements.<br><br>'
                    projectText5.innerHTML = '<strong>DEVELOPMENT TIME: </strong>2 days.'
                    buttonLabel1.innerHTML = 'ACESS'
                    buttonLabel2.innerHTML = 'CODE'
                }
                else {
                    projectText1.innerHTML = 'LANDING PAGE ARTESANO'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desarrollar una Landing page para un comercio de pasta artesanal para ser utilizado como un agregador de enlaces, redirigiendo a los visitantes a otros productos y servicios.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGÍAS UTILIZADAS: </strong>Se utilizaron tecnologías HTML y CSS, así como Media Queries para redimensionar el contenido a diferentes dispositivos y tamaños de pantalla.<br><br>'
                    projectText4.innerHTML = '<strong>DISEÑO: </strong>El cliente proporcionó el logotipo, el eslogan y los enlaces. En base a esta información y con la rama de actividad del oficio, se definieron los estilos de la página, tales como: fondo, tipografías, paleta de colores y posicionamiento de los elementos.<br><br>'
                    projectText5.innerHTML = '<strong>TIEMPO DE DESARROLLO: </strong>2 días.'
                    buttonLabel1.innerHTML = 'ACCENDER'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
            }

            else if (pageNumber === 2) {

                projectButton1.href = 'https://luckasmatos-netflixcover.netlify.app/'
                projectButton2.href = 'https://github.com/luckasmatos/Layout-homepage-Netflix'

                if (language === "PT") {
                    projectText1.innerHTML = 'HOMEPAGE NETFLIX COVER'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desenvolver uma cópia da homepage da Netflix. Projeto realizado para fixar os conhecimentos adquiridos em desenvolvimento web.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGIAS UTILIZADAS: </strong>Foram utilizadas as tecnologias HTML e CSS, bem como Media Queries para redimencionar o conteúdo a diferentes dispositivos e tamanhos de telas.<br><br>'
                    projectText4.innerHTML = '<strong>DESIGN: </strong>O design foi inteiramente baseado na página original. A imagem de fundo e a logo foram copiadas do diretório da própria página. O posicionamento e dimensões dos elementos foram definidas de forma a se aproximarem do resultado original.<br><br>'
                    projectText5.innerHTML = '<strong>TEMPO DE DESENVOLVIMENTO: </strong>7 dias.'
                    buttonLabel1.innerHTML = 'ACESSAR'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
                else if (language === "EN") {
                    projectText1.innerHTML = 'HOMEPAGE NETFLIX COVER'
                    projectText2.innerHTML = '<strong>OBJECTIVE: </strong>To develop a copy of the Netflix homepage. Project carried out to fix the knowledge acquired in web development.<br><br>'
                    projectText3.innerHTML = '<strong>TECHNOLOGIES USED: </strong>HTML and CSS technologies were used, as well as Media Queries to resize the content for different devices and screen sizes.<br><br>'
                    projectText4.innerHTML = "<strong>DESIGN: </strong>The design was entirely based on the original page. The background image and logo were copied from the page's own directory. The positioning and dimensions of the elements were defined in order to approximate the original result.<br><br>"
                    projectText5.innerHTML = '<strong>DEVELOPMENT TIME: </strong>7 days.'
                    buttonLabel1.innerHTML = 'ACESS'
                    buttonLabel2.innerHTML = 'CODE'
                }
                else {
                    projectText1.innerHTML = 'HOMEPAGE NETFLIX COVER'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desarrollar una copia de la página de inicio de Netflix. Proyecto realizado para fijar los conocimientos adquiridos en desarrollo web.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGÍAS UTILIZADAS: </strong>Se utilizaron tecnologías HTML y CSS, así como Media Queries para redimensionar el contenido a diferentes dispositivos y tamaños de pantalla.<br><br>'
                    projectText4.innerHTML = '<strong>DISEÑO: </strong>El diseño se basó completamente en la página original. La imagen de fondo y el logo fueron copiados del propio directorio de la página. El posicionamiento y las dimensiones de los elementos se definieron para aproximarse al resultado original.<br><br>'
                    projectText5.innerHTML = '<strong>TIEMPO DE DESARROLLO: </strong>7 días.'
                    buttonLabel1.innerHTML = 'ACCENDER'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
            }

            else if (pageNumber === 3) {

                projectButton1.href = 'https://luckasmatos-currencyconverter.netlify.app/'
                projectButton2.href = 'https://github.com/luckasmatos/Projeto-Conversor-de-Moedas'

                if (language === "PT") {
                    projectText1.innerHTML = 'CONVERSOR DE MOEDAS'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desenvolver um conversor de moedas, onde o usuário seleciona uma das opções de moedas e define o valor a ser convertido e a aplicação realiza a conversão. Projeto proposto durante o módulo de JavaScript da formação Fullstack do DevClub.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGIAS UTILIZADAS: </strong>Foram utilizadas as tecnologias HTML, CSS e JavaScript, bem como Media Queries para redimencionar o conteúdo a diferentes dispositivos e tamanhos de telas.<br><br>'
                    projectText4.innerHTML = '<strong>DESIGN: </strong>O modelo original foi disponibilizado pelo DevClub via Figma. Com base neste modelo foram realizadas algumas modificações, como a paleta de cores do plano de fundo.<br><br>'
                    projectText5.innerHTML = '<strong>TEMPO DE DESENVOLVIMENTO: </strong>2 dias.'
                    buttonLabel1.innerHTML = 'ACESSAR'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
                else if (language === "EN") {
                    projectText1.innerHTML = 'CURRENCY CONVERTER'
                    projectText2.innerHTML = '<strong>OBJECTIVE: </strong>To develop a currency converter, where the user selects one of the currency options and defines the value to be converted and the application performs the conversion. Project proposed during the JavaScript module of the DevClub Fullstack training.<br><br>'
                    projectText3.innerHTML = '<strong>TECHNOLOGIES USED: </strong>HTML, CSS and JavaScript technologies were used, as well as Media Queries to resize the content to different devices and screen sizes.<br><br>'
                    projectText4.innerHTML = '<strong>DESIGN: </strong>The original model was made available by DevClub via Figma. Based on this model, some modifications were made, such as the background color palette.<br><br>'
                    projectText5.innerHTML = '<strong>DEVELOPMENT TIME: </strong>2 days.'
                    buttonLabel1.innerHTML = 'ACESS'
                    buttonLabel2.innerHTML = 'CODE'
                }
                else {
                    projectText1.innerHTML = 'CONVERTIDOR DE MONEDA'
                    projectText2.innerHTML = '<strong>OBJETIVO: </strong>Desarrollar un conversor de moneda, donde el usuario selecciona una de las opciones de moneda y define el valor a convertir y la aplicación realiza la conversión. Proyecto propuesto durante el módulo JavaScript de la formación DevClub Fullstack.<br><br>'
                    projectText3.innerHTML = '<strong>TECNOLOGÍAS UTILIZADAS: </strong>Se utilizaron tecnologías HTML, CSS y JavaScript, así como Media Queries para redimensionar el contenido a diferentes dispositivos y tamaños de pantalla.<br><br>'
                    projectText4.innerHTML = '<strong>DISEÑO: </strong>DevClub puso a disposición el modelo original a través de Figma. En base a este modelo, se hicieron algunas modificaciones, como la paleta de colores de fondo.<br><br>'
                    projectText5.innerHTML = '<strong>TIEMPO DE DESARROLLO: </strong>2 días.'
                    buttonLabel1.innerHTML = 'ACCENDER'
                    buttonLabel2.innerHTML = 'CÓDIGO'
                }
            }
        }, 400)
    }

    // FUNÇÃO TROCA DE IMAGEM DOS PROJETOS DE ACORDO COM A PÁGINA
    function changePageImageProject() {

        setTimeout(() => {
            if (pageNumber === 1) {
                tabletImageFront.src = './assets/tablet artesano.png'
                smartphoneImageFront.src = './assets/smartphone artesano.png'
                tabletImageBack.src = './assets/tablet artesano.png'
                smartphoneImageBack.src = './assets/smartphone artesano.png'
            }
            else if (pageNumber === 2) {
                tabletImageFront.src = './assets/tablet netflix.png'
                smartphoneImageFront.src = './assets/smartphone netflix.png'
                tabletImageBack.src = './assets/tablet netflix.png'
                smartphoneImageBack.src = './assets/smartphone netflix.png'
            }
            else if (pageNumber === 3) {
                tabletImageFront.src = './assets/tablet converter.png'
                smartphoneImageFront.src = './assets/smartphone converter.png'
                tabletImageBack.src = './assets/tablet converter.png'
                smartphoneImageBack.src = './assets/smartphone converter.png'
            }
        }, flipCardInnerTransitionImage)
    }

    //FUNÇÕES TRANSIÇÃO BOX DE IMAGEM DO PROJETO DE ACORDO COM CLICK DOS BOTÕES LATERAIS
    const flipCardInnerTransition = 'transform 0.8s linear'
    const flipCardInnerTransitionImage = 400

    nextPageProject.addEventListener('click', function () {

        rotationAngle += 180
        flipCardInner.style.transform = `rotateY(${rotationAngle}deg)`
        flipCardInner.style.transition = flipCardInnerTransition
        pageNumber += 1
        if (pageNumber === 4) pageNumber = 1

        changePageTextProject()
        changePageImageProject()
    })

    previoustPageProject.addEventListener('click', function () {

        rotationAngle -= 180;
        flipCardInner.style.transform = `rotateY(${rotationAngle}deg)`;
        flipCardInner.style.transition = flipCardInnerTransition
        pageNumber -= 1
        if (pageNumber === 0) pageNumber = 3

        changePageTextProject()
        changePageImageProject()

    })

    changePageTextProject()
    changePageImageProject()

    function functionsChangeLanguage() {

        headerTransitionReset()
        homepageTransitionReset()
        aboutTransitionReset()
        setTimeout(() => {
            headerTransition()
            homepageTransition()
            aboutTransition()
            changePageTextProject()
            changeLanguageAbout()
        }, 300);
    }

    buttonLanguage.addEventListener('change', functionsChangeLanguage)

    const homepageContainer = document.querySelector('#homepage-container')
    const aboutContainer = document.querySelector('#about-container')
    const projectContainer = document.querySelector('#project-container')

    function scrollToHomepageContainer() {
        
        if (homepageContainer) {
            homepageContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToAboutContainer() {
        
        if (aboutContainer) {
            aboutContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function scrollToProjectContainer() {
        if (projectContainer) {
            projectContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    //FUNÇÃO PARA ROLAGEM AUTOMÁTICA DA PÁGINA PARA O TOPO
    function scrollPageReset() {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    buttonHeaderHome.addEventListener('click', scrollToHomepageContainer)
    buttonHeaderHomeMobile.addEventListener('click', scrollToHomepageContainer)
    buttonHeaderAbout.addEventListener('click', scrollToAboutContainer)
    buttonHeaderAboutMobile.addEventListener('click', scrollToAboutContainer)
    buttonHeaderProjects.addEventListener('click', scrollToProjectContainer)
    buttonHeaderProjectsMobile.addEventListener('click', scrollToProjectContainer)

    function positionScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        if (scrollTop >= 0 && scrollTop <= viewportHeight * 0.75) {
            buttonHeaderHome.style.color = '#5858d3'
            buttonHeaderHome.style.fontWeight = '400'
            buttonHeaderAbout.style.color = '#fff'
            buttonHeaderAbout.style.fontWeight = '200'
            buttonHeaderProjects.style.color = '#fff'
            buttonHeaderProjects.style.fontWeight = '200'
            buttonHeaderHomeMobile.style.paddingLeft = '8vw'
            buttonHeaderHomeMobile.style.fontWeight = '400'
            buttonHeaderHomeMobile.style.color = '#5858d3'
            buttonHeaderAboutMobile.style.paddingLeft = '5vw'
            buttonHeaderAboutMobile.style.fontWeight = '200'
            buttonHeaderAboutMobile.style.color = '#fff'
            buttonHeaderProjectsMobile.style.paddingLeft = '5vw'
            buttonHeaderProjectsMobile.style.fontWeight = '200'
            buttonHeaderProjectsMobile.style.color = '#fff'
        } else if (scrollTop > viewportHeight * 0.75 && scrollTop <= viewportHeight * 2 - (viewportHeight * 0.25)) {
            buttonHeaderHome.style.color = '#fff'
            buttonHeaderHome.style.fontWeight = '200'
            buttonHeaderAbout.style.color = '#5858d3'
            buttonHeaderAbout.style.fontWeight = '400'
            buttonHeaderProjects.style.color = '#fff'
            buttonHeaderProjects.style.fontWeight = '200'

            buttonHeaderHomeMobile.style.paddingLeft = '5vw'
            buttonHeaderHomeMobile.style.fontWeight = '200'
            buttonHeaderHomeMobile.style.color = '#fff'
            buttonHeaderAboutMobile.style.paddingLeft = '8vw'
            buttonHeaderAboutMobile.style.fontWeight = '400'
            buttonHeaderAboutMobile.style.color = '#5858d3'
            buttonHeaderProjectsMobile.style.paddingLeft = '5vw'
            buttonHeaderProjectsMobile.style.fontWeight = '200'
            buttonHeaderProjectsMobile.style.color = '#fff'
            if (aboutText1.style.opacity !== '1' && introContainer.style.zIndex === '0') {
                aboutTransition()
            }
        } else if (scrollTop > viewportHeight * 2 - (viewportHeight * 0.25) && scrollTop <= viewportHeight * 3) {
            buttonHeaderHome.style.color = '#fff'
            buttonHeaderHome.style.fontWeight = '200'
            buttonHeaderAbout.style.color = '#fff'
            buttonHeaderAbout.style.fontWeight = '200'
            buttonHeaderProjects.style.color = '#5858d3'
            buttonHeaderProjects.style.fontWeight = '400'
            buttonHeaderHomeMobile.style.paddingLeft = '5vw'
            buttonHeaderHomeMobile.style.fontWeight = '200'
            buttonHeaderHomeMobile.style.color = '#fff'
            buttonHeaderAboutMobile.style.paddingLeft = '5vw'
            buttonHeaderAboutMobile.style.fontWeight = '200'
            buttonHeaderAboutMobile.style.color = '#fff'
            buttonHeaderProjectsMobile.style.paddingLeft = '8vw'
            buttonHeaderProjectsMobile.style.fontWeight = '400'
            buttonHeaderProjectsMobile.style.color = '#5858d3'
        }
    }

    positionScroll()
    window.addEventListener('scroll', positionScroll);

    const buttonHeaderMenu = document.querySelector('#button-link-header-menu-box')
    const buttonHeaderMenuLine1 = document.querySelector('#button-link-header-menu-1')
    const buttonHeaderMenuLine2 = document.querySelector('#button-link-header-menu-2')
    const buttonHeaderMenuLine3 = document.querySelector('#button-link-header-menu-3')
    const menuBox = document.querySelector('#link-box-mobile')
    homepageContainer.style.transition = 'filter 0.3s linear'
    aboutContainer.style.transition = 'filter 0.3s linear'
    projectContainer.style.transition = 'filter 0.3s linear'
    let checkPosition = 1

    //FUNÇÃO DE TRANSIÇÃO DO BOTÃO DE MENU - MENU ATIVO
    function menuTransition() {

        checkPosition = 1
        buttonHeaderMenuLine1.style.top = '50%'
        buttonHeaderMenuLine1.style.transform = 'rotate(135deg)'
        buttonHeaderMenuLine1.style.transition = '0.2s linear'
        buttonHeaderMenuLine2.style.opacity = '0'
        buttonHeaderMenuLine3.style.top = '50%'
        buttonHeaderMenuLine3.style.transform = 'rotate(-135deg)'
        buttonHeaderMenuLine3.style.transition = '0.2s linear'
        menuBox.style.right = '0'
        homepageContainer.style.filter = 'brightness(75%)'           
        aboutContainer.style.filter = 'brightness(75%)'           
        projectContainer.style.filter = 'brightness(75%)'
    }

    //FUNÇÃO DE TRANSIÇÃO DO BOTÃO DE MENU - MENU INATIVO
    function menuTransitionExit() {

        checkPosition = 0
        buttonHeaderMenuLine1.style.top = '25%'
        buttonHeaderMenuLine1.style.transform = 'rotate(0)'
        buttonHeaderMenuLine1.style.transition = '0.2s linear'
        buttonHeaderMenuLine2.style.opacity = '1'
        buttonHeaderMenuLine2.style.transition = 'opacity 0.2s linear'
        buttonHeaderMenuLine3.style.top = '75%'
        buttonHeaderMenuLine3.style.transform = 'rotate(0)'
        buttonHeaderMenuLine3.style.transition = '0.2s linear'
        menuBox.style.right = '-70vw'
        homepageContainer.style.filter = 'brightness(100%)'
        aboutContainer.style.filter = 'brightness(100%)'
        projectContainer.style.filter = 'brightness(100%)'
    }

    // FUNÇÃO DE TRANSIÇÃO ENTRE ANIMAÇÕES DO BOTÃO MENU
    buttonMenuTranslate()
    buttonHeaderMenu.addEventListener('click', buttonMenuTranslate)

    function buttonMenuTranslate() {
        if (checkPosition === 0) {
            menuTransition()
        }
        else {
            menuTransitionExit()
        }
    }

    const buttonLanguageMobile = document.querySelector('#button-link-header-language-mobile')
    const optionBox = document.querySelector('#options-box-mobile')
    const arrowLanguageMobile = document.querySelector('#arrow-language-mobile')
    const linkCV = document.querySelector('#button-link-contact-mobile-4')
    let languageMenu = 0

    // FUNÇÃO DE TRANSIÇÃO DA JANELA DE IDIOMAS NO MENU
    function menuLanguagesTransition() {
        if (languageMenu === 0) {
            languageMenu = 1
            optionBox.style.display = 'block'
            arrowLanguageMobile.style.transform = 'rotate(90deg)'
        }
        else {
            languageMenu = 0
            optionBox.style.display = 'none'
            arrowLanguageMobile.style.transform = 'rotate(-90deg)'
        }
    }

    buttonLanguageMobile.addEventListener('click', menuLanguagesTransition)

    const buttonLanguageMobilePT = document.querySelector('#button-language-mobile-PT')
    const buttonLanguageMobileEN = document.querySelector('#button-language-mobile-EN')
    const buttonLanguageMobileES = document.querySelector('#button-language-mobile-ES')
    let languageMobileSelected = 'PT'

    buttonLanguageMobilePT.addEventListener('click', function () {
        languageMobileSelected = 'PT'
        language = "PT"
        menuTransitionExit()
        setTimeout(() => {
            changeLanguageHomeMobile()
            functionsChangeLanguage()
        }, 300);
    })

    buttonLanguageMobileEN.addEventListener('click', function () {
        languageMobileSelected = 'EN'
        language = "EN"
        menuTransitionExit()
        setTimeout(() => {
            changeLanguageHomeMobile()
            functionsChangeLanguage()
        }, 300);
    });

    buttonLanguageMobileES.addEventListener('click', function () {
        languageMobileSelected = 'ES'
        language = "ES"
        menuTransitionExit()
        setTimeout(() => {
            changeLanguageHomeMobile()
            functionsChangeLanguage()
        }, 300);
    })

    function changeLanguageHomeMobile() {

    homepageTransitionReset()
    setTimeout(() => {
        if (languageMobileSelected === 'PT') {
            buttonLanguageMobilePT.style.fontWeight = '400'
            buttonLanguageMobilePT.style.color = '#5858d3'
            buttonLanguageMobileEN.style.fontWeight = '200'
            buttonLanguageMobileEN.style.color = '#fff'
            buttonLanguageMobileES.style.fontWeight = '200'
            buttonLanguageMobileES.style.color = '#fff'
            buttonHeaderHomeMobile.innerHTML = "Principal"
            buttonHeaderAboutMobile.innerHTML = "Sobre mim"
            buttonHeaderProjectsMobile.innerHTML = "Projetos"
            buttonHeaderLanguageText.innerHTML = "Idioma"
            contactTextMenu.innerHTML = "Contato"
            linkCV.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon-mobile">CURRÍCULO'
            homepageText1.innerHTML = "OLÁ, EU SOU O LUCKAS"
            homepageText2.innerHTML = "DESENVOLVEDOR"
            homepageText3.innerHTML = "FRONT-END"
        }

        else if (languageMobileSelected === 'EN') {
            buttonHeaderHomeMobile.innerHTML = "Home"
            buttonHeaderAboutMobile.innerHTML = "About me"
            buttonHeaderProjectsMobile.innerHTML = "Projects"
            buttonHeaderLanguageText.innerHTML = "Language"
            contactTextMenu.innerHTML = "Contact"
            linkCV.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon-mobile">RESUME'
            homepageText1.innerHTML = "HELLO, I'M LUCKAS"
            homepageText2.innerHTML = "FRONT-END"
            homepageText3.innerHTML = "DEVELOPER"
            buttonLanguageMobilePT.style.fontWeight = '200'
            buttonLanguageMobilePT.style.color = '#fff'
            buttonLanguageMobileEN.style.fontWeight = '400'
            buttonLanguageMobileEN.style.color = '#5858d3'
            buttonLanguageMobileES.style.fontWeight = '200'
            buttonLanguageMobileES.style.color = '#fff'
        }

        else {
            buttonHeaderHomeMobile.innerHTML = "Principal"
            buttonHeaderAboutMobile.innerHTML = "Sobre mi"
            buttonHeaderProjectsMobile.innerHTML = "Proyectos"
            buttonHeaderLanguageText.innerHTML = "Idioma"
            contactTextMenu.innerHTML = "Contacto"
            linkCV.innerHTML = '<img src="./assets/icon archive.png" alt="archive icon" class="homepage-icon-mobile">CURRÍCULO'
            homepageText1.innerHTML = "HOLA, SOY LUCKAS"
            homepageText2.innerHTML = "DESARROLLADOR"
            homepageText3.innerHTML = "FRONT-END"
            buttonLanguageMobilePT.style.fontWeight = '200'
            buttonLanguageMobilePT.style.color = '#fff'
            buttonLanguageMobileEN.style.fontWeight = '200'
            buttonLanguageMobileEN.style.color = '#fff'
            buttonLanguageMobileES.style.fontWeight = '400'
            buttonLanguageMobileES.style.color = '#5858d3'
        }
    }, 500);


    }

    changeLanguageHomeMobile()

})



