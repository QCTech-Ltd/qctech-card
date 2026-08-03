document.addEventListener('DOMContentLoaded', () => {
    // VCard Data definition
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:;Quantum Code Technologies Ltd.;;;
FN:Quantum Code Technologies Ltd.
ORG:Quantum Code Technologies Ltd.
ADR;TYPE=work;CHARSET=UTF-8:;;Flat 3, Jackson Wharf, Adderley Road;Bishop's Stortford;Hertfordshire;CM23 3AX;United Kingdom
URL;TYPE=work:https://qc-tech.co.uk
EMAIL;TYPE=work,internet:hello@qc-tech.co.uk
TEL;TYPE=CELL:+447754812247
NOTE:Company Number 17317573
REV:2026-07-30T00:00:00Z
END:VCARD`;

    // Elements
    const btnSave = document.getElementById('btn-save');
    const btnShare = document.getElementById('btn-share');
    const btnQrToggle = document.getElementById('btn-qr-toggle');
    const qrContainer = document.getElementById('qr-container');

    // Determine card URL
    let cardUrl = window.location.href;
    // Fallback if opened locally via file protocol or local development, so the QR remains functional
    if (cardUrl.startsWith('file:') || cardUrl.includes('localhost') || cardUrl.includes('127.0.0.1')) {
        cardUrl = 'https://card.qc-tech.co.uk/en';
    }

    // 1. Download vCard Functionality
    btnSave.addEventListener('click', () => {
        try {
            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'quantum_code_contact.vcf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading vCard:', error);
            alert('Unable to download the contact card directly. Please use the links above instead.');
        }
    });

    // 2. Dynamic QR Code Rendering
    if (typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById('qrcode'), {
            text: cardUrl,
            width: 160,
            height: 160,
            colorDark: '#07090e',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.M
        });
    } else {
        // Fallback using public API if library fails to load
        const qrWrapper = document.querySelector('.qr-wrapper');
        if (qrWrapper) {
            qrWrapper.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(cardUrl)}" alt="QR Code" width="160" height="160">`;
        }
    }

    // 3. Toggle QR Code view
    btnQrToggle.addEventListener('click', () => {
        const isHidden = qrContainer.classList.toggle('hidden');
        btnQrToggle.classList.toggle('active', !isHidden);
        qrContainer.setAttribute('aria-hidden', isHidden);
        
        if (!isHidden) {
            setTimeout(() => {
                qrContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 150);
        }
    });

    // 4. Share / Copy Link Functionality
    btnShare.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Quantum Code Technologies Ltd.',
                    text: 'Digital business card for Quantum Code Technologies Ltd.',
                    url: cardUrl
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Error while sharing:', err);
                }
            }
        } else {
            try {
                await navigator.clipboard.writeText(cardUrl);
                
                const originalText = btnShare.innerHTML;
                btnShare.innerHTML = `
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Copied!
                `;
                btnShare.classList.add('active');
                
                setTimeout(() => {
                    btnShare.innerHTML = originalText;
                    btnShare.classList.remove('active');
                }, 2000);
            } catch (err) {
                console.error('Error copying link:', err);
                alert('Copy this link to share: ' + cardUrl);
            }
        }
    });
});
