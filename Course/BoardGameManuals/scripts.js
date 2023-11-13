document.addEventListener('DOMContentLoaded', function () {
    // Replace the following array with your actual data (game names and PDF URLs)
    const boardGames = [
        { name: 'Catan', pdfUrl: 'Manuals/Catan.pdf' },
        { name: 'Scythe', pdfUrl: 'Manuals/Scythe.pdf' },
        // Add more games as needed
    ];

    const manualsList = document.getElementById('manuals-list');

    boardGames.forEach(game => {
        console.log('Processing game:', game.name);
        
        const manualItem = document.createElement('div');
        manualItem.className = 'manual-item';

        const gameName = document.createElement('h2');
        
        // Create a link for the game name
        const gameLink = document.createElement('a');
        gameLink.href = game.pdfUrl; // Link to the PDF
        gameLink.textContent = game.name;
        gameLink.target = '_blank'; // Open link in a new tab

        gameName.appendChild(gameLink);

        const qrCode = document.createElement('canvas');
        qrCode.className = 'qr-code';
        generateQRCode(game.pdfUrl, qrCode);

        manualItem.appendChild(gameName);
        manualItem.appendChild(qrCode);
        manualsList.appendChild(manualItem);
    });

    function generateQRCode(url, element) {
        // Log the URL to check if it's correct
        console.log('Generating QR Code for URL:', url);
    
        // Create a new QRCode instance
        const qr = new QRCode(element, {
            text: url,
            width: 100, // Adjust the width as needed
            height: 100, // Adjust the height as needed
        });
    }
});
