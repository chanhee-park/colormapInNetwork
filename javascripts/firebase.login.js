const $unameInputField = $('input#input-name');
const loginModule = new function () {
    this.login = function () {
        const uname = $('input#input-name').val();
        const uage = $('input#input-age').val();
        const ugender = $('input#input-gender').val();

        console.log(uname, uage, ugender);

        if (uname === '') {
            alert("Please Enter Your Name.");
            return;
        } else if (uage === '') {
            alert("Please Enter Your AGE.");
            return;
        } else if (ugender === '') {
            alert("Please Enter Your Gender.");
            return;
        }

        alert("Hello " + uname);

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
        console.log(user);
        if (user) {
            // User is signed in.
            const uid = user.uid;
            const uname = $('input#input-name').val();
            const uage = $('input#input-age').val();
            const ugender = $('input#input-gender').val();

            console.log(uname, uage, ugender);
            console.log(uid + ' is signed in.');
            app.setUserInfo(uid, uname, uage, ugender);
            app.printUserInfo();
            app.$data.isSigned = true;

            if (uname === '_save_csv') {
                saveCSV();
            } else if (uname === '_save_csv_2') {
                saveCSV2();
            }
        } else {
            // User is signed out.
            console.log("Signed out.");
            app.loginButtonLocked = false;
            app.isSigned = false;
        }
    });

    return this;
};
