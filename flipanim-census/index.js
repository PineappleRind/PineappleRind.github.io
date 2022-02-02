/* Hey there! I've left little comments all over this code 
to explain what things do. That's about it.... */
// Although this is all pretty simple...so there's not a lot to write xD


// The data for the questions
var Questions = [
    { // Question 1
        title: "What's your age?",
        description: "Enter in the field below. If you don't want to answer, you don't have to.",
        actionItems: `<input type="number" oninput="Census.recordData('age',this.value)">`
    }, {//Question 2
        title: "What's your gender?",
        description: "Select from the options below. Again, if you don't want to answer, you don't have to :)",
        actionItems: `<select oninput="Census.recordData('gender',this.value)"><option value="male">Male</option><option value="female">Female</option><option value="other">Other (non-binary)</option></select>`
    }, {//Question 3
        title: "How many followers do you have?",
        description: "This doesn't have to be an exact number! For example, if you have 291 followers, you can round to 300. What's preferable however is if you don't round, this is just for anonymity",
        actionItems: `<input type="number" oninput="Census.recordData('followers',this.value)">`
    }, {//Question 4
        title: "Other comments",
        description: "Is there anything else you want to say? It's fine if you leave this blank!",
        actionItems: `<input type="text" oninput="Census.recordData('comments',this.value);">`
    }
]
var form = document.getElementById('form'), // Form element 
    container = document.querySelector('.glass')//Container!
var thankYou = `
        <h1>Thank you!</h1>
        <p>Your answers have been submitted :D<br> The results will be announced when there are enough submissions, no more than a few weeks. I'll post an anim with the results when they are ready! Thank you for participating in this year's census ^^`
var Census = { // I put this stuff inside an object just because it looks good, lol
    current: 0, // Current question
    question: function (obj) {
        if (!obj) return Census.submit(Census.data) // If the question is nonexistent, end it all!
        Census.current++
        let html = `<h1>${obj.title}</h1><br><p>${obj.description}</p><br>${obj.actionItems}<br><button onclick="Census.question(Questions[${Census.current}])">Next</button>`
        Census.switch(html) // Switch the HTML of the page with the new, hot, freshly generated HTML!
    }, 
    
    switch: function (html) {
        container.classList.add('transitioning') // Hide page...
        setTimeout(function(){
            container.innerHTML = html // Switch html...
            container.classList.remove('transitioning') // Tada! :D
        },500)
    }, submit: function(data) {
        
        // So i dont really know how to send the form other than 
        // making an invisible form and populating it

        // but it works... so... yeah
        // Put the users age in the invisible form:
        form.children[0][0].value = data.age
        //Put gender...
        form.children[0][1].value = data.gender
        // And put follower count!
        form.children[0][2].value = data.followers
        form.children[1][0].innerHTML = `<h1>Ready?</h1>
<b>Age</b> ${data.age}
<b>Gender</b> ${data.gender}
<b>Followers</b> ${data.followers}
<b>Comments</b> ${data.comments}
<br>
<button onclick="Census.switch(thankYou)" type="submit">Submit</button>`
    },
    recordData: function (key, value) {
       return Census.data[key] = value // Just records the data.. 
    }, data: {} // Empty data object, will get filled as the user completes the thing!
}
