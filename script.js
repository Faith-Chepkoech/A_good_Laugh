const templateSelect = document.getElementById('memeTemplate');

async function fetchMemeTemplates() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        
        if (data.success) {
            data.data.memes.forEach(meme => {
                const option = document.createElement('option');
                option.value = meme.url;  // Use the URL for the meme image
                option.textContent = meme.name;  // Use the meme name for display
                templateSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error fetching meme templates:', error);
    }
}

document.getElementById('generateMeme').addEventListener('click', function() {
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;
    const selectedTemplate = templateSelect.value;

    // Set the meme image source
    const memeImage = document.getElementById('memeImage');
    memeImage.src = selectedTemplate;

    // Set the text
    document.getElementById('topTextDisplay').innerText = topText;
    document.getElementById('bottomTextDisplay').innerText = bottomText;
});

// Fetch meme templates on page load
window.onload = fetchMemeTemplates;
