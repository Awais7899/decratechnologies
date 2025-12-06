import { ImageResponse } from "next/og";

// This generates a favicon dynamically
// For best results, create actual favicon.ico file in public/ directory
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #FF7A00 0%, #FF9A33 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  );
}
