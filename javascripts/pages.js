const pages = [
    {
        title: "Tutorial",
        type: 'desc',
        contentHTML: `
    <div class="sub-title">Instructions</div>
    <div class="description">
        Todays user study is about “Colormaps in Network Visualization/Graph” (Node link diagram). This is a research study.
        We want to understand how to best show network data with respect to color scales/schemes used for representing the nodes.
        This experiment involves 36 tasks. The estimated time for this experiment is about 10 minutes.
        We will present some visualizations (node link diagram) of different data sets with links between those nodes.
    </div>
    <div class="description">
    오늘의 사용자 연구는 "네트워크 시각화/그래프에서 컬러맵별 사용성 평가"에 관한 것입니다. 
    이 실험은 네트워크 데이터를 가장 잘 표시하는 색상 척도가 무엇인지를 알아내고자 설계되었습니다.
    이 실험은 36개의 작업을 포함합니다. 이 실험의 예상 소요 시간은 10분 내외 입니다. 
    우선, 네트워크 시각화가 무엇인지 설명하기 위해 여러 데이터 세트에 대한 몇 가지 노드 링크 다이어그램을 보여 드리겠습니다.
    </div>
    <br>
    <div class="flex-zone">
        <div class="empty-flex-1"></div>
        <div class="image-wrapper flex-4">
            <img id='diagram-img' src="image/network_diagram.png" alt="degree_animation" height="300">
        </div>
        <div class="image-wrapper flex-4">
            <img id='diagram-img' src="image/dolphins.prop=page.color=inferno.png" alt="degree_animation" height="300">
        </div>
        <div class="empty-flex-1"></div>
    </div>
    <br>
    <div class="description">
    This type of visualization shows how things are interconnected through the use of nodes / vertices and link lines to represent their connections and help illuminate the type of relationships between a group of entities.
    </div>
    <div class="description">
    이러한 시각화는 노드(점)와 링크(선)를 사용하여 연결 상태를 나타내어 개체 그룹 간의 관계를 밝히는 데 도움이 됩니다.    
    </div>
    <br>
    <br>
    <div class="sub-title">Interaction</div>
    <div class="description">You can interact with the visualization. <b>Select</b> nodes as <b>answers</b> by clicking on them once.
    <br> There can be several correct answers. If you select only one of the correct answer nodes, the answer will be recorded correctly.
    </div>
    <div class="description">노드를 한 번 클릭하여 노드를 <b>응답으로 선택</b>할 수 있습니다.
    <br> 정답은 여러개 일 수 있습니다. 정답 노드 중 하나만 응답으로 선택하면 정답으로 기록됩니다.
    </div>
    <br>

    <div class="flex-zone">
        <div class="image-wrapper flex-4">
            <img id='diagram-img' src="image/eg_select.png" alt="degree_animation" height="200">
    </div>
    <br>
    `
    },
    {
        title: "Color-blind Test",
        type: 'color-blind',
        contentHTML: `
    <style>
        .test_image-wrapper {
            display: inline-block;
            width: 250px;
            height: 270px;
            padding: 10px;
        }

        .test_image-wrapper img {
            width: 250px;
            display: inline-block;
        }

        .test_image-wrapper input {
            width: 250px;
            font-size: 18px;
            height: 30px;
            line-height: 30px;
            text-align: right;
        }
    </style>
    <div class="description">This study examines the usability of colors in network visualizations. Therefore, before
        the experiment, you need a color-blind test.
    </div>
    <div class="description">이 연구는 네트워크 시각화에서 색상의 사용성을 검토합니다. 따라서 실험 전에 색맹 검사를 받아야 합니다.
    </div>
    <div class="description">Look at the picture below and enter what number you see.</div>
    <div class="description">아래 사진을 보고 보이는 숫자를 입력해 주세요.</div>
    <br>
    <div class="flex-zone">
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_1' src="image/color-blind/1.gif" alt="color blind test">
            <input id="blind_test_1">
        </div>
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_2' src="image/color-blind/2.gif" alt="color blind test">
            <input id="blind_test_2">
        </div>
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_3' src="image/color-blind/3.gif" alt="color blind test">
            <input id="blind_test_3">
        </div>
        <div class="empty-flex-1"></div>
    </div>
    <br>
    <div class="flex-zone">
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_4' src="image/color-blind/4.gif" alt="color blind test">
            <input id="blind_test_4">
        </div>
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_5' src="image/color-blind/5.gif" alt="color blind test">
            <input id="blind_test_5">
        </div>
        <div class="empty-flex-1"></div>
        <div class="test_image-wrapper flex-2">
            <img id='color-blind-img_6' src="image/color-blind/6.gif" alt="color blind test">
            <input id="blind_test_6">
        </div>
        <div class="empty-flex-1"></div>
    </div>
    <br>
    <br>`,
    },
    {
        title: "Training Question (1/3)",
        type: "task0",
        contentHTML: `
<div class="flex-wrapper">
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>
    <div class="description right">
        <div class="sub-title">
            Training Question 1/3 
        </div>
        <br>
        <div class="sub-title">
            Highest Value / 높은 값 찾기
        </div>
        <br>Given graph, select the node with <b>highest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 한 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
        <br>
        <svg id="legend"></svg>    
    </div>
</div> 
    `,
    },
    {
        title: "Training Question (2/3)",
        type: "task1",
        contentHTML: `
<div class="flex-wrapper">
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>
    <br>
    <div class="description right">
        <div class="sub-title">
            Training Question 2/3 
        </div>
        <br>        
        <div class="sub-title">
            Highest Value / 높은 값 찾기
        </div>
        <br>Given graph, select the node with <b>highest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 한 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
        <br>
        <svg id="legend"></svg>
    </div>
</div> 
`,
    },
    {
        title: "Training Question (3/3)",
        type: "task2",
        contentHTML: `
<div class="flex-wrapper">
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>
    <div class="description right">
        <div class="sub-title">
            Training Question 3/3 
        </div>
        <br>
        <div class="sub-title">
            Lowest Value / 낮은 값 찾기
        </div>
        <br>Given graph, select the node with <b>lowest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>낮은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 한 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
        <br>
        <svg id="legend"></svg>
    </div>
</div> 
`,
    },
    {
        title: "ACTUAL TEST",
        type: "actual_test",
        taskNum: 0,
        isHighValue: true,
        contentHTML: `
<div class="flex-wrapper">
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>
    <div class="description right">
        <div class="sub-title">
            Task 1/36
        </div>
        <br>
        <div class="sub-title">
            Highest Value / 높은 값 찾기
        </div>
        <br>Given graph, select the node with <b>highest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 한 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
        <br>
        <svg id="legend"></svg>
    </div>
</div>     
`
    },
    {
        title: "SAVE TEST DATA",
        type: "save",
        contentHTML: `
        <div class='thankyou'>
            User study end here. Thank you so much for you time.
            <br><br>실험이 종료되었습니다. 참여해주셔서 감사합니다.
        </div>`,
    },
];

const random_page_idx = function () {
    let arr = fill_n_to_m(0, 35);
    arr = shuffle(arr);
    return arr;
};

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function fill_n_to_m(n, m) {
    const arr = [];
    for (let i = n; i <= m; i++) {
        arr.push(i);
    }
    return arr;
}

let task_random_sequence = random_page_idx();
console.log("ACTUAL TASK SEQUENCE:", task_random_sequence);
