import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/waffle-house-wordmark.png"),
  );
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F4C400",
          color: "#121008",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(18,16,8,0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(18,16,8,0.12) 2px, transparent 2px)",
            backgroundSize: "48px 32px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 56px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            <span>Robinhood Chain · Pons</span>
            <span>Meme · Open 24h</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only supports <img> */}
            <img src={src} width={640} height={207} alt="Waffle House" />
            <div
              style={{
                fontSize: 28,
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              Private meme ticker
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span>50% kitchen · 50% floor</span>
            <span>Burn 25 · Liq 25 · Pons 50</span>
            <span>Always open</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
