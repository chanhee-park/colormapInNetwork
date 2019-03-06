function writeUserTestData(user) {
    console.log(user);
    database.ref('userTest/' + user.uid).set({
        username: user.uname,
        login_time: user.loginTime,
        color_blindness: user.test.color_blind,
        tutorial: user.test.tutorial_test,
        test: user.test.real_test,
    });
}
