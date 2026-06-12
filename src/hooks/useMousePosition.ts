import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 0.5,
      y: (e.clientY / window.innerHeight - 0.5) * 0.3,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return mouse;
}
