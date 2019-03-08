const app = new Vue({
    el: '#app',
    data: {
        loginButtonLocked: false,
        isSigned: false,
        user: {
            uid: undefined,
            uname: undefined,
            loginTime: undefined,
            test: {
                'color_blind': false,
                'tutorial_test': [],
                'real_test': [],
            },
        },
        pageNum: 0,
        pageInfo: pages[0],
    },

    methods: {
        login: () => {
            console.log('Login button is clicked.');
            const inputName = $('input#input-name').val();
            const isNameable = !_.isUndefined(inputName) || inputName.length >= 1;
            if (this.loginButtonLocked) {
                console.log('Login button is locked.');
            } else if (!isNameable) {
                console.log('There are not user name in input area.');
                alert("Enter Your Name.");
            } else {
                this.loginButtonLocked = true;
                loginModule.login();
            }
        },
        setUserInfo: (id, name) => {
            app.$data.user.uid = id;
            app.$data.user.uname = name;
            app.$data.user.loginTime = Date.now();
            app.$data.isSigned = true;
        },
        printUserInfo: () => {
            console.log({
                uid: app.$data.user.uid,
                uname: app.$data.user.uname,
                loginTime: app.$data.user.loginTime,
                test: app.$data.user.test
            });
        },
        backPage: () => {
            if (app.$data.pageInfo.type !== 'actual_test') {
                app.$data.pageNum -= 1;
            }
            app.changePage();
        },
        nextPage: () => {
            if (app.$data.pageInfo.type !== 'actual_test') {
                app.$data.pageNum += 1;
            } else if (app.$data.pageInfo.taskNum >= 95) {
                app.$data.pageNum += 1;
            }
            app.changePage();
        },
        changePage: () => {
            clearTimeout(intervalFunc);
            console.log("");
            console.log("Page " + app.$data.pageNum);
            if (app.$data.pageInfo.type === 'actual_test' && app.$data.pageInfo.taskNum < 95) {
                const isHighValue = Math.floor(Math.random() * 10) < 6;
                app.$data.pageInfo = {
                    title: "ACTUAL TEST",
                    type: "actual_test",
                    isHighValue: isHighValue,
                    taskNum: app.$data.pageInfo.taskNum + 1,
                    contentHTML: `
                        <div class="sub-title">
                            ACTUAL TEST
                        </div>
                        <br>
                        <div class="description">
                            <br>Given graph, select the node with <b>${(isHighValue ? 'highest' : 'lowest')}</b>value according to the color legend shown with it.
                            <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>${(isHighValue ? '높은' : '낮은' )}</b> 값을 가진 노드를 선택합니다.
                            <br>
                            <br>You can select nodes as answers by double-clicking on them. A Selected answer will have a black circle around the node. 
                            <br>노드를 두 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
                        </div>
                        <div class="render-area">
                            <div class="button start-button">Start</div>
                            <svg id="network"></svg>
                        </div>
                    `
                };
            } else {
                app.printUserInfo();
                app.$data.pageInfo = pages[app.$data.pageNum];
            }
            app.pageInteraction(app.$data.pageInfo.type);
        },
        pageInteraction: (type) => {
            if (type === 'animation_deg') {
                app.animation('image/degree/network_diagram-degree_', 10);
            } else if (type === 'task0') {
                console.log('TASK 1/3');
                app.task('karate', 'deg_log', 'single_greens', true, 0, true);
            } else if (type === 'task1') {
                console.log('TASK 2/3');
                app.task('karate', 'cls', 'viridis', true, 1, true);
            } else if (type === 'task2') {
                app.task('karate', 'btw', 'plasma', true, 2, false);
                console.log('TASK 3/3');
            } else if (type === 'actual_test') {
                const isHighValue = app.$data.pageInfo.isHighValue;
                const taskNum = app.$data.pageInfo.taskNum;
                const dName = dataNames[taskNum % 3];
                console.log(centralityNames);
                const centralityName = centralityNames[parseInt(taskNum / 3) % 4];
                const colorMapName = colorMapNames[parseInt(taskNum / 12)];
                console.log(taskNum);
                app.task(dName, centralityName, colorMapName, false, taskNum, isHighValue);
            } else if (type === 'save') {
                writeUserTestData(app.$data.user);
            }
        },
        blindTest: () => {
            console.log('Blind Test');
            const correctVals = [15, 5, 75, 8, 48, 7];
            let color_blind = false;

            for (let i = 1; i <= 6; i++) {
                const val = parseInt($('#blind_test_' + i).val());
                const correct_val = correctVals[i - 1];
                if (val === undefined || val === '' || isNaN(val)) {
                    alert("Please enter a number in every input window.");
                    return;
                }
                color_blind = val === correct_val ? color_blind : true;
            }
            const addedText = color_blind ? "" : "NOT ";
            app.$data.user.test['color_blind'] = color_blind;
            alert("You are " + addedText + "color-blind.");
        },
        task: (data, centrality, colormap, isTutorial, taskNum, isHighValue) => {
            $('svg#network').empty();
            $('div.render-area').prepend('<div class="button start-button">Start</div>');
            setTimeout(function () {
                $('.start-button').click(function () {
                    console.log("click");
                    $(this).remove();
                    drawGraph(data, centrality, colormap, isTutorial, taskNum, isHighValue)
                });
            }, 1000);
        }
    }
});

let intervalFunc;