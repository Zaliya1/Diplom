const certificate = () => {
    const documentOverlay = document.querySelectorAll('.document-overlay');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "X";
    closeBtn.style.backgroundColor = "#4f686e";
    closeBtn.style.borderRadius = "50%";
    closeBtn.style.color = "white";
    closeBtn.style.width = "25px";
    closeBtn.style.height = "25px";

    documentOverlay.forEach(certificate => {
        certificate.style.width = "200px";
        certificate.style.left = "25%";

        certificate.addEventListener('mouseover', () => {
            certificate.style.opacity = 1;
        });
        certificate.addEventListener('mouseout', () => {
            certificate.style.opacity = 0;
        });

        // overlay.append(closeBtn)
        certificate.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = "block";
            overlay.style.backgroundImage = "url(../images/documents/document4.jpg)";
            overlay.style.backgroundRepeat = "no-repeat";
            overlay.style.backgroundSize = "contain";
            overlay.style.backgroundPosition = "center center";
        });
        closeBtn.addEventListener('click', () => {
            overlay.style.display = "none";
        });
    });

};
export default certificate;