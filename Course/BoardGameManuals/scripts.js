document.addEventListener('DOMContentLoaded', function () {
    // Fetch PDF files from the 'Manuals' folder
    fetchPDFFiles().then(boardGames => {
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

            const qrCode = document.createElement('img');
            qrCode.className = 'qr-code';
            const qrCodeUrl = generateQRCode(game.pdfUrl);
            qrCode.src = qrCodeUrl;
            qrCode.alt = `QR Code for ${game.name}`;

            console.log('Generated QR Code URL:', qrCodeUrl);

            manualItem.appendChild(gameName);
            manualItem.appendChild(qrCode);
            manualsList.appendChild(manualItem);
        });
    });

    async function fetchPDFFiles() {
        // Assume 'Manuals' is in the same directory as the HTML file
        const response = await fetch('./Manuals/');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const links = doc.querySelectorAll('a');
        const pdfFiles = Array.from(links)
            .map(link => link.href)
            .filter(href => href.endsWith('.pdf'));

        return pdfFiles.map(pdfUrl => ({
            name: pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1, pdfUrl.lastIndexOf('.pdf')),
            pdfUrl: pdfUrl
        }));
    }

    function generateQRCode(url) {
        // Log the URL to check if it's correct
        console.log('Generating QR Code for URL:', url);

        // In a real-world scenario, you would use a QR code generation library.
        // For simplicity, this example uses a placeholder image.
        return 'https://dummyimage.com/100x100/000/fff&text=QR+Code';
    }
});
