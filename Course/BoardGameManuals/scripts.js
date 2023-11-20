document.addEventListener('DOMContentLoaded', function () {
    // Replace the following array with your actual data (game names and PDF URLs)
    const boardGames = [
        { name: 'Catan', pdfUrl: 'Manuals/Catan.pdf' },
        { name: 'Monopoly', pdfUrl: 'Manuals/Monopoly.pdf' },
        // Add more games as needed
    ];

    const manualsList = document.getElementById('manuals-list');

    boardGames.forEach(game => {
        console.log('Processing game:', game.name);
        
        const manualItem = document.createElement('div');
        manualItem.className = 'manual-item';

        const gameName = document.createElement('h2');
        
        // Combine the base URL with the relative path to get the absolute URL
        const absoluteUrl = new URL(game.pdfUrl, window.location.href);

        // Create a link for the game name
        const gameLink = document.createElement('a');
        gameLink.href = absoluteUrl.href; // Link to the PDF
        gameLink.textContent = game.name;
        gameLink.target = '_blank'; // Open link in a new tab

        gameName.appendChild(gameLink);

        const qrCode = document.createElement('canvas');
        qrCode.className = 'qr-code';
        generateQRCode(absoluteUrl.href, qrCode);

        manualItem.appendChild(gameName);
        manualItem.appendChild(qrCode);
        manualsList.appendChild(manualItem);
    });

    function generateQRCode(url, qrEl) {
        console.log('Generating QR Code for URL:', url)
        var qr = new QRious({
          element: qrEl,
          value: url
        });
    }

});
