document.addEventListener('DOMContentLoaded', function () {
    // Replace the following array with your actual data (game names and PDF URLs)
    const boardGames = [
        { name: 'Catan', pdfUrl: 'catan_base_rules_2020_200707.pdf' },
        { name: 'Scythe', pdfUrl: 'Manuals/catan_base_rules_2020_200707.pdf' },
        // Add more games as needed
    ];


    const manualsList = document.getElementById('manuals-list');
    
    boardGames.forEach(game => {
        console.log('Processing game:', game.name);
        console.log('adding a link for:', game.pdfUrl);
        const manualItem = document.createElement('div');
        manualItem.className = 'manual-item';

        const gameName = document.createElement('h2');

        //Create a link for the game name
        const gameLink = document.createElement('a');
        gameLink.href = game.pdfUrl; // Link to the PDF
        gameLink.textContent = game.name;
        gameLink.target = '_blank'; // Open link in a new tab

        gameName.appendChild(gameLink);

        const qrCode = document.createElement('img');
        qrCode.className = 'qr-code';
        qrCode.src = generateQRCode(game.pdfUrl);
        qrCode.alt = `QR Code for ${game.name}`;

        manualItem.appendChild(gameName);
        manualItem.appendChild(qrCode);
        manualsList.appendChild(manualItem);
    });

    function generateQRCode(url) {
        // Log the URL to check if it's correct
        console.log('Generating QR Code for URL:', url);

        // In a real-world scenario, you would use a QR code generation library.
        // For simplicity, this example uses a placeholder image.
        return 'https://dummyimage.com/100x100/000/fff&text=QR+Code';
    }
});
