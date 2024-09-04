"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (message) => {
      return toast.success(message);  
}

export default function Form({ children, action }) {
    const ref = useRef();
    return (
        <form ref={ref} action={(e) => { action(e); ref.current.reset(); }}>
            {children}
        </form>
    )
}