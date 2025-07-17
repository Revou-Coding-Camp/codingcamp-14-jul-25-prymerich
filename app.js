document.addEventListener("DOMContentLoaded", function() {
    // Muat halaman default (home) saat aplikasi pertama kali dibuka
    loadPage('home');

    // Tambahkan event listener ke semua link sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah link melakukan navigasi standar
            const pageName = this.getAttribute('data-page');
            loadPage(pageName);
        });
    });
});

function loadPage(pageName) {
    const contentArea = document.getElementById('main-content');
    const pagePath = `pages/${pageName}.html`;

    // Tampilkan loader (opsional, tapi bagus untuk UX)
    contentArea.innerHTML = '<div class="text-center p-16"><div class="text-2xl text-gray-500">Loading...</div></div>';

    fetch(pagePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Halaman tidak ditemukan!');
            }
            return response.text();
        })
        .then(html => {
            contentArea.innerHTML = html;
            updateActiveSidebar(pageName);
        })
        .catch(error => {
            console.error('Gagal memuat halaman:', error);
            contentArea.innerHTML = `<div class="text-center p-16"><div class="text-2xl text-red-500">Error: ${error.message}</div></div>`;
        });
}

function updateActiveSidebar(pageName) {
    // Hapus kelas 'active' dari semua link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke link yang sesuai
    const activeLink = document.querySelector(`.sidebar-link[data-page="${pageName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}