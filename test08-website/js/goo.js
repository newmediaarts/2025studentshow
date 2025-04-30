/* ANIMATED GOO BACKGROUND */
/* Original Source: Gooey Pixels https://codepen.io/pixelomo/pen/VavmKK by Pixelmo */

// Define a color palette for the lava lamp effect
const colorPalette = [
    '#ffffff' // White
];

function generateGoo() {
    // Set the number of circles
    for (let i = 0; i < 50; i++) {
        // Randomize circle's initial position and size
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let r = Math.random() * 100 + 1; // Circle radius between 1 and 100
      
        const svgns = "http://www.w3.org/2000/svg";
        let circ = document.createElementNS(svgns, 'circle');
        circ.setAttributeNS(null, 'cx', x);
        circ.setAttributeNS(null, 'cy', y);
        circ.setAttributeNS(null, 'r', r);
        
        // Set the circle's fill color from the color palette
        circ.setAttributeNS(null, 'fill', colorPalette[Math.floor(Math.random() * colorPalette.length)]);

        // Randomize animation end points for x and y to move across the entire window
        let a = Math.random() * window.innerWidth;
        let b = Math.random() * window.innerHeight;
        let str = x + ';' + a + ';' + x;

        let c = Math.random() * window.innerHeight;
        let d = Math.random() * window.innerHeight;
        let stry = y + ';' + c + ';' + y;

        // Create x animation with random duration and easing
        let anix = document.createElementNS(svgns, 'animate');
        anix.setAttributeNS(null, 'attributeName', 'cx');
        anix.setAttributeNS(null, 'values', str);
        anix.setAttributeNS(null, 'dur', (8 + Math.random() * 6) + "s"); // Duration between 8s and 14s
        anix.setAttributeNS(null, 'repeatCount', "indefinite");
        anix.setAttributeNS(null, 'calcMode', 'spline');
        anix.setAttributeNS(null, 'keyTimes', '0;0.5;1');
        anix.setAttributeNS(null, 'keySplines', '0.25 0.1 0.25 1;0.25 0.1 0.25 1'); // Mild easing

        // Create y animation with random duration and easing
        let aniy = document.createElementNS(svgns, 'animate');
        aniy.setAttributeNS(null, 'attributeName', 'cy');
        aniy.setAttributeNS(null, 'values', stry);
        aniy.setAttributeNS(null, 'dur', (20 + Math.random() * 40) + "s"); // Duration between 20s and 60s
        aniy.setAttributeNS(null, 'repeatCount', "indefinite");
        aniy.setAttributeNS(null, 'calcMode', 'spline');
        aniy.setAttributeNS(null, 'keyTimes', '0;0.5;1');
        aniy.setAttributeNS(null, 'keySplines', '0.25 0.1 0.25 1;0.25 0.1 0.25 1'); // Mild easing

        // Append animations to circle and add circle to the SVG
        circ.appendChild(anix);
        circ.appendChild(aniy);
        document.getElementById('svgOne').appendChild(circ);
    }
}
generateGoo();
