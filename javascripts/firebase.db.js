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
        const colName = ['username', 'login_time', 'color_blindness',
            'tutorial_1_time', 'tutorial_1_correctness',
            'tutorial_2_time', 'tutorial_2_correctness',
            'tutorial_3_time', 'tutorial_3_correctness'];
        for (let i = 1; i <= 96; i++) {
            colName.push('task_' + i + '_centrality');
            colName.push('task_' + i + '_color-map');
            colName.push('task_' + i + '_data_name');
            colName.push('task_' + i + '_is_high');
            colName.push('task_' + i + '_time');
            colName.push('task_' + i + '_correctness');
        }
        retArr.push(colName);

        _.forEach(testResults, (r) => {

            const row = [];
            console.log(r);
            row.push(r.username);
            row.push(r.login_time);
            row.push(r.color_blindness);
            _.forEach(r.tutorial, (t, i) => {
                if (t === undefined) {
                    console.log(i);
                    console.log(t);
                    row.push(null);
                    row.push(null);
                } else {
                    row.push(t.time);
                    row.push(t.correctness);
                }
            });
            _.forEach(r.test, (t, i) => {
                if (t === undefined) {
                    console.log(i);
                    console.log(t);
                    row.push(null);
                    row.push(null);
                    row.push(null);
                    row.push(null);
                    row.push(null);
                    row.push(null);
                } else {
                    row.push(t.centrality);
                    row.push(t['color-map']);
                    row.push(t.data_name);
                    row.push(t.is_high);
                    row.push(t.time);
                    row.push(t.correctness);
                }
            });
            retArr.push(row)

        });

        const csv = arrayToCSV(retArr);
        console.log(csv)
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