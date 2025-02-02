import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export function animation() {
    gsap.from(".header-block", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".header",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".header-link", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".header",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".header__navigation-items", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".header",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".header__navigation-burger", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".header",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".header-telephone", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".header",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".intro", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".intro",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".intro__main-title", {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".intro",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".intro-text", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".intro",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".proccess-title", {
        opacity: 0,
        y: 100,  
        duration: 1,  
        ease: "power2.out", 
        scrollTrigger: {
            trigger: ".proccess-title",
            start: "top 80%", 
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".proccess__block-item", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".proccess__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".duties__block-item", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".duties__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".reason-title", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".reason__block",
            start: "top 100%",
            end: "bottom 150%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".reason__block-item", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".reason__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".reason__block-number", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".reason__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".reason__block-title", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".reason__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".reason__block-text", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".reason__block",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".footer__about", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".footer__about",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none"
        }
    });

    gsap.from(".footer__contact", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".footer__contact",
            start: "top 80%",
            end: "bottom 100%",
            scrub: true,
            toggleActions: "play none none none",
            onUpdate: (self) => {
                const direction = self.direction;

                if (navigator.userAgent.match(/iPhone|iPad|iPod/i) && direction === "up") {
                    self.scrollTrigger.kill();
                }
            },
        }
    });
}