(() => {
    const label = {
        'logo-designing': 'Logo Designing',
        'ui-ux-design': 'UI/UX Design',
        'social-media-posters': 'Social Media Posters',
        'package-designing': 'Package Designing',
        'tshirt-designing': 'Tshirt Designing',
        'card-designing': 'Card Designing',
        carousels: 'Carousels',
        thumbnails: 'Thumbnails',
        'book-covers': 'Book Covers',
        'motion-designing': 'Motion Designing',
        'social-media-reels': 'Social Media Reels'
    };

    const categoryOrder = [
        'logo-designing',
        'ui-ux-design',
        'social-media-posters',
        'package-designing',
        'tshirt-designing',
        'card-designing',
        'carousels',
        'thumbnails',
        'book-covers',
        'motion-designing',
        'social-media-reels'
    ];

    const items = [
        { src: 'gallery/1.jpg', type: 'image', title: 'Thumbnail 1', categories: ['thumbnails'], shape: 'landscape' },
        { src: 'gallery/4.jpg', type: 'image', title: 'Thumbnail 2', categories: ['thumbnails'], shape: 'landscape' },
        { src: 'gallery/67e504b66b04f9d7154b42db_$10,000 Side Hustle-p-500.jpg', type: 'image', title: 'Cover Design 1', categories: ['book-covers'], shape: 'portrait' },
        { src: 'gallery/photo_6129514610747885012_y.jpg', type: 'image', title: 'Portrait Poster 01', categories: ['package-designing'], shape: 'portrait' },
        { src: 'gallery/90563036-1.png', type: 'image', title: 'Package Design 02', categories: ['package-designing'], shape: 'landscape' },
        { src: 'gallery/photo_6129514610747885015_y.jpg', type: 'image', title: 'Social Media Post 1', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/photo_6129514610747885018_y.jpg', type: 'image', title: 'Social Media Post 2', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/photo_6215087144016399167_y.jpg', type: 'image', title: 'Social Media Post 3', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/photo_6215087144016399168_y.jpg', type: 'image', title: 'Social Media Post 4', categories: ['social-media-posters'], shape: 'portrait' },

        { src: 'gallery/1.png', type: 'image', title: 'Logo Design 1', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/1 (3).png', type: 'image', title: 'Logo Design 2', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/2 (1).png', type: 'image', title: 'Logo Design 3', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/3 (1).png', type: 'image', title: 'Logo Design 4', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/1 (2).png', type: 'image', title: 'Logo Design 5', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/2 (3).png', type: 'image', title: 'Logo Design 6', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/eight monk var 2.png', type: 'image', title: 'Logo Design 7', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/Eight Monk Work-01.png', type: 'image', title: 'Logo Design 8', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/ror logo export_ai.png', type: 'image', title: 'Logo Design 9', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/67e506d547947274e8cd16c5_Black and White Monogram Logo.png', type: 'image', title: 'Logo Design 10', categories: ['logo-designing'], shape: 'square' },
        { src: 'gallery/HARSH VERMA STUDIO.png', type: 'image', title: 'App UI Designing 1', categories: ['ui-ux-design'], shape: 'square' },
        { src: 'gallery/HARSH VERMA STUDIO (2).png', type: 'image', title: 'App UI Designing 2', categories: ['ui-ux-design'], shape: 'square' },
        { src: 'gallery/2.png', type: 'image', title: 'Thumbnail 4', categories: ['thumbnails'], shape: 'square' },

        { src: 'gallery/CMS INVESTMINT/POST.png', type: 'image', title: 'Social Media Post 5', categories: ['social-media-posters'], shape: 'square' },
        { src: 'gallery/CMS INVESTMINT/POST (1).png', type: 'image', title: 'Social Media Post 6', categories: ['social-media-posters'], shape: 'square' },
        { src: 'gallery/1 (4).png', type: 'image', title: 'Social Media Post 7', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/2 (2).png', type: 'image', title: 'Social Media Post 8', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/3 (2).png', type: 'image', title: 'Social Media Post 9', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/4 (2).png', type: 'image', title: 'Social Media Post 10', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/Code 2 (1).png', type: 'image', title: 'Social Media Post 11', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/Code 3 (1).png', type: 'image', title: 'Social Media Post 12', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/Codewilla 1 (1).png', type: 'image', title: 'Social Media Post 13', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/1 (5).png', type: 'image', title: 'Social Media Post 14', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/12sample.png', type: 'image', title: 'Social Media Post 15', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/DatePe.png', type: 'image', title: 'Social Media Post 16', categories: ['social-media-posters'], shape: 'portrait' },

        { src: 'gallery/Disappearing Trigger Effect.mov', type: 'video', title: 'Social Media Edit 1', categories: ['social-media-reels'], shape: 'portrait' },
        { src: 'gallery/Emotional Scar Planting – किसी के दिमाग में ऐसी छा.mov', type: 'video', title: 'Social Media Edit 2', categories: ['social-media-reels'], shape: 'portrait' },
        { src: 'gallery/Guilt Loop – किसी को उनकी ही गलती से कंट्रोल करो.mov', type: 'video', title: 'Social Media Edit 3', categories: ['social-media-reels'], shape: 'portrait' },
        { src: 'gallery/Reverse Jealousy Trick – बिना कुछ बोले किसी को जला.mov', type: 'video', title: 'Social Media Edit 4', categories: ['social-media-reels'], shape: 'portrait' },
        { src: 'gallery/minecraft.mp4', type: 'video', title: 'Social Media Edit 5', categories: ['social-media-reels'], shape: 'portrait' },
        { src: 'gallery/New Work.mp4', type: 'video', title: 'Social Media Edit 6', categories: ['social-media-reels'], shape: 'portrait' },

        { src: 'gallery/document_6253750791346067424.mp4', type: 'video', title: 'Motion Designing 1', categories: ['motion-designing'], shape: 'portrait' },
        { src: 'gallery/document_6253750791346067425.mp4', type: 'video', title: 'Motion Designing 2', categories: ['motion-designing'], shape: 'landscape' },
        { src: 'gallery/document_6253750791346067426.mp4', type: 'video', title: 'Motion Designing 3', categories: ['motion-designing'], shape: 'landscape' },
        { src: 'gallery/document_6253750791346067427.mp4', type: 'video', title: 'Motion Designing 4', categories: ['motion-designing'], shape: 'landscape' },
        { src: 'gallery/document_6255618642558328277.mp4', type: 'video', title: 'Motion Designing 5', categories: ['motion-designing'], shape: 'portrait' },

        { src: 'gallery/3.png', type: 'image', title: 'Thumbnail 3', categories: ['thumbnails'], shape: 'portrait' },
        { src: 'gallery/D1.png', type: 'image', title: 'Social Media Post 17', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/67e3d948bc11066bee9e7d9a_Black Vintage Cowgirl Illustration T-shirt Design-p-500.png', type: 'image', title: 'T-Shirt Design 1', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/67e3d98c6954ac8098702932_White and Grey Vintage Money Streetwear T-shirt Design-p-500.png', type: 'image', title: 'T-Shirt Design 2', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/67e50633d5fcce251c11c7c4_6-p-500.png', type: 'image', title: 'T-Shirt Design 3', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/1.png', type: 'image', title: 'T-Shirt Design 4', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/2.png', type: 'image', title: 'T-Shirt Design 5', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/4.png', type: 'image', title: 'T-Shirt Design 6', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/5.png', type: 'image', title: 'T-Shirt Design 7', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/6.png', type: 'image', title: 'T-Shirt Design 8', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/7.png', type: 'image', title: 'T-Shirt Design 9', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/8.png', type: 'image', title: 'T-Shirt Design 10', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/10.png', type: 'image', title: 'T-Shirt Design 11', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/11.png', type: 'image', title: 'T-Shirt Design 12', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/tshirt1/12.png', type: 'image', title: 'T-Shirt Design 13', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/Heading (10).png', type: 'image', title: 'T-Shirt Design 14', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/1.png', type: 'image', title: 'T-Shirt Design 15', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/2.png', type: 'image', title: 'T-Shirt Design 16', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/3.jpg', type: 'image', title: 'T-Shirt Design 17', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/4.jpg', type: 'image', title: 'T-Shirt Design 18', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/5.png', type: 'image', title: 'T-Shirt Design 19', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/6.png', type: 'image', title: 'T-Shirt Design 20', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/7.png', type: 'image', title: 'T-Shirt Design 21', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/8.png', type: 'image', title: 'T-Shirt Design 22', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/9.png', type: 'image', title: 'T-Shirt Design 23', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/10.png', type: 'image', title: 'T-Shirt Design 24', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/11.jpg', type: 'image', title: 'T-Shirt Design 25', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/12.jpg', type: 'image', title: 'T-Shirt Design 26', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/13.jpg', type: 'image', title: 'T-Shirt Design 27', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/14.jpg', type: 'image', title: 'T-Shirt Design 28', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/15.jpg', type: 'image', title: 'T-Shirt Design 29', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/16.jpg', type: 'image', title: 'T-Shirt Design 30', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/17.jpg', type: 'image', title: 'T-Shirt Design 31', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/18.jpg', type: 'image', title: 'T-Shirt Design 32', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/19.jpg', type: 'image', title: 'T-Shirt Design 33', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/20.jpg', type: 'image', title: 'T-Shirt Design 34', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/21.jpg', type: 'image', title: 'T-Shirt Design 35', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/22.jpg', type: 'image', title: 'T-Shirt Design 36', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/23.jpg', type: 'image', title: 'T-Shirt Design 37', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/24.jpg', type: 'image', title: 'T-Shirt Design 38', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/25.jpg', type: 'image', title: 'T-Shirt Design 39', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/26.jpg', type: 'image', title: 'T-Shirt Design 40', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/27.jpg', type: 'image', title: 'T-Shirt Design 41', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/28.jpg', type: 'image', title: 'T-Shirt Design 42', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/29.jpg', type: 'image', title: 'T-Shirt Design 43', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/TSHIRT2/30.jpg', type: 'image', title: 'T-Shirt Design 44', categories: ['tshirt-designing'], shape: 'portrait' },
        { src: 'gallery/CARD/Final_20250914_203032_0000.webp', type: 'image', title: 'Card Design 01', categories: ['card-designing'], shape: 'square' },
        { src: 'gallery/CARD/Final_20250914_203032_0001.webp', type: 'image', title: 'Card Design 02', categories: ['card-designing'], shape: 'square' },
        { src: 'gallery/CARD/Green Modern Copy Of Jimmy Business Card.png', type: 'image', title: 'Card Design 03', categories: ['card-designing'], shape: 'landscape' },
        { src: 'gallery/CARD/SL-100719-23970-78 [Converted]-01.png', type: 'image', title: 'Card Design 04', categories: ['card-designing'], shape: 'landscape' },
        { src: 'gallery/Caro/datepe.pdf', type: 'pdf', title: 'DatePe Carousel', categories: ['carousels'], shape: 'portrait' },
        { src: 'gallery/Caro/Investmint 1.pdf', type: 'pdf', title: 'Investmint Carousel 01', categories: ['carousels'], shape: 'portrait' },
        { src: 'gallery/Caro/Investmint 2.pdf', type: 'pdf', title: 'Investmint Carousel 02', categories: ['carousels'], shape: 'portrait' },
        { src: 'gallery/Caro/Investmint 25.pdf', type: 'pdf', title: 'Investmint Carousel 25', categories: ['carousels'], shape: 'portrait' },
        { src: 'gallery/Caro/Investmint 26.pdf', type: 'pdf', title: 'Investmint Carousel 26', categories: ['carousels'], shape: 'portrait' },
        { src: 'gallery/67e50419ceae768fbcebc54b_1-p-500.webp', type: 'image', title: 'Social Media Post 18', categories: ['social-media-posters'], shape: 'portrait' },
        { src: 'gallery/67e504b4c34467f09b9ddffb_Book Cover Epub-p-500.jpg', type: 'image', title: 'Cover Design 2', categories: ['book-covers'], shape: 'portrait' }
    ];

    let active = 'all';
    let visibleMedia = [];
    let current = 0;

    const $ = (id) => document.getElementById(id);

    const naturalTitleSort = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

    function sortByAspectFlow(list) {
        const rank = {
            portrait: 1, // 9:16 style first
            square: 2,
            landscape: 3 // 16:9 style last
        };

        return [...list].sort((a, b) => {
            const ra = rank[a.shape] || 99;
            const rb = rank[b.shape] || 99;
            if (ra !== rb) return ra - rb;
            return naturalTitleSort.compare(a.title, b.title);
        });
    }

    function sortCategoryItems(categoryKey, list) {
        if (categoryKey === 'social-media-posters' || categoryKey === 'thumbnails') {
            return [...list].sort((a, b) => naturalTitleSort.compare(a.title, b.title));
        }

        return sortByAspectFlow(list);
    }

    function applyCardRatio(cardEl, width, height, forceLandscape = false) {
        if (!cardEl || !width || !height) return;

        const ratio = width / height;
        const finalRatio = forceLandscape ? (16 / 9) : ratio;

        cardEl.style.setProperty('--rg2-ratio', `${finalRatio}`);

        if (finalRatio > 1.3) {
            cardEl.dataset.shape = 'landscape';
        } else if (finalRatio < 0.85) {
            cardEl.dataset.shape = 'portrait';
        } else {
            cardEl.dataset.shape = 'square';
        }
    }

    function setCardRatioByMedia(cardEl, item) {
        const isThumbnailCategory = item.categories.includes('thumbnails');

        // Thumbnails are always 16:9 as requested
        if (isThumbnailCategory) {
            applyCardRatio(cardEl, 16, 9, true);
            return;
        }

        if (item.type === 'pdf') {
            applyCardRatio(cardEl, 9, 16, false);
            return;
        }

        if (item.type === 'image') {
            const probe = new Image();
            probe.onload = () => applyCardRatio(cardEl, probe.naturalWidth || 1, probe.naturalHeight || 1);
            probe.src = encodeURI(item.src);
            return;
        }

        if (item.type === 'video') {
            const videoEl = cardEl.querySelector('video');
            if (!videoEl) return;

            const applyFromVideo = () => {
                applyCardRatio(cardEl, videoEl.videoWidth || 16, videoEl.videoHeight || 9);
            };

            videoEl.addEventListener('loadedmetadata', applyFromVideo, { once: true });
            videoEl.load();
        }
    }

    function card(item) {
        const el = document.createElement('article');
        el.className = 'rg2-card';
        el.dataset.shape = item.shape;

        const cat = label[item.categories[0]] || 'Portfolio';

        let thumb = '';
        if (item.type === 'image') {
            thumb = `<img src="${encodeURI(item.src)}" alt="${item.title}">`;
        } else if (item.type === 'video') {
            const posterAttr = item.poster ? ` poster="${encodeURI(item.poster)}"` : '';
            thumb = `<video preload="metadata" muted playsinline${posterAttr}><source src="${encodeURI(item.src)}"></video>`;
        } else {
            thumb = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:64px;color:#ef4444"><i class="fas fa-file-pdf"></i></div>`;
        }

        el.innerHTML = `
            <button class="rg2-open" type="button">
                <div class="rg2-thumb">${thumb}</div>
                <div class="rg2-body">
                    <span class="rg2-cat">${cat}</span>
                    <h3 class="rg2-title">${item.title}</h3>
                </div>
            </button>
        `;

        el.querySelector('.rg2-open').addEventListener('click', () => {
            if (item.type === 'pdf') {
                window.open(encodeURI(item.src), '_blank');
            } else {
                open(item);
            }
        });

        setCardRatioByMedia(el, item);

        return el;
    }

    function render() {
        const grid = $('rg2Grid');
        const count = $('rg2Count');
        if (!grid) return;

        function renderItems(container, list, addCategoryGap = false) {
            if (!addCategoryGap) {
                list.forEach((item) => container.appendChild(card(item)));
                return;
            }

            const hasLandscape = list.some((item) => item.shape === 'landscape');
            const hasPortrait = list.some((item) => item.shape === 'portrait');
            const hasRealGap = hasPortrait && hasLandscape;
            let gapInserted = false;

            list.forEach((item) => {
                const isFirstLandscape = item.shape === 'landscape' && !gapInserted;

                if (isFirstLandscape && hasRealGap) {
                    const gap = document.createElement('div');
                    gap.className = 'rg2-mini-gap';
                    container.appendChild(gap);
                    gapInserted = true;
                }

                container.appendChild(card(item));
            });
        }

        grid.innerHTML = '';

        if (active === 'all') {
            const ordered = [];

            categoryOrder.forEach((categoryKey) => {
                const groupItems = sortCategoryItems(categoryKey, items.filter((item) => item.categories.includes(categoryKey)));
                if (!groupItems.length) return;

                ordered.push(...groupItems);

                const section = document.createElement('section');
                section.className = 'rg2-group';

                const heading = document.createElement('h2');
                heading.className = 'rg2-group-title';
                heading.textContent = label[categoryKey] || categoryKey;

                const subGrid = document.createElement('div');
                subGrid.className = 'rg2-group-grid';

                const needsGap = categoryKey === 'motion-designing' || categoryKey === 'social-media-posters' || categoryKey === 'package-designing';
                renderItems(subGrid, groupItems, needsGap);

                section.appendChild(heading);
                section.appendChild(subGrid);
                grid.appendChild(section);
            });

            visibleMedia = ordered.filter((x) => x.type !== 'pdf');
            if (count) count.textContent = `${ordered.length} items`;
            return;
        }

        const filtered = sortCategoryItems(active, items.filter((x) => x.categories.includes(active)));
        visibleMedia = filtered.filter((x) => x.type !== 'pdf');
        const needsGap = active === 'motion-designing' || active === 'social-media-posters' || active === 'package-designing';
        renderItems(grid, filtered, needsGap);
        if (count) count.textContent = `${filtered.length} items`;
    }

    function open(item) {
        const lb = $('rg2Lightbox');
        const img = $('rg2Image');
        const vid = $('rg2Video');
        const cap = $('rg2Caption');
        if (!lb || !img || !vid) return;

        current = Math.max(0, visibleMedia.findIndex((x) => decodeURIComponent(x.src) === decodeURIComponent(item.src)));
        const now = visibleMedia[current] || item;

        if (now.type === 'image') {
            img.src = encodeURI(now.src);
            img.classList.remove('hide');
            vid.classList.remove('active');
            vid.pause();
            vid.removeAttribute('src');
            vid.load();
        } else {
            vid.src = encodeURI(now.src);
            vid.classList.add('active');
            img.classList.add('hide');
            vid.play().catch(() => {});
        }

        if (cap) cap.textContent = now.title;
        lb.classList.add('active');
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        const lb = $('rg2Lightbox');
        const vid = $('rg2Video');
        if (!lb || !vid) return;
        lb.classList.remove('active');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        vid.pause();
        vid.removeAttribute('src');
        vid.load();
    }

    function move(step) {
        if (!visibleMedia.length) return;
        current = (current + step + visibleMedia.length) % visibleMedia.length;
        open(visibleMedia[current]);
    }

    function bind() {
        document.querySelectorAll('#rg2Filters button').forEach((btn) => {
            btn.addEventListener('click', () => {
                active = btn.dataset.filter || 'all';
                document.querySelectorAll('#rg2Filters button').forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                render();
            });
        });

        $('rg2Close')?.addEventListener('click', close);
        $('rg2Prev')?.addEventListener('click', () => move(-1));
        $('rg2Next')?.addEventListener('click', () => move(1));
        $('rg2Lightbox')?.addEventListener('click', (e) => { if (e.target.id === 'rg2Lightbox') close(); });

        document.addEventListener('keydown', (e) => {
            const lb = $('rg2Lightbox');
            if (!lb || !lb.classList.contains('active')) return;
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') move(-1);
            if (e.key === 'ArrowRight') move(1);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        bind();
        render();
    });
})();
