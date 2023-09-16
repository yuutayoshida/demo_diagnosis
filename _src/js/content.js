;(function ($) {
    //整形後の設問オブジェクト
    let reformatQuestionData = {};
    //診断対象のジャンルリスト
    //[bottle.mainFlower,subFlower]が入る
    let questionGenreList = [];
    //タイプごとの表示設問数
    const questionLimitOfGenre = [2, 3, 2];
    //診断対象のタイプリスト
    const questionTypeList = ['motivation', 'carefree', 'ephemeral'];
    //途中結果記録用リスト
    let resultTypeList = [];

    //現在表示中のクイズのタイプ番号
    let currentGenreIndex = 0;
    //現在表示中のクイズのカウント
    let currentQuestionIndex = 0;

    //表示処理中のボタンイベント制御
    let isDisplayProcessing = true;

    //回答記録用リスト
    //横軸：genre 縦軸: type
    let resultCount = [
        [0, 0, 0], //bottle
        [0, 0, 0], //mainFlower
        [0, 0, 0], //subFlower
        //motivation-carefre--ephemeral
    ]

    //設問エリアの親要素
    let $diagnose_parent;
    let $diagnose;

    //表示中の途中結果画面
    let $pageOverlay;
    //表示中の設問画面
    let $displayQuestion;

    //結果ページに渡すパタメータ
    let totalResultParam;
    let totalResultTypeParam;
    let totalResultTextParam;

    /** レスポンシブ判断 */
    window.mediaQueryList = window.matchMedia("(min-width:768px)");

    document.addEventListener('DOMContentLoaded', function () {
        const $content = $('#shindan_content');
        // 診断ページ以外では処理終了
        if (!$content[0]) {
            return;
        }
        init();
    });

    function init() {
        $diagnose_parent = $('#diagnose');
        $diagnose = $('#diagnose_area');
        setQuestion(setBtnEvent);
    }

    /**
     * 設問をランダムで決定し、DOMを生成する
     * getQuestion → preload → createQuestionDOM
     */
    function setQuestion(callback) {
        const questionData = window.DEMO_APP.questionData;
        questionGenreList = Object.keys(questionData);
        const questionGenreLen = questionGenreList.length;
        let targetGenreLen;
        let images = [
            "qNum/qNum-1.png",
            "qNum/qNum-2.png",
            "qNum/qNum-3.png",
            "qNum/qNum-4.png",
            "qNum/qNum-5.png",
            "qNum/qNum-6.png",
            "qNum/qNum-7.png",
            "qNum/sp-qNum-1.png",
            "qNum/sp-qNum-2.png",
            "qNum/sp-qNum-3.png",
            "qNum/sp-qNum-4.png",
            "qNum/sp-qNum-5.png",
            "qNum/sp-qNum-6.png",
            "qNum/sp-qNum-7.png",
        ];
        const getQuestion = function () {
            //ターゲットの表示クイズ数
            let targetQuestionLimit = 0;
            //ターゲットの名前
            let targetGenreName;
            for (let i = 0; i < questionGenreLen; i++) {
                targetGenreName = questionGenreList[i];
                targetGenreLen = Object.keys(questionData[targetGenreName]).length;
                targetQuestionLimit = questionLimitOfGenre[i];
                //ランダムで選ばれた番号を保存するリスト
                let questionIndexList = [];
                //reformatQuestionDataに追加する設問データを一時保存する
                let questionDataOfType = [];
                for (let j = 0; j < targetQuestionLimit; j++) {
                    let num = Math.floor(Math.random() * targetGenreLen);
                    while (questionIndexList.includes(num)) {
                        num = Math.floor(Math.random() * targetGenreLen);
                    }
                    let questionTitle = questionData[targetGenreName][num].title;
                    let questionTitleImage = questionData[targetGenreName][num].title_img;
                    let questionTitleImagePC = 'qText/' + questionTitleImage;
                    let questionTitleImageSP = 'qText/sp-' + questionTitleImage;
                    images.push(questionTitleImagePC,questionTitleImageSP);
                    let questionAnswers = questionData[targetGenreName][num].answers;
                    for (let k = 0; k < questionAnswers.length; k++) {
                        let questionAnswerImage = questionAnswers[k].answer_img;
                        let questionAnswerImagePC = 'qBtn/' + questionAnswerImage;
                        let questionAnswerImageSP = 'qBtn/sp-' + questionAnswerImage;
                        images.push(questionAnswerImagePC,questionAnswerImageSP);
                    }
                    let question = {'title': questionTitle,'title_img': questionTitleImage, 'answers': questionAnswers};
                    questionDataOfType.push(question);
                    questionIndexList.push(num);
                }
                reformatQuestionData[targetGenreName] = questionDataOfType;
            }
            preload();
        }

        const preload = function () {
            images.forEach((img) => {
                const $img = document.createElement('img');
                $img.src = `/demo_diagnosis/images/content/${img}`;
            })

            createQuestionDOM();
        }

        const createQuestionDOM = function () {
            let html = '';
            let targetGenreName;
            let targetQuestionLimit = 0;
            let targetQuiz;
            //通し番号
            let quizNum = 0;
            for (let i = 0; i < questionGenreLen; i++) {
                targetGenreName = questionGenreList[i];
                html += `<ul class="diagnose_list" id="${targetGenreName}">`;
                targetQuestionLimit = Object.keys(reformatQuestionData[targetGenreName]).length;
                for (let j = 0; j < targetQuestionLimit; j++) {
                    quizNum++;
                    const style = quizNum === 1 ? '' : 'display: none;';
                    html += `
                        <li class="question" style="${style}" id="question-${i}-${j}">
                            <p class="question_numbering">
                                 <picture>
                                    <source media="(max-width:767px)" srcset="/demo_diagnosis/images/content/qNum/sp-qNum-${quizNum}.png" sizes="100vw">
                                    <img src="/demo_diagnosis/images/content/qNum/qNum-${quizNum}.png" alt="Q.${quizNum}">
                                  </picture>
                            </p>`;

                    targetQuiz = reformatQuestionData[targetGenreName][j];
                    let questionTitle = targetQuiz.title;
                    let questionTitleImage = targetQuiz.title_img;
                    html += `
                        <p class="question_text">
                          <picture>
                            <source media="(max-width:767px)" srcset="/demo_diagnosis/images/content/qText/sp-${questionTitleImage}" sizes="100vw">
                            <img src="/demo_diagnosis/images/content/qText/${questionTitleImage}" alt="${questionTitle}">
                          </picture>
                        </p>
                        <div class="choices_wrap">`;

                    let questionAnswers = targetQuiz.answers;
                    for (let k = 0; k < questionAnswers.length; k++) {
                        let questionAnswer = questionAnswers[k].text;
                        let questionAnswerImage = questionAnswers[k].answer_img;
                        html += `
                            <button type="button" class="btn btn-choice js-btn" data-action="select">
                                <picture>
                                    <source media="(max-width:767px)" srcset="/demo_diagnosis/images/content/qBtn/sp-${questionAnswerImage}" sizes="100vw">
                                    <img src="/demo_diagnosis/images/content/qBtn/${questionAnswerImage}" alt="${questionAnswer}">
                                </picture>
                            </button>`;
                    }
                    html += `</div></li>`;
                }
                html += `</ul>`;
            }
            $diagnose.append(html);
            $diagnose.removeClass('load');
            $displayQuestion = $('#question-0-0');
            callback();
        }
        getQuestion();
    }

    /**
     * クリックイベントを設定する
     */
    function setBtnEvent() {
        //最初に呼び出された(1問目が表示された)時に一度falseにする
        isDisplayProcessing = false;

        $('.js-btn').on('click', function () {

            if (isDisplayProcessing) {
                return;
            }
            isDisplayProcessing = true;

            const $this = $(this);
            $this.addClass('clicked')
            const action = $this.attr('data-action');

            setTimeout(function (){
                if (action === 'select') {
                    getAnswer($this);
                }
                if (action === "next") {
                    displayNextQuestion(true);
                }
            },400);

        });
    }

    /**
     * 次の設問を表示する
     */
    function displayNextQuestion(isChangeGenre = false) {
        if (isChangeGenre) {
            //次のクイズのジャンルに更新する
            currentGenreIndex++;
            //現在表示中のクイズのカウントをリセットする
            currentQuestionIndex = 0;
            //途中結果フェードアウト
            $pageOverlay.fadeOut(300, function () {
                $diagnose_parent.fadeIn(300);
                fadeInQuestion();
            })
        } else {
            //前の設問フェードアウト
            $displayQuestion.fadeOut(300, function () {
                fadeInQuestion();
            })
        }

        const fadeInQuestion = function () {
            let targetWrap = $($diagnose.find('.diagnose_list').eq(currentGenreIndex));
            let targetQuestion = $(targetWrap.find('.question').eq(currentQuestionIndex));
            targetQuestion.fadeIn(300, function () {
                //フェードイン
                let displayQuestionId = '#question-' + currentGenreIndex + '-' + currentQuestionIndex
                $displayQuestion = $(displayQuestionId);
                isDisplayProcessing = false;
            });
        }

    }

    /**
     * 回答を取得
     */
    function getAnswer($self) {
        //選択されたボタンの親要素
        let $choiceBtnParent = $($self.parents(".choices_wrap"));
        // ボタン自身
        let $choiceBtnBro = $choiceBtnParent.find(".js-btn");
        $choiceBtnBro.css('pointer-events', 'none');

        // ボタンの番号保存
        let itemNum = $choiceBtnBro.index($self);

        //記録する処理
        let genreName = questionGenreList[currentGenreIndex];
        let answerList = reformatQuestionData[genreName][currentQuestionIndex].answers[itemNum].type;
        addCount(answerList);

        //表示中のクイズのカウントを更新
        currentQuestionIndex++;
        if (questionLimitOfGenre[currentGenreIndex] === currentQuestionIndex) {
            getResult();
        } else {
            displayNextQuestion();
        }
    }

    /**
     * 結果の振り分け
     */
    function addCount($answerList) {
        let targetList = resultCount[currentGenreIndex];
        let targetListLen = targetList.length;
        let targetCurrentCount = 0;
        for (let i= 0; i < targetListLen; i++){
            targetCurrentCount = targetList[i];
            targetList[i] = targetCurrentCount + $answerList[i];
        }
        resultCount[currentGenreIndex] = targetList;
    }

    /**
     * 結果処理
     */
    function getResult() {
        let resultType = null;
        let resultScore = 0;
        let targetScoreList = resultCount[currentGenreIndex];
        let targetScoreMaxVal = 2;
        for (let i = 0; i < targetScoreList.length; i++) {
            let score = targetScoreList[i];
            let typeName = questionTypeList[i];
            if (score >= targetScoreMaxVal) {
                resultType = typeName;
                resultScore = score;
            } else if (score >= 0) {
                if (score > resultScore) {
                    resultType = typeName;
                    resultScore = score;
                } else if (score === resultScore) {
                    let randomFlag = Math.floor(Math.random() * 2);
                    if (randomFlag === 1) {
                        resultType = typeName;
                        resultScore = score;
                    }
                }
            }
        }

        resultTypeList.push(resultType);

        if (currentGenreIndex === (questionGenreList.length - 1)) {
            getTotalResult();
        } else {
            displayPageOverlay();
        }
    }

    /**
     * 途中結果,ローディングアニメーション処理
     * bottleが決まったタイミングでローディングの画像を設定する
     */
    function displayPageOverlay() {
        $pageOverlay = $('.pageOverlay').eq(currentGenreIndex);
        let imagePath;
        const mobilePrefix = window.mediaQueryList.matches ? '' : 'sp-';

        const setImage = function (){
            if (currentGenreIndex === 0) {
                imagePath = '/demo_diagnosis/images/content/bottle/'+ mobilePrefix +'bottle-' + resultTypeList[0] + '.png';

                //ローディングに使うボトルの画像パス
                const $loading_frame = $('#loading_frame');
                const loadingBottlePath = '/demo_diagnosis/images/content/'+ mobilePrefix +'loading-' + resultTypeList[0] + '.png';
                $loading_frame.attr('src',loadingBottlePath);
                displayIntermediate();
            }
            else if(currentGenreIndex === 1) {
                imagePath = '/demo_diagnosis/images/content/flower/' + mobilePrefix + 'flower-' + resultTypeList[0] + '-' + resultTypeList[1] + '.png';
                displayIntermediate();
            }
            else if(currentGenreIndex === 2){
                displayLoading();
            }
        }

        //中間結果の画面
        const displayIntermediate = function (){
            let $imagesArea = $pageOverlay.find(".intermediate_image");
            $imagesArea.attr('src',imagePath);
            $diagnose_parent.fadeOut(400);
            $displayQuestion.fadeOut(400, function () {
                $pageOverlay.fadeIn(400, function () {
                    $pageOverlay.addClass('isAnimationStarted');
                    isDisplayProcessing = false;
                });
            });
        }

        //診断中のローディングアニメーション
        const displayLoading = function (){
            $diagnose_parent.fadeOut(400);
            $displayQuestion.fadeOut(400, function () {
                $pageOverlay.fadeIn(400, function () {
                    $pageOverlay.addClass('isAnimationStarted');
                    setTimeout(function (){
                        redirectResult()
                    },5800);
                });
            });
        }

        setImage();

    }

    /**
     * 最終結果の処理
     */
    function getTotalResult() {
        const resultData = window.DEMO_APP.resultData;

        totalResultParam = resultData[resultTypeList[0]][resultTypeList[1]][resultTypeList[2]].param
        totalResultTextParam = resultData[resultTypeList[0]][resultTypeList[1]][resultTypeList[2]].text;

        const duplicate = resultTypeList.filter(function (val, index, arr) {
            return arr.indexOf(val) === index && index !== arr.lastIndexOf(val);
        });

        let totalResultType;

        if (duplicate.length > 0) {
            totalResultType = duplicate[0];
        } else {
            totalResultType = 'carefree';
        }

        totalResultTypeParam = resultData[totalResultType].param;
        displayPageOverlay();
    }

    /**
     * リダイレクト
     */
    function redirectResult() {
        location.href = '/demo_diagnosis/result/' + totalResultParam + '.html';
    }

})(jQuery);