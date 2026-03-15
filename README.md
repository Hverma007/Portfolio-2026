# Harsh Verma - Creative Portfolio Website

A modern, professional portfolio website showcasing graphic design, video editing, and web development work.

## 🌟 Features

### Main Website (index.html)
- **Hero Section**: Eye-catching introduction with profile picture and call-to-action buttons
- **About Section**: Detailed professional bio and experience
- **Services Section**: Three main services with descriptions
  - Graphic Design
  - Video Editing
  - Web Development
- **Portfolio Section**: Featured projects with masonry grid layout
  - Tab-based filtering (All, Graphic Design, Video Editing)
  - Hover effects with gradient overlays
  - Direct links to complete gallery
- **Contact Section**: WhatsApp integration for easy communication
- **Footer**: Comprehensive footer with links, stats, and social media

### Gallery Page (portfolio-gallery.html)
- **Complete Portfolio Showcase**: All creative work in one place
- **Smart Filtering**: Filter by All, Images, Videos, or Documents
- **Lightbox Viewer**: Full-screen image and video viewing
- **Content Includes**:
  - 20+ Graphic Designs
  - 9 Video Projects
  - 3+ PDF Documents
- **Keyboard Navigation**: Arrow keys and ESC support
- **Responsive Grid**: Masonry layout that adapts to all screen sizes

## 🎨 Design Features

### Visual Effects
- Gradient color scheme with modern palette
- Glassmorphism navigation bar
- Smooth animations and transitions
- Staggered fade-in effects
- Hover interactions with 3D transforms
- Floating background elements
- Ripple effects on buttons
- Parallax-style animations

### Dark Theme
- Toggle button in navigation
- Full dark mode support
- Persistent theme selection (localStorage)
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized for all screen sizes

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Main portfolio page
├── portfolio-gallery.html     # Complete gallery page
├── style.css                  # Main styles
├── gallery-style.css          # Gallery-specific styles
├── script.js                  # Main JavaScript
├── gallery-script.js          # Gallery functionality
├── pp.jpg                     # Profile picture
├── 1.png                      # Sample image
├── Potrait Vector-05.png      # Sample image
└── gallery/                   # Gallery folder
    ├── *.jpg, *.png          # Design images
    ├── *.mp4, *.mov          # Video files
    └── CMS INVESTMINT/       # PDF documents
        └── *.pdf

```

## 🚀 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla JS for interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Poppins typography

## 📱 Key Sections

### Home Page Sections
1. **Navigation** - Sticky navbar with theme toggle
2. **Hero** - Introduction and CTA buttons
3. **About** - Professional background
4. **Services** - Offered services with icons
5. **Portfolio** - Featured projects showcase
6. **Contact** - WhatsApp integration
7. **Footer** - Links, stats, and social media

### Gallery Page Features
1. **Filter System** - Sort by type (All/Images/Videos/PDFs)
2. **Lightbox** - Full-screen viewing with navigation
3. **Keyboard Controls** - Arrow keys and ESC
4. **PDF Support** - Opens PDFs in new tab
5. **Video Playback** - In-lightbox video player

## 🎯 Portfolio Content

### Graphic Design
- Logo designs and brand identities
- T-shirt and apparel designs
- Book covers and publishing materials
- Social media content
- Vector illustrations
- Marketing materials

### Video Editing
- Educational content
- Psychology-themed videos
- Motion graphics
- Social media videos
- Promotional content

### Documents
- Investmint design series
- Client presentations
- Design portfolios

## 💡 Customization

### Update Personal Information
1. Edit `index.html`:
   - Change name in hero section
   - Update about text
   - Modify services descriptions
   - Update contact WhatsApp number
   - Change email address in footer

2. Edit `portfolio-gallery.html`:
   - Add/remove gallery items
   - Update project titles
   - Change descriptions

### Update Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

### Add New Projects
In `portfolio-gallery.html`, add new items:
```html
<div class="gallery-item" data-type="image">
    <div class="gallery-item-inner">
        <img src="gallery/your-image.jpg" alt="Description">
        <div class="gallery-overlay">
            <span class="item-type">Category</span>
            <h3>Project Title</h3>
            <button class="view-btn" onclick="openLightbox('gallery/your-image.jpg', 'image')">
                <i class="fas fa-search-plus"></i>
            </button>
        </div>
    </div>
</div>
```

## 📞 Contact Information

- **WhatsApp**: +91 9817123456
- **Email**: harshverma.creative@gmail.com
- **Location**: India

## 🔗 Social Media

Update social media links in footer:
- Facebook
- Instagram
- LinkedIn
- Behance
- GitHub

## 📈 Stats

- **Experience**: 3+ Years
- **Projects Completed**: 50+
- **Happy Clients**: 30+
- **Satisfaction Rate**: 100%

## 🎨 Color Palette

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Dark**: #1e293b
- **Light**: #f8fafc

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

© 2025 Harsh Verma. All rights reserved.

## 🚀 Future Enhancements

- [ ] Blog section
- [ ] Testimonials from clients
- [ ] Project case studies
- [ ] Contact form with backend
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Analytics integration

## 💻 Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. Navigate to `http://localhost:8000`

## 🎓 Credits

- **Design & Development**: Harsh Verma
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter, Poppins)
- **AI Assistant**: GitHub Copilot

---

**Made with ❤️ and dedication to excellence**
