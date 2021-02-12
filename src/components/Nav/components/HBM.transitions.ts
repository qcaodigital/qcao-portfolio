interface variantType {
    initial?: object;
    animate?: object;
    exit?: object;
    [key: string]: any;
}

interface transitionsType {
    background: variantType;
    container: variantType;
    text: variantType;
}

export const transitions: transitionsType = {
    background: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.75,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                delay: 0.65,
                duration: 0.5,
            },
        },
    },
    container: {
        animate: {
            transition: {
                delayChildren: 0.65,
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.05,
            },
        },
    },
    text: {
        initial: {
            opacity: 0,
            y: "100%",
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: "75%",
            transition: {
                duration: 0.2,
            },
        },
    },
};
