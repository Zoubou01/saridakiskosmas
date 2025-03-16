import type React from "react";
import "@/app/globals.css";

export const metadata = {
    title: "Kosmas Saridakis Insurance - Protecting What Matters Most",
    description: "Comprehensive insurance solutions tailored to your unique needs. We're committed to providing peace of mind through reliable coverage and exceptional service.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head />
            <body className="min-h-screen font-sans antialiased">{children}</body>
        </html>
    );
}
