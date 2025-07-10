/* REKOMENDASI: Untuk production, gunakan versi 'minified' dari file ini
  untuk mengurangi ukuran file dan mempercepat loading.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Script untuk animasi slide menumpuk
    const panels = document.querySelectorAll('.slide-panel');

    if (panels.length > 0) {
        // Set panel pertama aktif saat halaman dimuat
        panels[0].classList.add('is-active');

        // Observer untuk mendeteksi panel mana yang aktif di layar
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                    panels.forEach(panel => panel.classList.remove('is-active'));
                    entry.target.classList.add('is-active');
                }
            });
        }, {
            threshold: 0.6
        });

        // Amati setiap panel
        panels.forEach(panel => {
            observer.observe(panel);
        });
    }
});
