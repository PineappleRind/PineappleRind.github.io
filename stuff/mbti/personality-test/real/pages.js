var pages = [
    {
        title: "",
        description: "Do you know what <b>cognitive functions</b> are?",
        buttons: [
            {
                name: "Yes",
                action: function () {
                    TestWindow.update(pages[5], 5)
                }
            },
            {
                name: "No",
                action: function () {
                    TestWindow.update(pages[1], 1)
                }
            }
        ]
    }, {
        title: "",
        description: `The brain takes in information (perceives) and then helps make decisions (judges). There are 4 different ways to perceive and 4 different ways to judge. These make up the 8 functions.
        <br><br> Your functions can be put into order based on how good you are at using them. The top 4 functions make up the <b>function stack</b>.  The first function in the stack is called the <b>dominant</b> function. The second is called the <b>auxiliary</b> function. Finally, the third and fourth positions in the stack are called the Tertiary and Inferior functions, respectively.`,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[0], 0)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[2], 2)
                }
            }
        ],
    }, { //2
        title: "",
        description: `
    The 4 ways to take in information (perceiving functions) are: 
    <ul><li>Extraverted Sensing (Se)</li><li>Introverted Sensing (Si)</li><li>Extraverted Intuition (Ne)</li><li>Introverted Intuition (Ni)</li></ul><br>
    Remember that the term "extraverted" refers to what occurs outside of your consciousness. This refers to what occurs in the real world. Also keep in mind that it takes place in the present, in real time. When you hear the word "introverted", it refers to what happens within your head. These are your feelings, thoughts, ideas, conceptions, theories, and memories. These are timeless. They can be historical, current, or future in nature.
    `,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[1], 1)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[3], 3)
                }
            }
        ]
    }, {//3
        title: "",
        description: `The 4 ways to make decisions (judging functions) are:
        <ul>
        <li>Extraverted Thinking (Te)</li>
        <li>Extraverted Feeling (Fe)</li>
        <li>Introverted Thinking (Ti)</li>
        <li>Introverted Feeling (Fi)</li>
        </ul>
        `,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[2], 2)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[4], 4)
                }
            }
        ]
    }, {//4
        title: "",
        description: `
        The order of the functions in your stack makes up your <b>personality type</b>.<br>
        Click <a href="#">here</a> for how this works.<br><br>
        Understanding cognitive functions and personality types will help you better understand yourself and others.`,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[3], 3)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[5], 5)
                }
            }
        ]
    }, {//5
        title: "",
        description: `This test will help you determine your <b>dominant</b> and <b>auxiliary</b> cognitive functions, which can then be used to help determine your personality type.
        Attributes of 2 functions will be shown at once, and you will choose one over the other.<br>`,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[4], 4)
                }
            },
            {
                name: "Begin Test",
                action: function () {
                    TestWindow.beginTest()
                }
            }
        ]
    }, {// 6
        title: "Compare:",
        description: function(obj) {
            return TestWindow.getComparisonHTML(obj)
        },
        buttons: [
            {
                name: "Next",
                action: function() {
                    TestWindow.update(pages[6],6)
                }
            }
        ]
    }, 
]

var functions = [{
        name: "Se",
        long: "Extroverted Sensing",
        description: `Se-users are interested in the objective, sensory world and want to completely experience it. They are acutely aware of their senses and the world around them and they derive energy from direct contact with items, people, and situations in their surroundings.`,
        strength: 0,
    }, {
        name: "Si",
        long: "Introverted Sensing",
        description: `Si compares and contrasts new experiences with prior experiences and memories, focusing on the subjective, internal realm of personal experience. Si-users are more likely to observe patterns that repeat themselves and to recognize changes or discrepancies in their surroundings. They trust personal experience and investigate the impact of current events, actions, and outcomes subjectively.`,
        strength: 0
    }, {
        name: "Ne",
        long: "Extroverted Intuition",
        description: `In the world around them, Ne-users can see theoretical possibilities and abstract connections. Ne looks for relationships and patterns between people, things, and events in the objective, external world. The information gathered by Ne-users creates new possibilities and discovers meaning and potential in the universe.`,
        strength: 0
    }, {
        name: "Ni",
        long: "Introverted Intuition",
        description: `Ni-users can sort through conscious and unconscious information, providing them with a mental image or vision of the past and future that is meaningful.`,
        strength: 0
    }, {
        name: "Fe",
        long: "Extroverted Feeling",
        description: `Fe-users have a broad awareness of other people's feelings and values. They have a natural sense of what is acceptable, polite, and will maintain harmony. They strive to keep morale high and are usually well-versed in other people's emotions and moods.`,
        strength: 0
    }, {
        name: "Fi",
        long: "Introverted Feeling",
        description: `Fi involves a thorough understanding of one's own values, morals, ethics, and emotions. Internal harmony is sought by Fi-users, who strive to live in accordance with a very personal set of values that are usually kept very private.`,
        strength: 0
    }, {
        name: "Te",
        long: "Extroverted Thinking",
        description: `When making decisions, Te users rely on empirical evidence and consider cause and effect as well as pros and cons. They like to use logical binary judgments to organize, evaluate, and compare things.`,
        strength: 0
    }, {
        name: "Ti",
        long: "Introverted Thinking",
        description: `Ti is focused on a set of logical, subjective principles and focuses on impersonal analysis, categorization, and evaluation. Ti users try to remove themselves from situations in order to see different factors, angles, and leverage points that may be useful.`,
        strength: 0
    }
]