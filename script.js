function calculateAmt(inquiry, withdrawal, deposit) {
    var availableBal = 35000;
    var a = inquiry(availableBal);
    var b = deposit(availableBal);
    var c = withdrawal(availableBal);
    if (a) {

        availableBal = inquiry(availableBal);
    }
    else if (b) {
        availableBal = availableBal - withdrawal;
        if (withdrawal > availableBal) {
            alert("You have insufficient funds");
        }
    }
    else {
        availableBal = availableBal + deposit;
    }
    return availableBal;
}
function atmMachine() {
    var NAME = prompt("Enter your name");
    var passTry = 3;
    var BANKNAME = parseInt(prompt("Dear " + NAME + " What is your bank name?\n 1. GTB\n2.Access\n3.Stanbic-IBTC\n4.Fidelity\n5.Sterling\n6.Skye\n7.Firstbank\n8.Others"));
    var YES_NO = 2;
    var passwordEntered = parseInt(prompt("Dear " + NAME + ", Enter your 4 digits PIN"));
    var correct_pass = (/^[0-9]{4}$/);
    var min_bal = 1000;

    function checkPassword(password) { //to check if the password is correct or not    
        if (correct_pass.test(passwordEntered)) {
            optionMenu();
        } else {
            passTry = 3;
            while (!(correct_pass.test(passwordEntered))) {
                alert("You don't a valid PIN, input the correct one now");
                alert("You have only " + passTry + " chances to try");
                passTry = passTry - 1;

                if (passTry === 0) {
                    alert("Maximum tries exceeded, please contact your bank to retrieve your ATM card");
                    exit();
                    break;
                }
                passwordEntered = parseInt(prompt("Dear " + NAME + ", Enter your 4 digits PIN"));
            } optionMenu();
        }
    } checkPassword(passwordEntered);

    // menu selection
    function optionMenu() {
        var SELECT_account = parseInt(prompt("Which type of account do you have?\n 1. Savings\n  2. Current\n   3. Credit"));
        if (SELECT_account < 4) {
            var atm_functions = parseInt(prompt("Hello, customer, what can we do for you today ? \n 1. Inquiry \n 2. withdrawal \n 3. Deposit\n4. Exit"));
            if (atm_functions == 1) {
                inquiry();
            } else if (atm_functions == 2) {
                withdrawal();
            } else if (atm_functions == 3) {
                deposit();
            } else if (atm_functions == 4) {
                exit();
            }
            else {
                alert("Please make a valid selection");
            }
        }

    }

    // to calculate the balance for before, during and after withdrawal and deposit
    function calculateAmt(inquiry, withdrawal, deposit) {
        var availableBal = 35000;
        var a = inquiry(availableBal);
        var b = deposit(availableBal);
        var c = withdrawal(availableBal);
        if (a) {

            availableBal = inquiry(availableBal);
        }
        else if (b) {
            availableBal = availableBal - withdrawal;
            if (withdrawal > availableBal) {
                alert("You have insufficient funds");
            }
        }
        else {
            availableBal = availableBal + deposit;
        }
        return availableBal;
    }
    function inquiry(availableBal) {
        availableBal = calculateAmt(availableBal);
        alert("Your avaialable balance is " + availableBal);
        toContinue();
    }
    function deposit(availableBal) {
        var deposit = parseInt(prompt("How much do you want to deposit?"));

        if (isNaN(deposit) || deposit === " ") {
            alert('Error: please enter a number!');
            deposit();
        }
        deposit = calculateAmt(availableBal);
        alert("You have successfully deposited " + deposit + " ...You now have " + availableBal);
        toContinue(availableBal);
    }
    function withdrawal(availableBal) {
        var withdrawal = parseInt(prompt("How much do you want to withdraw ? \t The minimum amount you can withdraw is 1000"));

        if (isNaN(withdrawal) || withdrawal === " ") {
            alert('Error: please enter a number!');
            withdrawal(availableBal);
        }
        withdrawal = calculateAmt(availableBal);
        alert("transaction is successful");
        alert("Your remaining balance is " + availableBal);
        toContinue();
    }
    function toContinue() {
        var YES_NO = parseInt(prompt("Do you want to perform another transaction?\n 1.Yes \n 2. No"));
        if (YES_NO === 2) {
            exit();
        }
        else {
            return optionMenu();
        }
    }
    function exit() {
        alert("Thank you for patronising our ATM machine");
        return false;
    }
} atmMachine();
var username,
    correct_pass = (/^[0-9]{4}$/),
    passTry = 3,
    currentBalance = 35000;

// Input a username
function atmMachineUsername() {
    username = prompt("Enter your name");
    if (username !== "" && username !== null) {
        atmMachinePassword();
    } else {
        atmMachineUsername();
    }
}
// Input a valid password
function atmMachinePassword() {
    var pswEntry = parseInt(prompt("Dear " + username + ", enter your 4 digit PIN"));
    checkPassword(pswEntry);
}
// Verify Password meets requirements
function checkPassword(userInput) {
    if (correct_pass.test(userInput)) {
        selectAccountType();
    } else {
        while (!(correct_pass.test(userInput))) {
            if (passTry === 1) {
                alert("Incorrect PIN.");
                alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support.");
                exit();
                break;
            } else {
                passTry -= 1;
                alert("Incorrect PIN. Please try again.");
                alert("You have " + passTry + " chance/s to try");
                atmMachinePassword();
            }
        }
    }
}
// Select Which account type to use
function selectAccountType() {
    var accountType = parseInt(prompt("Which type of account do you have? \n 1. Savings \n 2. Current \n 3. Credit"));
    if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
        selectFunction();
    } else {
        alert("Please make a valid selection");
        selectAccountType();
    }
}
// Select what the user wishes to do
function selectFunction() {
    var atmFunctions = parseInt(prompt("Hello " + username + ", what can we do for you today? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
    if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
        switch (atmFunctions) {
            case 1:
                inquiry();
                break;
            case 2:
                withdrawal();
                break;
            case 3:
                deposit();
                break;
            case 4:
                exit();
                break;
            default:
                alert("Please make a valid selection");
                selectFunction();
        }
    } else {
        alert("Please make a valid selection");
        selectFunction();
    }
}
// Inquiry
function inquiry() {
    alert("Your current balance is $" + currentBalance);
    toContinue();
}
// Deposit
function deposit() {
    var depositAmount = parseInt(prompt("How much do you want to deposit?"));
    if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
        currentBalance += depositAmount;
        alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
        toContinue();
    } else {
        alert("Error: please enter a number!");
        deposit();
    }
}
// Withdrawal
function withdrawal() {
    var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
    if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
        if (withdrawalAmount >= 1000) {
            if (withdrawalAmount <= currentBalance) {
                currentBalance -= withdrawalAmount;
                alert("Transaction successful!");
                alert("Your remaining balance is $" + currentBalance);
                toContinue();
            } else {
                alert("You do not have sufficient funds!");
                withdrawal();
            }
        } else {
            alert("You must withdraw at least $1000");
            withdrawal();
        }
    } else {
        alert("Error: please enter a number!");
        withdrawal();
    }
}
// Does the user wish to continue using the ATM
function toContinue() {
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
    if (yesOrNo !== "" && yesOrNo !== null) {
        if (yesOrNo === 2) {
            exit();
        }
        else {
            selectAccountType();
        }
    } else {
        alert("Please make a valid selection");
        toContinue();
    }
}
// Exit the ATM
function exit() {
    alert("Thank you for patronising our ATM machine");
    // To simulate a real ATM, get ready for next user
    // atmMachineUsername();
}