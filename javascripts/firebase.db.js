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

function saveCSV() {
    database.ref('/userTest').once('value').then(function (snapshot) {
        const testResults = snapshot.val();
        const retArr = [];
        const colName = ['user_id', 'username', 'color_blindness',
            'data', 'colormap', 'task', 'is_high',
            'time', 'correctness', 'answered_val', 'correct_val'];

        for (let i = 1; i <= 96; i++) {

        }
        retArr.push(colName);

        _.forEach(testResults, (r, uid) => {
            const username = r.username;
            const colorblind = r.color_blindness;

            _.forEach(r.test, (task) => {
                if(task !== undefined){
                    const row = [uid, username, colorblind];
                    row.push(task['data_name']);
                    row.push(task['color-map']);
                    row.push(task['centrality']);
                    row.push(task['is_high']);
                    row.push(task['time']);
                    row.push(task['correctness']);
                    row.push(task['answered_value']);
                    row.push(task['correct_value']);
                    retArr.push(row)
                }
            });
        });

        const csv = arrayToCSV(retArr);
        console.log(csv);
    });
}


function arrayToCSV(twoDiArray) {
    //  Modified from: http://stackoverflow.com/questions/17836273/
    //  export-javascript-data-to-csv-file-without-server-interaction
    var csvRows = [];
    for (var i = 0; i < twoDiArray.length; ++i) {
        for (var j = 0; j < twoDiArray[i].length; ++j) {
            twoDiArray[i][j] = '\"' + twoDiArray[i][j] + '\"';  // Handle elements that contain commas
        }
        csvRows.push(twoDiArray[i].join(','));
    }

    var csvString = csvRows.join('\r\n');
    var a = document.createElement('a');
    a.href = 'data:attachment/csv,' + csvString;
    a.target = '_blank';
    a.download = 'test_colormap.csv';

    document.body.appendChild(a);
    a.click();

    return csvString;
    // Optional: Remove <a> from <body> after done
}
