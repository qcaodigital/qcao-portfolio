const defaultTranslate: number = window.innerHeight * 0.75;
const defaultDuration: number = 0.75;

interface variants {
    top: {};
    animate: {};
    bottom: {};
    [key: string]: {};
}

interface transitionsType {
    stagger: variants;
    transUp: variants;
}

export const transitions: transitionsType = {
    stagger: {
        top: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        animate: {
            transition: {
                staggerChildren: 0.05,
            },
        },
        bottom: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: 1,
            },
        },
    },
    transUp: {
        top: {
            y: defaultTranslate,
            opacity: 0,
            transition: {
                duration: defaultDuration,
                ease: "easeIn",
            },
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: defaultDuration,
                ease: "easeOut",
            },
        },
        bottom: {
            y: defaultTranslate * -1,
            opacity: 0,
            transition: {
                duration: defaultDuration,
                ease: "easeIn",
            },
        },
    },
};
