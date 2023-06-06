const h1_1 = document.getElementById("h1_1");
const h1_2 = document.getElementById("h1_2");
const h1_3 = document.getElementById("h1_3");
const h1_4 = document.getElementById("h1_4");
const h1_5 = document.getElementById("h1_5");
const h1_6 = document.getElementById("h1_6");
const introContainer = document.getElementById("intro-container");

function introSequencial() {
    h1_1.style.display = 'block';
    setTimeout(() => {
        h1_1.style.display = 'none';
        h1_2.style.display = 'block';
        setTimeout(() => {
            h1_2.style.display = 'none';
            h1_3.style.display = 'block';
            setTimeout(() => {
                h1_3.style.display = 'none';
                h1_4.style.display = 'block';
                setTimeout(() => {
                    h1_4.style.display = 'none';
                    h1_5.style.display = 'block';
                    setTimeout(() => {
                        h1_5.style.display = 'none';
                        h1_6.style.display = 'block';
                        setTimeout(() => {
                            h1_6.style.transform = 'translate(-50%, -50vh)'
                            h1_6.style.transition = '0.8s'
                            setTimeout(() => {
                                introContainer.style.transform = 'translateY(-100%)'
                                introContainer.style.opacity = '0.4'
                                introContainer.style.transition = '1s'
                            }, 300);
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    },500)
}

introSequencial();
