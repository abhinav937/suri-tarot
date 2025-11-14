# Logo Setup Guide

This guide explains what logo files you need to add for the favicon and homepage logo.

## 📁 Required Logo Files

Place these files in the `assets/images/` folder:

### 1. **logo.png** (Main Logo)
- **Purpose**: Displayed behind the title on the homepage
- **Recommended Size**: 400x400px to 600x600px (square)
- **Format**: PNG with transparent background (preferred)
- **Usage**: Hero section background logo
- **Current Styling**: 
  - Opacity: 15% (subtle background effect)
  - Blur: 2px (soft, watermarked look)
  - Positioned behind the title

### 2. **logo-favicon.png** (Favicon - PNG)
- **Purpose**: Browser tab icon (modern browsers)
- **Recommended Size**: 32x32px or 64x64px
- **Format**: PNG
- **Usage**: Primary favicon for modern browsers

### 3. **favicon.ico** (Favicon - ICO)
- **Purpose**: Browser tab icon (older browsers)
- **Recommended Size**: 16x16, 32x32, 48x48px (multi-size ICO file)
- **Format**: ICO
- **Usage**: Fallback favicon for older browsers

### 4. **apple-touch-icon.png** (iOS Icon)
- **Purpose**: iOS home screen icon when website is saved
- **Recommended Size**: 180x180px
- **Format**: PNG
- **Usage**: Apple devices home screen icon

## 🎨 Design Tips

### For Homepage Logo (logo.png):
- **Transparent Background**: Use PNG with transparency
- **Simple Design**: Keep it clean since it's displayed at low opacity
- **High Contrast**: Should work well on gradient background
- **Square Format**: Works best for centered positioning
- **Brand Colors**: Use your brand colors (#d4a574, #8b6f47) or complementary colors

### For Favicon:
- **Simple & Recognizable**: Should be clear at small sizes (16x16px)
- **High Contrast**: Needs to stand out in browser tabs
- **Single Color or Two Colors**: Too many details get lost at small sizes
- **Square Format**: Required for favicons

## 📝 Current Implementation

### Homepage Logo
- **Location**: Behind the hero title
- **Styling**: 
  - Subtle watermark effect (15% opacity)
  - Soft blur (2px)
  - Centered behind title
  - Responsive sizing (200px desktop, 150px tablet, 120px mobile)

### Favicon
- **Multiple Formats**: PNG and ICO for browser compatibility
- **Fallback Chain**: PNG → ICO → Default

## 🛠️ Creating Your Logos

### Option 1: Online Tools
- [Favicon.io](https://favicon.io/) - Generate favicons from images
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Comprehensive favicon generator
- [Canva](https://www.canva.com/) - Design logos

### Option 2: Image Editing Software
- **Photoshop/GIMP**: Create and export at required sizes
- **Figma**: Design and export assets
- **Illustrator**: Vector to PNG conversion

### Option 3: Convert Existing Logo
If you have a logo already:
1. Resize to required dimensions
2. Export as PNG (transparent background for main logo)
3. Create favicon versions at smaller sizes
4. Use online tool to convert PNG to ICO format

## ✅ Quick Checklist

- [ ] Create `logo.png` (400-600px square, transparent background)
- [ ] Create `logo-favicon.png` (32x32px or 64x64px)
- [ ] Create `favicon.ico` (multi-size ICO file)
- [ ] Create `apple-touch-icon.png` (180x180px)
- [ ] Place all files in `assets/images/` folder
- [ ] Test favicon in browser
- [ ] Test homepage logo display
- [ ] Test on mobile devices

## 🧪 Testing

### Test Favicon:
1. Open website in browser
2. Check browser tab for favicon
3. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
4. Test on mobile browsers

### Test Homepage Logo:
1. Open homepage
2. Check logo appears behind title
3. Verify opacity and blur effect
4. Test on different screen sizes
5. Ensure title text is readable over logo

## 💡 Customization

### Adjust Logo Opacity
In `assets/css/styles.css`, line ~152:
```css
.hero-logo {
    opacity: 0.15; /* Change this value (0.0 to 1.0) */
}
```

### Adjust Logo Blur
In `assets/css/styles.css`, line ~153:
```css
.hero-logo {
    filter: blur(2px); /* Change blur amount */
}
```

### Adjust Logo Size
In `assets/css/styles.css`:
- Desktop: Line ~150: `max-width: 200px;`
- Tablet: Line ~630: `max-width: 150px;`
- Mobile: Line ~652: `max-width: 120px;`

### Remove Blur Effect
Remove or comment out the `filter: blur(2px);` line in CSS.

## 📞 Support

If you need help:
- Check that file paths are correct
- Verify file formats are correct
- Clear browser cache if favicon doesn't update
- Check browser console for image loading errors

---

**Last Updated**: November 2024
**Status**: ✅ Logo Structure Ready - Add Your Logo Files

