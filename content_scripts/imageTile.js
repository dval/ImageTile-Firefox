document.addEventListener('DOMContentLoaded', () => {
    // Assuming the URL of the image to tile is passed as a query parameter
    const params = new URLSearchParams(window.location.search);
    const imageUrl = params.get('image');
    console.log('Image URL:', imageUrl);

    if (!imageUrl) {
        console.error('No image URL provided.');
        return;
    }

    // Set the image as the background of the body, tiled
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    console.log('backgroundImage:', `url('${imageUrl}')`);
    document.body.style.backgroundRepeat = 'repeat';

    // Create and style the slider
    const slider = document.createElement('input');
    slider.setAttribute('type', 'range');
    slider.setAttribute('min', '1');
    slider.setAttribute('max', '200');
    slider.setAttribute('value', '50'); // Default scale
    slider.style.position = 'fixed';
    slider.style.top = '10px';
    slider.style.left = '10px';
    slider.style.zIndex = '1000';

    // Adjust the size of the background image based on the slider
    slider.addEventListener('input', () => {
        const scale = slider.value;
        document.body.style.backgroundSize = `${scale}% ${scale}%`;
    });

    document.body.appendChild(slider);
});

//687735e2-73d9-4b0e-b2a7-2065b57a5414/tile.html?image=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F1085178632948940830%2F1189284956967546970%2Fgsolid_pattern_f3e0162c-8217-4530-8610-890e8a433b16.png%3Fex%3D659d9aed%26is%3D658b25ed%26hm%3Dcc3d420cb27c15233a24b5fd666b7a1ea6d3c2a81abd19bcc5e1591c29598193%26
