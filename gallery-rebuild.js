(() => {
    const CATEGORY_LABELS = {
        thumbnail: 'Thumbnail',
        carousels: 'Carousels',
        logo: 'Logo',
        reels: 'Reels',
        'motion-designing': 'Motion Designing',
        'video-editing': 'Video Editing',
        posters: 'Posters'
    };

    const baseItems = [
        { src: 'gallery/1.jpg', type: 'image', title: 'Thumbnail Design 01', categories: ['thumbnail'], shape: 'landscape' },
        { src: 'gallery/1.png', type: 'image', title: 'Logo Concept 01', categories: ['logo'], shape: 'square' },
        { src: 'gallery/2.png', type: 'image', title: 'Logo Concept 02', categories: ['logo'], shape: 'square' },
        { src: 'gallery/3.png', type: 'image', title: 'Poster Design 01', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/4.jpg', type: 'image', title: 'Thumbnail Design 02', categories: ['thumbnail'], shape: 'landscape' },
        { src: 'gallery/67e3d948bc11066bee9e7d9a_Black Vintage Cowgirl Illustration T-shirt Design-p-500.png', type: 'image', title: 'Cowgirl Poster', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/67e3d98c6954ac8098702932_White and Grey Vintage Money Streetwear T-shirt Design-p-500.png', type: 'image', title: 'Streetwear Poster', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/67e50419ceae768fbcebc54b_1-p-500.webp', type: 'image', title: 'Creative Poster', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/67e504b4c34467f09b9ddffb_Book Cover Epub-p-500.jpg', type: 'image', title: 'Book Cover Poster', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/CMS INVESTMINT/67e504b4c34467f09b9ddffb_Book Cover Epub-p-500 (1).jpg', type: 'image', title: 'Book Cover Variant', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/67e504b66b04f9d7154b42db_$10,000 Side Hustle-p-500.jpg', type: 'image', title: 'Marketing Thumbnail', categories: ['thumbnail'], shape: 'landscape' },
        { src: 'gallery/67e50633d5fcce251c11c7c4_6-p-500.png', type: 'image', title: 'Creative Poster 02', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/67e506d547947274e8cd16c5_Black and White Monogram Logo.png', type: 'image', title: 'Monogram Logo', categories: ['logo'], shape: 'square' },
        { src: 'gallery/CUSTOMIZE VECTOR ART.png', type: 'image', title: 'Vector Poster', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/D1.png', type: 'image', title: 'Poster Design 03', categories: ['posters'], shape: 'portrait' },
        { src: 'gallery/photo_6129514610747885012_y.jpg', type: 'image', title: 'Thumbnail Portrait 01', categories: ['thumbnail'], shape: 'portrait' },
        { src: 'gallery/photo_6129514610747885015_y.jpg', type: 'image', title: 'Thumbnail Portrait 02', categories: ['thumbnail'], shape: 'portrait' },
        { src: 'gallery/photo_6129514610747885018_y.jpg', type: 'image', title: 'Thumbnail Portrait 03', categories: ['thumbnail'], shape: 'portrait' },
        { src: 'gallery/photo_6215087144016399167_y.jpg', type: 'image', title: 'Thumbnail Portrait 04', categories: ['thumbnail'], shape: 'portrait' },
        { src: 'gallery/photo_6215087144016399168_y.jpg', type: 'image', title: 'Thumbnail Portrait 05', categories: ['thumbnail'], shape: 'portrait' },
        { src: 'gallery/CMS INVESTMINT/POST.png', type: 'image', title: 'Investmint Post 01', categories: ['carousels'], shape: 'square' },
        { src: 'gallery/CMS INVESTMINT/POST (1).png', type: 'image', title: 'Investmint Post 02', categories: ['carousels'], shape: 'square' },

        { src: 'gallery/Disappearing Trigger Effect.mov', type: 'video', title: 'Disappearing Trigger Effect', categories: ['reels', 'video-editing'], shape: 'portrait', poster: 'gallery/1.jpg' },
        { src: 'gallery/Emotional Scar Planting – किसी के दिमाग में ऐसी छा.mov', type: 'video', title: 'Emotional Scar Planting', categories: ['reels', 'video-editing'], shape: 'portrait', poster: 'gallery/3.png' },
        { src: 'gallery/Guilt Loop – किसी को उनकी ही गलती से कंट्रोल करो.mov', type: 'video', title: 'Guilt Loop', categories: ['reels', 'video-editing'], shape: 'portrait', poster: 'gallery/4.jpg' },
        { src: 'gallery/Reverse Jealousy Trick – बिना कुछ बोले किसी को जला.mov', type: 'video', title: 'Reverse Jealousy Trick', categories: ['reels', 'video-editing'], shape: 'portrait', poster: 'gallery/1.jpg' },

        { src: 'gallery/document_6253750791346067424.mp4', type: 'video', title: 'Motion Design 01', categories: ['motion-designing', 'video-editing'], shape: 'landscape', poster: 'gallery/2.png' },
        { src: 'gallery/document_6253750791346067425.mp4', type: 'video', title: 'Motion Design 02', categories: ['motion-designing', 'video-editing'], shape: 'landscape', poster: 'gallery/3.png' },
        { src: 'gallery/document_6253750791346067426.mp4', type: 'video', title: 'Motion Design 03', categories: ['motion-designing', 'video-editing'], shape: 'landscape', poster: 'gallery/4.jpg' },
        { src: 'gallery/document_6253750791346067427.mp4', type: 'video', title: 'Motion Design 04', categories: ['motion-designing', 'video-editing'], shape: 'landscape', poster: 'gallery/1.png' },
        { src: 'gallery/document_6255618642558328277.mp4', type: 'video', title: 'Motion Design 05', categories: ['motion-designing', 'video-editing'], shape: 'landscape', poster: 'gallery/2.png' }
    ];

    const pdfItems = Array.from({ length: 29 }, (_, i) => {
        const n = i + 1;
        const fileName = n === 28 ? 'Investmint 28 (1).pdf' : `Investmint ${n}.pdf`;
        return {
            src: `gallery/CMS INVESTMINT/${fileName}`,
            type: 'pdf',
            title: `Investmint Carousel ${n}`,
            categories: ['carousels'],
            shape: 'portrait'
        };
    });

    const ALL_ITEMS = [...baseItems, ...pdfItems];

    let activeFilter = 'all';
    let visibleItems = [];
    let currentMediaIndex = 0;

    const normalize = (value) => decodeURIComponent(String(value || '')).replace(/\\/g, '/').toLowerCase();

    function buildCard(item) {
        const card = document.createElement('article');
        card.className = 'rg-card';
        card.dataset.shape = item.shape || 'square';
        card.dataset.categories = item.categories.join(',');
        card.dataset.type = item.type;
        card.dataset.src = item.src;

        const primaryCategory = CATEGORY_LABELS[item.categories[0]] || 'Portfolio';

        if (item.type === 'pdf') {
            card.innerHTML = `
                <button class="rg-open" type="button" aria-label="Open ${item.title}">
                    <div class="rg-media">
                        <div class="rg-pdf-badge">PDF</div>
                        <div class="pdf-item" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
                            <i class="fas fa-file-pdf" style="font-size:64px;color:#ef4444"></i>
                        </div>
                    </div>
                    <div class="rg-meta">
                        <span class="rg-category">${primaryCategory}</span>
                        <h3 class="rg-title">${item.title}</h3>
                    </div>
                </button>
            `;
            card.querySelector('.rg-open').addEventListener('click', () => {
                window.open(encodeURI(item.src), '_blank');
            });
            return card;
        }

        const mediaMarkup = item.type === 'video'
            ? `<video preload="metadata" muted playsinline poster="${encodeURI(item.poster || '')}"><source src="${encodeURI(item.src)}"></video><div class="rg-video-badge">VIDEO</div>`
            : `<img src="${encodeURI(item.src)}" alt="${item.title}">`;

        card.innerHTML = `
            <button class="rg-open" type="button" aria-label="Open ${item.title}">
                <div class="rg-media">${mediaMarkup}</div>
                <div class="rg-meta">
                    <span class="rg-category">${primaryCategory}</span>
                    <h3 class="rg-title">${item.title}</h3>
                </div>
            </button>
        `;

        card.querySelector('.rg-open').addEventListener('click', () => openLightbox(item));
        return card;
    }

    function renderGrid() {
        const grid = document.getElementById('galleryGrid');
        if (!grid) return;

        const filtered = ALL_ITEMS.filter((item) => activeFilter === 'all' || item.categories.includes(activeFilter));
        visibleItems = filtered;

        grid.innerHTML = '';
        filtered.forEach((item) => grid.appendChild(buildCard(item)));

        const countNode = document.getElementById('galleryCount') || document.querySelector('.gallery-count');
        if (countNode) countNode.textContent = `${filtered.length} items`;
    }

    function bindFilters() {
        const filters = document.querySelectorAll('.filter-btn');
        filters.forEach((btn) => {
            btn.addEventListener('click', () => {
                activeFilter = btn.dataset.filter || 'all';

                filters.forEach((b) => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });

                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                renderGrid();
            });
        });
    }

    function getMediaItems() {
        return visibleItems.filter((item) => item.type === 'image' || item.type === 'video');
    }

    function openLightbox(item) {
        if (item.type === 'pdf') {
            window.open(encodeURI(item.src), '_blank');
            return;
        }

        const mediaItems = getMediaItems();
        currentMediaIndex = Math.max(0, mediaItems.findIndex((m) => normalize(m.src) === normalize(item.src)));

        const lightbox = document.getElementById('lightbox');
        const image = document.getElementById('lightboxImage');
        const video = document.getElementById('lightboxVideo');
        const caption = document.getElementById('lightboxCaption');
        if (!lightbox || !image || !video) return;

        const current = mediaItems[currentMediaIndex] || item;

        if (current.type === 'image') {
            image.src = encodeURI(current.src);
            image.classList.remove('hide');
            video.classList.remove('active');
            video.pause();
            video.removeAttribute('src');
            video.load();
        } else {
            video.src = encodeURI(current.src);
            video.classList.add('active');
            image.classList.add('hide');
            video.play().catch(() => {});
        }

        if (caption) caption.textContent = current.title;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        const video = document.getElementById('lightboxVideo');
        if (!lightbox || !video) return;

        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        video.pause();
        video.removeAttribute('src');
        video.load();
    }

    function moveLightbox(step) {
        const mediaItems = getMediaItems();
        if (!mediaItems.length) return;

        currentMediaIndex = (currentMediaIndex + step + mediaItems.length) % mediaItems.length;
        openLightbox(mediaItems[currentMediaIndex]);
    }

    function setupLightboxControls() {
        const lightbox = document.getElementById('lightbox');
        const closeBtn = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('lightboxPrev');
        const nextBtn = document.getElementById('lightboxNext');

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevBtn) prevBtn.addEventListener('click', () => moveLightbox(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => moveLightbox(1));

        document.addEventListener('keydown', (e) => {
            if (!lightbox || !lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') moveLightbox(-1);
            if (e.key === 'ArrowRight') moveLightbox(1);
        });

        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        }
    }

    function setupPage() {
        document.body.classList.add('gallery-rebuild');

        const featured = document.querySelector('.featured-section');
        if (featured) featured.remove();

        const gallerySectionContainer = document.querySelector('.gallery-section .container');
        const grid = document.getElementById('galleryGrid');

        if (gallerySectionContainer && !document.getElementById('galleryCount')) {
            const count = document.createElement('p');
            count.id = 'galleryCount';
            count.className = 'gallery-count';
            count.textContent = '0 items';
            gallerySectionContainer.insertBefore(count, grid);
        }

        bindFilters();
        setupLightboxControls();
        renderGrid();
    }

    document.addEventListener('DOMContentLoaded', setupPage);
})();
