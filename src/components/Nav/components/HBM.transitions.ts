interface variantType {
    initial?: object;
    animate?: object;
    exit?: object;
    [key: string]: any;
}

interface transitionsType {
    background: variantType;
    text: variantType;
}

export const transitions: transitionsType = {
    background: {
        animate: {
            transition: {
                staggerChildren: 0.05,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
    },
    text: {
        initial: {
            opacity: 0,
            y: "75%",
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
