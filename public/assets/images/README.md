# Images Folder

This folder contains all image assets for the Decra Technologies website.

## Structure

- `logo.png` - Main company logo (used in navigation and footer)
- Other images can be added here as needed

## Usage

Images in this folder can be referenced in your components using:

```jsx
<img src="/assets/images/logo.png" alt="Description" />
```

Or with Next.js Image component:

```jsx
import Image from "next/image";
<Image
  src="/assets/images/logo.png"
  alt="Description"
  width={100}
  height={100}
/>;
```

## Supported Formats

- PNG
- JPG/JPEG
- SVG
- WebP
