const menuButtons =
document.querySelectorAll(".menu-btn");

menuButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        menuButtons.forEach(b=>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        console.log(
            "Panel:",
            btn.dataset.panel
        );

    });

});

const fontSlider =
document.getElementById("fontSlider");

const fontValue =
document.getElementById("fontValue");

fontSlider.addEventListener("input",()=>{

    const value = fontSlider.value;

    document.documentElement
    .style.setProperty(
        "--font-size",
        value + "%"
    );

    fontValue.textContent =
    value + "%";

});

const zoomSlider =
document.getElementById("zoomSlider");

const zoomValue =
document.getElementById("zoomValue");

zoomSlider.addEventListener("input",()=>{

    const value = zoomSlider.value;

    document.documentElement
    .style.setProperty(
        "--zoom",
        value / 100
    );

    zoomValue.textContent =
    value + "%";

});

document
.querySelectorAll(
'input[name="color"]'
)
.forEach(radio=>{

    radio.addEventListener(
        "change",
        ()=>{

            switch(radio.value){

                case "blanco":

                    document.body.style.background =
                    "#ffffff";

                    document.body.style.color =
                    "#000";

                    break;

                case "negro":

                    document.body.style.background =
                    "#000";

                    document.body.style.color =
                    "#fff";

                    break;

                case "gris":

                    document.body.style.background =
                    "#888";

                    document.body.style.color =
                    "#fff";

                    break;

            }

        }
    );

});