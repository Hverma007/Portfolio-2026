// Gallery functionality
let currentLightboxIndex = 0;
let galleryItems = [];

function debounce(fn, delay = 120) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function normalizePath(path) {
    return decodeURIComponent(String(path || ''))
        .replace(/\\/g, '/')
        .trim()
        .toLowerCase();
}

function getFileName(path) {
    const normalized = normalizePath(path);
    const parts = normalized.split('/');
    return parts[parts.length - 1] || '';
}

const investmintPdfFiles = [
    'Investmint 1.pdf', 'Investmint 2.pdf', 'Investmint 3.pdf', 'Investmint 4.pdf', 'Investmint 5.pdf',
    'Investmint 6.pdf', 'Investmint 7.pdf', 'Investmint 8.pdf', 'Investmint 9.pdf', 'Investmint 10.pdf',
    'Investmint 11.pdf', 'Investmint 12.pdf', 'Investmint 13.pdf', 'Investmint 14.pdf', 'Investmint 15.pdf',
    'Investmint 16.pdf', 'Investmint 17.pdf', 'Investmint 18.pdf', 'Investmint 19.pdf', 'Investmint 20.pdf',
    'Investmint 21.pdf', 'Investmint 22.pdf', 'Investmint 23.pdf', 'Investmint 24.pdf', 'Investmint 25.pdf',
    'Investmint 26.pdf', 'Investmint 27.pdf', 'Investmint 28 (1).pdf', 'Investmint 29.pdf'
];

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Rebuild PDF items from available portfolio files only
    syncPdfItems();
    categorizeGalleryItems();

    let galleryItemsElements = document.querySelectorAll('.gallery-item');
    
    // Store gallery items for lightbox navigation
    updateGalleryItems();
    applyAdaptiveGridClasses();
    requestAnimationFrame(applyMasonryLayout);

    window.addEventListener('resize', debounce(() => {
        applyMasonryLayout();
    }, 140));
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // refresh list after any dynamic updates
            galleryItemsElements = document.querySelectorAll('.gallery-item');

            // Filter items
            galleryItemsElements.forEach(item => {
                const categories = (item.getAttribute('data-categories') || '').split(',').map(c => c.trim()).filter(Boolean);
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hide');
                    // Restart animation
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = '';
                    }, 10);
                } else {
                    item.classList.add('hide');
                }
            });
            
            // Update gallery items for lightbox
            updateGalleryItems();
            applyAdaptiveGridClasses();
            requestAnimationFrame(applyMasonryLayout);
        });
    });
});

