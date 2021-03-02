interface variants {
    animate?: any;
    exit?: any;
    initial?: any;
    [key: string]: any;
}

interface transitionsType {
    [key: string]: variants;
}

export const transitions: transitionsType = {
    subHeader: {
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
            },
        },
        initial: {
            opacity: 0,
            x: 50,
        },
    },
    skillset: {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        tech: {
            animate: {
                opacity: 1,
                transition: {
                    duration: 0.75,
                },
            },
            initial: {
                opacity: 0,
            },
        },
    },
};
