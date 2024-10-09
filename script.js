document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const certificates = document.querySelectorAll('.certificate');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextCertBtn = document.getElementById('next-cert-btn');
    const prevCertBtn = document.getElementById('prev-cert-btn');
    let currentIndex = 0;
    let currentCertIndex = 0;

    function showProject(index) {
        const totalProjects = projects.length;
        if (index >= totalProjects) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalProjects - 1;
        } else {
            currentIndex = index;
        }
        projects.forEach((project, i) => {
            project.style.transform = `translateX(-${currentIndex * 100}%)`;
            project.style.opacity = 0;
            setTimeout(() => project.style.opacity = 1, 500); // Geçişlerde animasyon efekti
        });
    }

    function showCertificate(index) {
        const totalCertificates = certificates.length;
        if (index >= totalCertificates) {
            currentCertIndex = 0;
        } else if (index < 0) {
            currentCertIndex = totalCertificates - 1;
        } else {
            currentCertIndex = index;
        }
        certificates.forEach((certificate, i) => {
            certificate.style.transform = `translateX(-${currentCertIndex * 100}%)`;
            certificate.style.opacity = 0;
            setTimeout(() => certificate.style.opacity = 1, 500); // Geçişlerde animasyon efekti
        });
    }

    nextBtn.addEventListener('click', () => {
        showProject(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showProject(currentIndex - 1);
    });

    nextCertBtn.addEventListener('click', () => {
        showCertificate(currentCertIndex + 1);
    });

    prevCertBtn.addEventListener('click', () => {
        showCertificate(currentCertIndex - 1);
    });

    showProject(currentIndex);
    showCertificate(currentCertIndex);
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        event.preventDefault();
    } else {
        alert('Mesajınız gönderildi!');
    }
});

