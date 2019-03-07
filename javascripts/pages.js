const pages = [
    {
        title: "Tutorial",
        type: 'desc',
        contentHTML: `
    <div class="sub-title">Instructions</div>
    <div class="description">
        Todays user study is about “Colormaps in Network Visualization/Graph” (Node link diagram). This is a research study.
        We want to understand how to best show network data with respect to color scales/schemes used for representing the nodes.
        We will present some visualizations (node link diagram) of different data sets with links between those nodes.
    </div>
    <div class="description">
    오늘의 사용자 연구는 "네트워크 시각화/그래프에서 컬러맵별 사용성 평가"에 관한 것입니다. 
    네트워크 데이터를 가장 잘 표시하는 색상 척도를 알고 싶습니다. 
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
    <div class="description">
    You can interact with the visualization. <b>Zoom</b> by using the mouse wheel. <b>Pan</b> by pressing the left mouse button down and dragging. <b>Select and deselect</b> nodes as <b>answers</b> by double-clicking on them. <b>Select and deselect</b> node as <b>highlights</b> by clicking on them once. <b>Move</b> nodes by dragging them (sometimes this can be useful to tell where its links go). <b>Mouse-over</b> nodes to highlight them. Here is an example of a selected node as an answer and a highlighted/selected node respectively.
    </div>
    <div class="description">
    이 시각화와는 인터랙션을 포함합니다. 마우스 휠을 사용하여 <b>줌</b> 할 수 있습니다. 마우스 왼쪽 버튼을 누른 다음 끌어서 그래프를 <b>이동</b>할 수 있습니다. 노드를 두 번 클릭하여 노드를 <b>응답으로 선택하거나 선택 취소</b>할 수 있습니다. 노드를 한 번 클릭하여 <b>강조 표시하거나 취소</b>할 수 있습니다. 노드를 끌어 노드를 <b>이동</b>할 수 있습니다.노드의 이동은 때로 링크의 위치를 파악하는 데 유용할 수 있습니다. 강조 표시를 위해서 <b>마우스를 올리</b>세요. 다음은 응답으로 강조 표시된 노드와 선택된 노드의 예시입니다.
    </div>
    <br>

    <div class="flex-zone">
        <div class="empty-flex-1"></div>
        <div class="image-wrapper flex-4">
            <img id='diagram-img' src="image/eg_select.png" alt="degree_animation" height="150">

        </div>
        <div class="image-wrapper flex-4">
             <img id='diagram-img' src="image/eg_highlight.png" alt="degree_animation" height="150">
        </div>
        <div class="empty-flex-1"></div>
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
            width: 320px;
            height: 350px;
            padding: 10px;
        }

        .test_image-wrapper img {
            width: 300px;
            display: inline-block;
        }

        .test_image-wrapper input {
            width: 300px;
            font-size: 18px;
            height: 30px;
            line-height: 30px;
            text-align: right;
        }

        #task-complete-button {
            display: inline-block;
            width: 150px;
            margin: 15px 20px;
        }

        .button {
            position: static;
        }

        .button.back-page-button {
            float: left;
        }

        .button.next-page-button {
            float: right;
        }
    </style>
    <div class="description">This study examines the usability of colors in network visualizations. Therefore, before
        the experiment, you need a color-blind test.
    </div>
    <div class="description">이 연구는 네트워크 시각화에서 색상의 사용성을 검토합니다. 따라서 실험 전에 색맹 검사를 받아야 합니다.
    </div>
    <br>
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
    <div class="sub-title">
        Task
    </div>
    <br>
    <div class="description">
        <br>Given graph, select the node with <b>highest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by double-clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 두 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
    </div>
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>`,
    },
    {
        title: "Training Question (2/3)",
        type: "task1",
        contentHTML: `
    <div class="sub-title">
        Task
    </div>
    <br>
    <div class="description">
        <br>Given graph, select the node with <b>highest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by double-clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 두 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
    </div>
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>`,
    },
    {
        title: "Training Question (3/3)",
        type: "task2",
        contentHTML: `
    <div class="sub-title">
        Task
    </div>
    <br>
    <div class="description">
        <br>Given graph, select the node with <b>lowest</b> value according to the color legend shown with it.
        <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>낮은</b> 값을 가진 노드를 선택합니다.
        <br>
        <br>You can select nodes as answers by double-clicking on them. A Selected answer will have a black circle around the node. 
        <br>노드를 두 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
    </div>
    <div class="render-area">
        <div class="button start-button">Start</div>
        <svg id="network"></svg>
    </div>`,
    },
    {
        title: "ACTUAL TEST",
        type: "actual_test",
        taskNum: 0,
        isHighValue: true,
        contentHTML: `
            <div class="sub-title">
                ACTUAL TEST
            </div>
            <br>
            <div class="description">
                <br>Given graph, select the node with <b>highest</b>value according to the color legend shown with it.
                <br>주어진 그래프를 사용하여 표시된 색상 범례에 따라 가장 <b>높은</b> 값을 가진 노드를 선택합니다.
                <br>
                <br>You can select nodes as answers by double-clicking on them. A Selected answer will have a black circle around the node. 
                <br>노드를 두 번 클릭하여 해당 노드를 응답으로 선택할 수 있습니다. 선택한 답변에는 노드 주위에 검은색 원이 있습니다.
            </div>
            <div class="render-area">
                <div class="button start-button">Start</div>
                <svg id="network"></svg>
            </div>
        `
    },
    {
        title: "SAVE TEST DATA",
        type: "save",
        contentHTML: ``,
    },
];
