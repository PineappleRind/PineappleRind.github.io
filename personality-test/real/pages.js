
var pages = [
    {
        title: "",
        description: "Do you know what <b>cognitive functions</b> are?",
        buttons: [
            {
                name: "Yes",
                action: function () {
                    TestWindow.update(pages[5],5)
                }
            },
            {
                name: "No",
                action: function () {
                    TestWindow.update(pages[1],1)
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
                    TestWindow.update(pages[0],0)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[2],2)
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
                    TestWindow.update(pages[1],1)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[3],3)
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
                    TestWindow.update(pages[2],2)
                }
            },
            {
                name: "Next",
                action: function(){
                    TestWindow.update(pages[4],4)
                }
            }
        ]
    }, {//4
        title: "",
        description: `
        The order of the functions in your stack makes up your <b>personality type</b>.<br>
        Click <a onclick="TestWindow.update(pages[3],3)" href="#">here </a>for how this works.<br><br>
        Understanding cognitive functions and personality types will help you better understand yourself and others.`,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[3],3)
                }
            },
            {
                name: "Next",
                action: function () {
                    TestWindow.update(pages[5],5)
                }
            }
        ]
    }, {//4
        title: "",
        description: `This test will help you determine your <b>dominant</b> and <b>auxiliary</b> cognitive functions, which can help determine your personality type.`,
        buttons: [
            {
                name: "Previous",
                action: function () {
                    TestWindow.update(pages[3],3)
                }
            },
            {
                name: "Begin Test",
                action: function () {
                    alert('This test is still under construction =)')
                    //TestWindow.update(pages[5],5)
                }
            }
        ]
    }
]
