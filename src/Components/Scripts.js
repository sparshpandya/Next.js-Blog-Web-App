"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

const Scripts = () => {
    // getting the current path
    const pathName = usePathname();

    // loading the scripts on every route change
    useEffect(() => {
        const loadScript = (src) => {
            // creating a new script element
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);

            // cleaning up the scripts
            return () => {
                document.body.removeChild(script);
            };
        };

        // array containing all the script src's
        const scripts = [
            '/js/vendor/jquery.min.js',
            '/js/plugins/audio.js',
            '/js/vendor/bootstrap.min.js',
            '/js/vendor/swiper.js',
            '/js/vendor/metisMenu.min.js',
            '/js/plugins/audio.js',
            '/js/plugins/magnific-popup.js',
            '/js/plugins/contact-form.js',
            '/js/plugins/resize-sensor.min.js',
            '/js/plugins/theia-sticky-sidebar.min.js',
            '/js/main.js',
        ];

        // passing all the src's to loadScript function
        const cleanUpFunctions = scripts.map(loadScript);

        // calling the cleanup on all scripts
        return () => {
            cleanUpFunctions.forEach((cleanUp) => cleanUp());
        };
    }, [pathName]);
}

export default Scripts
