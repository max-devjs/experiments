let data = {
    sketch: {
        background: "#FFFFFF"
    },
    distribution: {
        meanX: 0,
        meanY: 0,
        stdX: 100,
        stdY: 100,
        meanColor: 0,
        stdColor: 0.1
    },
    ellipse: {
        radius: 1
    }
};

// Variable to store GUI
var controlkit;

// Function to create control GUI
var createControlKit = () => {
    controlkit = new ControlKit();
    controlkit
        .addPanel({
            fixed: false,
            label: " Controls"
        })
        .addSubGroup({
            label: "Sketch Settings"
        })
        .addColor(data.sketch, "background", {
            colorMode: "hex",
            label: "Background Color"
        })
        .addSubGroup({
            label: "Distribution Settings"
        })
        .addNumberInput(data.distribution, "meanX", {
            label: "Mean of Abscissas",
            step: 1,
            dp: 2
        })
        .addNumberInput(data.distribution, "stdX", {
            label: "Standard Deviation of Abscissas",
            step: 1,
            dp: 2
        })
        .addNumberInput(data.distribution, "meanY", {
            label: "Mean of Ordinates",
            step: 1,
            dp: 2
        })
        .addNumberInput(data.distribution, "stdY", {
            label: "Standard Deviation of Ordinates",
            step: 1,
            dp: 2
        })
        .addNumberInput(data.distribution, "meanColor", {
            label: "Mean of Color",
            step: 0.1,
            dp: 2
        })
        .addNumberInput(data.distribution, "stdColor", {
            label: "Standard Deviation of Color",
            step: 0.1,
            dp: 2
        })
        .addNumberInput(data.ellipse, "radius", {
            label: "Radius",
            step: 0.1,
            dp: 2
        })
        .addButton("Refresh", function() {
            background(data.sketch.background);
        });
};
createControlKit();

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(data.sketch.background);
}

function draw() {
    translate(width / 2, height / 2);
    scale(1, -1);
    for (var i = 0, upperLimit = 1000; i < upperLimit; i += 1) {
        fill(
            map(
                randomGaussian(data.distribution.meanColor, data.distribution.stdColor), -1,
                1,
                0,
                255
            ),
            map(
                randomGaussian(data.distribution.meanColor, data.distribution.stdColor),
                data.distribution.meanColor - 3 * data.distribution.stdColor,
                data.distribution.meanColor + 3 * data.distribution.stdColor,
                255,
                0
            ),
            map(
                randomGaussian(data.distribution.meanColor, data.distribution.stdColor),
                data.distribution.meanColor - 3 * data.distribution.stdColor,
                data.distribution.meanColor + 3 * data.distribution.stdColor,
                200,
                100
            )
        );
        noStroke();
        ellipse(
            randomGaussian(data.distribution.meanX, data.distribution.stdX),
            randomGaussian(data.distribution.meanY, data.distribution.stdY),
            data.ellipse.radius,
            data.ellipse.radius
        );
    }
}

// function mousePressed() {
//   background(data.sketch.background);
// }