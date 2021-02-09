function transitionsFunc(
    viewport: { rank: number; label: string },
    allViewports: any
) {
    const transitions = {
        text: {
            initial: {
                opacity: 0,
            },
            load: {
                opacity: 1,
                transition: {
                    delay: 1.5,
                },
            },
            animate: {
                opacity: 0,
                transition: {
                    duration: 0.2,
                },
            },
        },
        textbox: {
            initial: {
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
                originY: "bottom",
            },
            load: {
                scaleX: [1, 1, 1, 1],
                scaleY: [0.1, 0.1, 1, 1],
                opacity: 1,
                transition: {
                    delay: 0.75,
                },
            },
            animate: {
                scaleX: [1, 0.2, 0.2, 0.2],
                scaleY: [1, 1, 1, 0],
                originY: "bottom",
                transition: {
                    duration: 0.3,
                    when: "afterChildren",
                },
            },
        },
        line: {
            initial: {
                height: 0,
            },
            load: {
                height: viewport.rank < allViewports.lg.rank ? "12rem" : "22vh",
                transition: {
                    easing: "linear",
                },
            },
            animate: {
                height: 0,
                transition: {
                    duration: 0.15,
                    delay: 0.75,
                },
            },
        },
        circle: {
            initial: {
                opacity: 0,
            },
            load: {
                opacity: 1,
                transition: {
                    delay: 0.3,
                },
            },
            animate: {
                opacity: 0,
                transition: {
                    delay: 1,
                },
            },
        },
    };
    return transitions;
}

export default transitionsFunc;
