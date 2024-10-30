import localFont from "next/font/local";

export const centuryGothic = localFont({
    src: [
        {
            path: "./fonts/centuryGothic.ttf",
            weight: '100 400'
        },
        {
            path: "./fonts/centuryGothic_bold.ttf",
            weight: '500 800'
        }
    ],
    variable: "--font-century-gothic",
    weight: "100 800",
});

export const konamiCode = [ 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a' ].reverse()
export const konamiCodeAlt = [ 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'B', 'A' ].reverse()