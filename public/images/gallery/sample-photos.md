# Gallery Photos Setup Guide

## Adding Your Working Photos

1. **Prepare Your Photos:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 1200x800px or higher
   - File size: Under 2MB each for optimal loading

2. **File Naming Convention:**
   ```
   work-1.jpg         (Main working photo)
   work-2.jpg         (Business meeting)
   work-3.jpg         (Office/presentation)
   work-4.jpg         (Team collaboration)
   work-5.jpg         (Conference/event)
   work-6.jpg         (Product demo)
   etc...
   ```

3. **Photo Categories to Include:**
   - **Business Meetings:** Client meetings, partnership negotiations
   - **Presentations:** Conference talks, product demos, pitches
   - **Team Work:** Collaborative sessions, strategy planning
   - **Office Life:** Daily work environment, workspace
   - **Events:** Launch events, networking, industry conferences
   - **Leadership:** Team building, mentoring, interviews

4. **Photo Information:**
   Update the photo arrays in:
   - `src/pages/gallery.js` (main gallery)
   - `src/pages/about.js` (about page gallery)

   ```javascript
   {
     src: "/images/gallery/your-photo.jpg",
     alt: "Descriptive alt text",
     title: "Photo Title",
     description: "Brief description of the photo context"
   }
   ```

5. **Optimization Tips:**
   - Use Next.js Image component for automatic optimization
   - Photos will be automatically optimized for different screen sizes
   - Consider using WebP format for better compression

## Current Placeholder Structure

The gallery is currently set up with 10 placeholder photos:
- work-1.jpg through work-10.jpg
- Each with sample titles and descriptions

Replace these with your actual working photos to showcase your professional journey!

## Gallery Features

✅ **Apple-inspired design** with blur effects and smooth animations
✅ **Responsive grid** that adapts to different screen sizes  
✅ **Modal viewer** with full-screen photo viewing
✅ **Navigation** between photos with arrow keys or buttons
✅ **Photo information** overlay with titles and descriptions
✅ **Accessibility** support with proper alt text and keyboard navigation