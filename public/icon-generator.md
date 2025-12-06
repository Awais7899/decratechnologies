# Icon & Favicon Setup Guide

## Required Icon Files

To fix the favicon/icon issue in search results, you need to create the following files in the `public/` directory:

### 1. favicon.ico

- **Size:** 16x16, 32x32, 48x48 (multi-size ICO file)
- **Location:** `public/favicon.ico`
- **Purpose:** Main favicon for browsers

### 2. icon-16x16.png

- **Size:** 16x16 pixels
- **Location:** `public/icon-16x16.png`
- **Purpose:** Small icon for browser tabs

### 3. icon-32x32.png

- **Size:** 32x32 pixels
- **Location:** `public/icon-32x32.png`
- **Purpose:** Standard favicon size

### 4. icon-192x192.png

- **Size:** 192x192 pixels
- **Location:** `public/icon-192x192.png`
- **Purpose:** Android home screen icon

### 5. icon-512x512.png

- **Size:** 512x512 pixels
- **Location:** `public/icon-512x512.png`
- **Purpose:** High-resolution icon for PWA

### 6. apple-touch-icon.png

- **Size:** 180x180 pixels
- **Location:** `public/apple-touch-icon.png`
- **Purpose:** iOS home screen icon

## How to Create These Files

### Option 1: Online Favicon Generator (Recommended)

1. Go to https://realfavicongenerator.net/
2. Upload your logo image (logo.jpg from `/assets/images/logo.jpg`)
3. Configure settings:
   - iOS: Enable Apple touch icon
   - Android: Enable Chrome icon
   - Windows: Enable tile
   - Safari: Enable pinned tab
4. Generate and download the package
5. Extract all files to the `public/` directory

### Option 2: Manual Creation

1. Use an image editor (Photoshop, GIMP, etc.)
2. Create each size from your logo
3. Save as PNG (except favicon.ico which should be ICO format)
4. Place all files in `public/` directory

### Option 3: Use Your Existing Logo

If you have `logo.jpg`, you can:

1. Convert it to PNG format
2. Resize to each required size
3. Save with the correct names in `public/` directory

## Quick Command (if you have ImageMagick installed)

```bash
# Convert logo.jpg to various sizes
convert public/assets/images/logo.jpg -resize 16x16 public/icon-16x16.png
convert public/assets/images/logo.jpg -resize 32x32 public/icon-32x32.png
convert public/assets/images/logo.jpg -resize 192x192 public/icon-192x192.png
convert public/assets/images/logo.jpg -resize 512x512 public/icon-512x512.png
convert public/assets/images/logo.jpg -resize 180x180 public/apple-touch-icon.png
```

## Verification

After adding the files:

1. Clear browser cache
2. Visit your website
3. Check browser tab for favicon
4. Test in Google Search Console
5. Use https://realfavicongenerator.net/favicon_checker to verify

## Notes

- All icons should use your brand logo/colors
- Icons should be square (1:1 aspect ratio)
- Use transparent background for PNG files
- favicon.ico should have multiple sizes embedded
