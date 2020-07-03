const svgPath = () => {
    const draw = SVG().addTo(".svg-border");
    const link = document.querySelector(".link-wrap");
    const path = draw
        .viewbox("0,0,300,50")
        .attr("preserveAspectRatio", "none")
        .path("m0.5,0.5h270l28.5,20v29H30L0.5,30Z")
        .fill("none")
        .stroke({ width: 1, color: "white" });
    link.addEventListener("mouseenter", function (e) {
        path.animate(500).plot("m0.5,0.5h299l0,0.5V49.5H0.5L0.5,49.5Z");
    });
    link.addEventListener("mouseleave", function (e) {
        path.animate(500).plot("m0.5,0.5h270l28.5,20v29H30L0.5,30Z");
    });
};

export default svgPath;