let courseName = "JavaScript"; //global variable

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    console.log(detail);  // occurs an error.
}

practiceScope();