function applyMasonryLayout() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    const styles = window.getComputedStyle(galleryGrid);
    const rowHeight = parseFloat(styles.getPropertyValue('grid-auto-rows'));
    const rowGap = parseFloat(styles.getPropertyValue('row-gap'));

    if (!rowHeight || Number.isNaN(rowHeight)) return;

    const visibleItems = galleryGrid.querySelectorAll('.gallery-item:not(.hide)');
    visibleItems.forEach(item => {
        const inner = item.querySelector('.gallery-item-inner');
        if (!inner) return;

        const itemHeight = inner.getBoundingClientRect().height;
        const span = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${Math.max(span, 1)}`;
    });
}

function syncPdfItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.querySelectorAll('.gallery-item[data-type="pdf"]').forEach(item => item.remove());

    investmintPdfFiles.forEach((fileName, index) => {
        const pdfPath = `gallery/CMS INVESTMINT/${fileName}`;

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-type', 'pdf');
        galleryItem.setAttribute('data-categories', 'carousels');
        galleryItem.setAttribute('data-src', pdfPath);

        galleryItem.innerHTML = `
            <div class="gallery-item-inner pdf-item">
                <div class="pdf-icon">
                    <i class="fas fa-file-pdf"></i>
                </div>
                <div class="gallery-overlay">
                    <span class="item-type">Carousels</span>
                    <h3>Investmint Carousel ${index + 1}</h3>
                    <button class="view-btn" type="button">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `;

        const viewBtn = galleryItem.querySelector('.view-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', () => openPDF(pdfPath));
        }

        galleryGrid.appendChild(galleryItem);
    });
}

function inferCategoriesBySource(src, type) {
    const source = normalizePath(src);
    const fileName = getFileName(src);
    const categories = [];

    if (type === 'pdf') {
        return ['carousels'];
    }

    if (type === 'video') {
        categories.push('video-editing');

        const isReel = source.endsWith('.mov') ||
            fileName.includes('trigger') ||
            fileName.includes('jealousy') ||
            fileName.includes('guilt') ||
            fileName.includes('emotional');

        const isMotionDesign = source.endsWith('.mp4') || fileName.startsWith('document_');

        if (isReel) categories.push('reels');
        if (isMotionDesign) categories.push('motion-designing');

        return [...new Set(categories)];
    }

    if (type === 'image') {
        const isCarouselVisual = source.includes('/cms investmint/post');
        const isLogo = fileName.includes('logo') || fileName.includes('monogram') || fileName === '1.png' || fileName === '2.png';
        const isThumbnail = fileName.includes('side hustle') || fileName === '1.jpg' || fileName === '4.jpg' || fileName.startsWith('photo_');

        if (isCarouselVisual) categories.push('carousels');
        if (isLogo) categories.push('logo');
        if (isThumbnail) categories.push('thumbnail');

        if (categories.length === 0) {
            categories.push('posters');
        }

        return [...new Set(categories)];
    }

    return ['posters'];
}

function prettifyCategory(category) {
    const map = {
        'thumbnail': 'Thumbnail',
        'carousels': 'Carousels',
        'logo': 'Logo',
        'reels': 'Reels',
        'motion-designing': 'Motion Designing',
        'video-editing': 'Video Editing',
        'posters': 'Posters'
    };

    return map[category] || 'Portfolio';
}

function categorizeGalleryItems() {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        const type = item.getAttribute('data-type') || 'image';
        const img = item.querySelector('img');
        const video = item.querySelector('video');
        const fallbackSrc = item.getAttribute('data-src') || '';
        const src = (img && (img.getAttribute('src') || img.src)) || (video && (video.getAttribute('src') || video.src)) || fallbackSrc;

        const categories = inferCategoriesBySource(src, type);
        item.setAttribute('data-categories', categories.join(','));

        const typeBadge = item.querySelector('.item-type');
        if (typeBadge && categories.length) {
            typeBadge.textContent = prettifyCategory(categories[0]);
        }
    });
}

function applyAdaptiveGridClasses() {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        item.classList.remove('is-portrait', 'is-landscape', 'is-square');

        const image = item.querySelector('img');
        const video = item.querySelector('video');

        if (image) {
            const applyClass = () => {
                const width = image.naturalWidth || 1;
                const height = image.naturalHeight || 1;
                const ratio = width / height;

                if (ratio > 1.25) {
                    item.classList.add('is-landscape');
                } else if (ratio < 0.85) {
                    item.classList.add('is-portrait');
                } else {
                    item.classList.add('is-square');
                }
            };

            if (image.complete) {
                applyClass();
                applyMasonryLayout();
            } else {
                image.addEventListener('load', () => {
                    applyClass();
                    applyMasonryLayout();
                }, { once: true });
            }
        } else if (video) {
            video.preload = 'metadata';
            const applyClass = () => {
                const width = video.videoWidth || 16;
                const height = video.videoHeight || 9;
                const ratio = width / height;

                if (ratio > 1.25) {
                    item.classList.add('is-landscape');
                } else if (ratio < 0.85) {
                    item.classList.add('is-portrait');
                } else {
                    item.classList.add('is-square');
                }

                applyMasonryLayout();
            };

            video.addEventListener('loadedmetadata', applyClass, { once: true });
        }
    });

    requestAnimationFrame(applyMasonryLayout);
}

// Update gallery items array for lightbox navigation
function updateGalleryItems() {
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hide)');
    galleryItems = Array.from(visibleItems).map(item => {
        const inner = item.querySelector('.gallery-item-inner');
        if (!inner) return null;
        const img = inner.querySelector('img');
        const video = inner.querySelector('video');
        const type = item.getAttribute('data-type');
        
        if (type === 'image' && img) {
            return { src: img.getAttribute('src') || img.src, type: 'image' };
        } else if (type === 'video' && video) {
            return { src: video.getAttribute('src') || video.src, type: 'video' };
        }
        return null;
    }).filter(item => item !== null);
}

// Open lightbox
function openLightbox(src, type) {
    updateGalleryItems();

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxVideo = document.getElementById('lightboxVideo');
    if (!lightbox || !lightboxImage || !lightboxVideo) return;
    
    const sourceName = getFileName(src);
    currentLightboxIndex = galleryItems.findIndex(item => getFileName(item.src) === sourceName);
    
    // If opened from featured section (not in filtered grid), add temporary item
    if (currentLightboxIndex === -1 && type !== 'pdf') {
        galleryItems.unshift({ src, type });
        currentLightboxIndex = 0;
    }

    if (galleryItems.length === 0) return;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (type === 'image') {
        lightboxImage.src = encodeURI(src);
        lightboxImage.classList.remove('hide');
        lightboxVideo.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.removeAttribute('src');
        lightboxVideo.load();
    } else if (type === 'video') {
        lightboxVideo.src = encodeURI(src);
        lightboxVideo.classList.add('active');
        lightboxImage.classList.add('hide');
        const playPromise = lightboxVideo.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                // Autoplay may be blocked by browser policies; controls remain available.
            });
        }
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxVideo = document.getElementById('lightboxVideo');
    if (!lightbox || !lightboxVideo) return;
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    // Stop video if playing
    lightboxVideo.pause();
    lightboxVideo.src = '';
}

// Navigate lightbox
function navigateLightbox(direction) {
    if (!galleryItems.length) return;
    currentLightboxIndex += direction;
    
    // Loop around
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryItems.length - 1;
    } else if (currentLightboxIndex >= galleryItems.length) {
        currentLightboxIndex = 0;
    }
    
    const currentItem = galleryItems[currentLightboxIndex];
    if (currentItem) {
        openLightbox(currentItem.src, currentItem.type);
    }
}

// Open PDF in new tab
function openPDF(pdfPath) {
    window.open(encodeURI(pdfPath), '_blank');
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// Close lightbox when clicking outside content
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// Smooth scroll for back link
document.addEventListener('DOMContentLoaded', function() {
    const backLink = document.querySelector('.back-link');
    
    if (backLink) {
        backLink.addEventListener('click', function(e) {
            // Let the default behavior work for navigation
            // The hash in the URL will trigger scroll on the index page
        });
    }
});
