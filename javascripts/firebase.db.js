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
        console.log("");
        const testResults = snapshot.val();
        const retArr = [];
        const colName = ['user_id', 'username', 'color_blindness',
            'data', 'colormap', 'task', 'is_high',
            'time', 'correctness', 'answered_val', 'correct_val'];
        retArr.push(colName);

        _.forEach(testResults, (r, uid) => {
            const username = r.username;
            const colorblind = r.color_blindness;
            _.forEach(r.test, (task) => {
                if (task !== undefined) {
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

function saveCSV2() {
    database.ref('/userTest').once('value').then(function (snapshot) {
        console.log("START CSV2");
        const testResults = snapshot.val();
        const otherForm = {};

        _.forEach(testResults, (r, uid) => {
            console.log("START ONE USER");
            otherForm[uid] = {
                'uid': uid,
                'color_blindness': r['color_blindness'],
                'username': r['username'],
                'test': {},
            };

            const test = r['test'];
            otherForm[uid]['test'] = {};

            for (let i = 0; i < test.length; i++) {
                const t = test[i];
                if (t === undefined) {
                    continue;
                }
                const centrality = t['centrality'];
                const dName = t['data_name'];

                const colormap = t['color-map'];
                const isHigh = t['is_high'];
                const time = t['time'];
                const correctness = t['correctness'];
                const correct_value = t['correct_value'];
                const answered_value = t['answered_value'];

                const addedElem = {
                    colormap: colormap,
                    time: time,
                    correctness: correctness,
                    correct_value: correct_value,
                    answered_value: answered_value,
                    isHigh: isHigh,
                };

                const key = dName + '_' + centrality;

                if (otherForm[uid]['test'][key] === undefined) {
                    otherForm[uid]['test'][key] = [];
                }
                otherForm[uid]['test'][key].push(addedElem);
            }
        });
        console.log(otherForm);

        const retArr = [];
        const colName = [
            'user_id', 'username', 'color_blindness', 'data', 'task',
            'single_blue_c', 'single_blue_t',
            'rainbow_c', 'rainbow_t',
            'single_grey_c', 'single_grey_t',
            'inferno_c', 'inferno_t',
            'divergent_red_blue_c', 'divergent_red_blue_t',
            'magma_c', 'magma_t',
            'viridis_c', 'viridis_t',
            'brewer_yellow-green-blue_c', 'brewer_yellow-green-blue_t'
        ];
        retArr.push(colName);

        _.forEach(otherForm, (o) => {
            _.forEach(o['test'], (t, taskName) => {
                if (t !== undefined) {
                    const row = _.fill(new Array(colName.length), undefined);
                    row[0] = o.uid;
                    row[1] = o.username;
                    row[2] = o.color_blindness;
                    const dataname = taskName.split('_')[0];
                    const centrality = taskName.split('_')[1];
                    row[3] = dataname;
                    row[4] = centrality;
                    _.forEach(t, (task) => {
                        const colorMapName = task.colormap;
                        const colorMapIdx = colorMapNames.indexOf(colorMapName);
                        if (colorMapIdx >= 0) {
                            const dataIdx = 5 + colorMapIdx * 2;
                            row[dataIdx] = task.correctness;
                            row[dataIdx + 1] = task.time;
                        }
                    });
                    retArr.push(row);

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
    const csvRows = [];
    for (let i = 0; i < twoDiArray.length; ++i) {
        for (let j = 0; j < twoDiArray[i].length; ++j) {
            twoDiArray[i][j] = '\"' + twoDiArray[i][j] + '\"';  // Handle elements that contain commas
        }
        csvRows.push(twoDiArray[i].join(','));
    }

    let csvString = csvRows.join('\r\n');
    let a = document.createElement('a');
    a.href = 'data:attachment/csv,' + csvString;
    a.target = '_blank';
    a.download = 'test_colormap.csv';

    document.body.appendChild(a);
    a.click();

    return csvString;
    // Optional: Remove <a> from <body> after done
}
