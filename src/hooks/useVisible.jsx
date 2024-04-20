import { useState, useEffect } from "react";

export default function useVisible(initialState = 'hidden', scrollPosition = 300){
  const [ visibility, setVisibility ] = useState(initialState)

  // Muestra o esconde el FAB segun la posicion del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > scrollPosition) {
        setVisibility('visible')
      } else {
        setVisibility('hidden')
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [])
  
  return visibility
}