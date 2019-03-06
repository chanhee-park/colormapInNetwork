const $unameInputField = $('input#input-name');
const loginModule = new function () {
    this.login = function () {
        FirebaseAuth.signInAnonymously().catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            app.loginButtonLocked = false;
            alert("Something is wrong. T ___ T\n" + errorCode + '\n' + errorMessage);
        });
    };

    this.logout = function () {
        FirebaseAuth.signOut().catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Something is wrong. T ___ T\n" + errorCode + '\n' + errorMessage);
        });
    };

    FirebaseAuth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            const uid = user.uid;
            const uname = $('input#input-name').val();
            alert(uname + " is signed in.");
            console.log(uid + ' is signed in.');
            app.setUserInfo(uid, uname);
            app.printUserInfo();
            app.isSigned = true;
        } else {
            // User is signed out.
            console.log("Signed out.");
            app.loginButtonLocked = false;
            app.isSigned = false;
        }
    });

    return this;
};
