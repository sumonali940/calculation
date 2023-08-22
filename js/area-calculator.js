function calculateTrangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value 
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    // Show triangle area
    const areaSpna = document.getElementById('Trangle-area');
    areaSpna.innerText = area;
}

function calculateRectangleArea() {
    // get Rectangle-width value
    const RectangleField = document.getElementById('Rectangle-width');
    const rectangleWidthValueText = RectangleField.value;
    const RectangleWidth = parseFloat(rectangleWidthValueText);

    // get Rectangle length value
    const RectangleLengthField = document.getElementById('Rectangle-length');
    const rectangleLengthValueText = RectangleLengthField.value;
    const RectangleLength = parseFloat(rectangleLengthValueText);

    // Calculate Area
    const area = RectangleWidth * RectangleLength;

    // show ractangle ara 
    const rectangleAreaSpan = document.getElementById('Rectangle-area');
    rectangleAreaSpan.innerText = area;
}

// Reuseable get the value in number 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set InnerText value
function setElementInnerText(innerTextinput, area) {
    const element = document.getElementById(innerTextinput);
    element.innerText = area;
}

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const result = base * height;

    setElementInnerText('parallelogram-area', result);
}

function calculateEllipse() {
    const major = getInputValue('ellipse-first-radius');
    const minorRadius = getInputValue('ellipse-second-radius');
    const ellipseArea = 3.14 * major * minorRadius;
    setElementInnerText('ellipse-area', ellipseArea);
}

