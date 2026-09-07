'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    };

    const handleLinkHover = () => {
      cursor.classList.add('scale-150');
      follower.classList.add('scale-[2]');
    };

    const handleLinkLeave = () => {
      cursor.classList.remove('scale-150');
      follower.classList.remove('scale-[2]');
    };

    // GSAP context to prevent "Invalid scope" errors
    const ctx = gsap.context(() => {
      // Animate cursor
      const animate = () => {
        // Cursor follows mouse directly
        const cursorSpeed = 0.2;
        cursorX += (mouseX - cursorX) * cursorSpeed;
        cursorY += (mouseY - cursorY) * cursorSpeed;

        // Follower has lag
        const followerSpeed = 0.1;
        followerX += (mouseX - followerX) * followerSpeed;
        followerY += (mouseY - followerY) * followerSpeed;

        gsap.set(cursor, {
          x: cursorX,
          y: cursorY,
        });

        gsap.set(follower, {
          x: followerX,
          y: followerY,
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    });

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const links = document.querySelectorAll('a, button, [data-cursor-hover]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      ctx.revert();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full bg-primary mix-blend-difference pointer-events-none z-[999] opacity-0 transition-all duration-200 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className="fixed w-10 h-10 rounded-full border-2 border-primary-light pointer-events-none z-[999] opacity-0 transition-all duration-400 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
    </>
  );
}
