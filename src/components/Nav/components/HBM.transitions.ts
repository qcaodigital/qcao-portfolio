interface variantType {
    initial: object;
    animate: object;
    // exit?: object;
    [key: string]: object;
}

interface transitionsType {
    background: variantType;
}

export const transitions: transitionsType = {
    background: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
            },
        },
    },
};
