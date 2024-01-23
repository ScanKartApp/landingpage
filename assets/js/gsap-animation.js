gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

function tg_title_animation() {

    var tg_var = jQuery('.tg-heading-subheading');
    if (!tg_var.length) {
        return;
    }
    const quotes = document.querySelectorAll(".tg-heading-subheading .tg-element-title");

    quotes.forEach(quote => {

        //Reset if needed
        if (quote.animation) {
            quote.animation.progress(1).kill();
            quote.split.revert();
        }

        var getclass = quote.closest('.tg-heading-subheading').className;
        var animation = getclass.split('animation-');
        if (animation[1] == "style4") return

        quote.split = new SplitText(quote, {
            type: "lines,words,chars",
            linesClass: "split-line"
        });
        gsap.set(quote, { perspective: 400 });

        if (animation[1] == "style1") {
            gsap.set(quote.split.chars, {
                opacity: 0,
                y: "90%",
                rotateX: "-40deg"
            });
        }
        if (animation[1] == "style2") {
            gsap.set(quote.split.chars, {
                opacity: 0,
                x: "50"
            });
        }
        if (animation[1] == "style3") {
            gsap.set(quote.split.chars, {
                opacity: 0,
            });
        }
        quote.animation = gsap.to(quote.split.chars, {
            scrollTrigger: {
                trigger: quote,
                start: "top 90%",
            },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: .02
        });
    });
}
ScrollTrigger.addEventListener("refresh", tg_title_animation);

let splitTitleLines = gsap.utils.toArray(".title-animation");
splitTitleLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
        },
    });

    const itemSplitted = new SplitText(splitTextLine, {
        type: "words, lines",
    });
    gsap.set(splitTextLine, {
        perspective: 400,
    });
    itemSplitted.split({
        type: "lines",
    });
    tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
    });
});

