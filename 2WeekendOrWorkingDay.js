function solve(input){
    let day = input[0];
    switch (day) {
        case "Monday":    
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": console.log("Working day"); // the last valid case 
            break;
        case "Saturday":
        case "Sunday":console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
solve(["Monday"]);
solve(["Sunday"]);
solve(["April"])
