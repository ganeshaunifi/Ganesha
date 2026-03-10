document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter publications
        const year = this.dataset.year;
        document.querySelectorAll('.publication-item').forEach(item => {
            if (year === 'all' || item.dataset.year === year) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});