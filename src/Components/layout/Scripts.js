"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Scripts() {

  const pathname = usePathname();
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // const cssFiles = [
    //   "css/plugins/fontawesome-5.css",
    //   "css/vendor/bootstrap.min.css",
    //   "css/vendor/swiper.css",
    //   "css/vendor/metismenu.css",
    //   "css/vendor/fonts.css",
    //   "css/vendor/magnific-popup.css",
    //   "css/style.css",
     
    // ];

    const jsFiles = [
      'js/vendor/jquery.min.js',
      'js/plugins/audio.js',
      'js/vendor/bootstrap.min.js',
      'js/vendor/swiper.js',
      'js/vendor/metisMenu.min.js',
      'js/plugins/magnific-popup.js',
      'js/plugins/contact-form.js',
      'js/plugins/resize-sensor.min.js',
      'js/plugins/theia-sticky-sidebar.min.js',
      'js/main.js',
    ];

    const loadJSFiles = async () => {
      try {
        for (const js of jsFiles) {
          await loadScript(js); // Pass js file path as a string
        }
      } catch (error) {
        console.error("Error loading assets:", error);
      }
    };

    loadJSFiles();

    // Clean up on unmount
    return () => {
      jsFiles.forEach((js) => {
        const script = document.querySelector(`script[src="${js}"]`); // Correct selector
        script && script.parentNode.removeChild(script);
      });
    };
  }, [pathname]);

  return null;
}
