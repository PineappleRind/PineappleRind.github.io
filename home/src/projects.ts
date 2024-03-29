import { Projects } from "./types";

export const projects: Projects = [
    {
        name: "Bezier Visualizer",
        description:
            "A site to visualize manipulable, animated Cubic Bezier curves.",
        img: "bezier-visualizer/img/thumb",
        link: "/bezier-visualizer",
        type: "site",
    },
    {
        name: "Radium",
        description:
            'A fresh-looking theme for VSCode. Almost radioactive.</p><p class="small">Made with a friend',
        img: "https://radium-theme.github.io/example",
        link: "https://radium-theme.github.io",
        type: "other",
    },
    {
        name: "Space Phenomena",
        description: "Album",
        img: "/music/space-phenomena/spacephenomena.thumb",
        link: "/music/space-phenomena",
        type: "music",
        metadata: { tracks: 8, date: "2023.08.07", time: 32 },
        class: "new",
    },
    {
        name: "Multidimensional Interchange",
        description: "Single",
        img: "/music/multidimensional-interchange/mi.thumb",
        type: "music",
        link: "/music/multidimensional-interchange",
        metadata: {
            tracks: 1,
            date: "2022.12.20",
            time: 4,
        },
    },
    {
        name: "Transport",
        description: "Album",
        img: "/music/transport/imgs/collageTransport.thumb",
        link: "/music/transport",
        type: "music",
        metadata: { tracks: 12, date: "2023.02.08", time: 41 },
    },
    {
        name: "Berries",
        description: "EP",
        img: "/music/berries/berries.thumb",
        type: "music",
        link: "/music/berries",
        metadata: { tracks: 5, date: "2022.08.02", time: 17 },
    },
    {
        name: "Social Credit Quiz",
        description:
            "Inspired by the Internet meme, this quiz tests your loyalty to the CCP",
        link: "/social-credit",
        type: "site",
        img: "/social-credit/pop",
    },
    {
        name: "Wiggle Text",
        description:
            "Make a string of text that appears to be in the shape of a wiggle",
        link: "/wiggle",
        type: "site",
        img: "./imgs/wiggle",
    },
    {
        name: "TimeUtils",
        description: "Create Discord timestamps and get your IANA timezone",
        link: "/timeutils",
        type: "site",
        img: "./timeutils/thumb",
    },
];
