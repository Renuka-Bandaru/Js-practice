let courseName = "JavaScript"; //global variable
function practiceScope() {
    let topic = "Variables";  // Function scope
    console.log(courseName + " - " + topic);
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    console.log(detail);  // occurs an error.
}
practiceScope();
