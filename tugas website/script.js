document.addEventListener('DOMContentLoaded', function() {
    // ===== SCRIPT 2: ANIMASI UNTUK SLIDE MENUMPUK (KODE BARU) =====
    const panels = document.querySelectorAll('.slide-panel');

    if (panels.length > 0) {
        // Set panel pertama aktif saat halaman dimuat
        panels[0].classList.add('is-active');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Saat panel terlihat lebih dari 60% di layar
                if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                    // Hapus 'is-active' dari semua panel
                    panels.forEach(panel => panel.classList.remove('is-active'));
                    // Tambahkan 'is-active' ke panel yang sedang terlihat
                    entry.target.classList.add('is-active');
                }
            });
        }, {
            threshold: 0.6 // Atur kapan animasi terpicu (0.6 = 60% terlihat)
        });

        // Amati setiap panel
        panels.forEach(panel => {
            observer.observe(panel);
        });
    }
});