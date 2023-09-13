;(function () {

    const questionData = {
        'bottle': [
            {
                'title': '肌に触れた時の印象は？',
                'title_img' : 'text-1.png',
                'answers': [
                    {
                        'text': 'ふっくらとしている',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-1-1.png',
                    },
                    {
                        'text': 'つるんとしている',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-1-2.png',
                    },
                    {
                        'text': 'かさつきを感じる',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-1-3.png',
                    },
                ]
            },
            {
                'title': '肌トラブルが起きる場所はいかがですか？',
                'title_img' : 'text-2.png',
                'answers': [
                    {
                        'text': '顔全体にトラブルが起きがち',
                        'type': [1,0,1],
                        'answer_img':'selectBtn-2-1.png',
                    },
                    {
                        'text': '部分的にトラブルが起きがち',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-2-2.png',
                    },
                    {
                        'text': 'あまり感じない',
                        'type': [0,0,0],
                        'answer_img':'selectBtn-2-3.png',
                    },
                ]
            },
            {
                'title': '肌にくすみ感のない明るさを感じますか？',
                'title_img' : 'text-3.png',
                'answers': [
                    {
                        'text': 'とても感じる',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-3-1.png',
                    },
                    {
                        'text': '少し感じる',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-3-2.png',
                    },
                    {
                        'text': 'あまり感じない',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-3-3.png',
                    },
                ]
            },
        ],
        'mainFlower': [
            {
                'title': '肌のテカリは気になる？',
                'title_img' : 'text-4.png',
                'answers': [
                    {
                        'text': 'テカりやすい',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-4-1.png',
                    },
                    {
                        'text': '部分的にテカる',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-4-2.png',
                    },
                    {
                        'text': 'あまり気にならない',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-4-3.png',
                    },
                ]
            },
            {
                'title': 'お肌のうるおいに満足していますか？',
                'title_img' : 'text-5.png',
                'answers': [
                    {
                        'text': '常に満足できていない',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-5-1.png',
                    },
                    {
                        'text': '部分的に満足できていない',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-5-2.png',
                    },
                    {
                        'text': '不満はない',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-5-3.png',
                    },
                ]
            },
            {
                'title': 'ニキビについてお聞かせください',
                'title_img' : 'text-6.png',
                'answers': [
                    {
                        'text': 'できやすい',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-6-1.png',
                    },
                    {
                        'text': 'たまにできる',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-6-2.png',
                    },
                    {
                        'text': 'あまりできない',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-6-3.png',
                    },
                ]
            },
            {
                'title': '肌のキメ・毛穴はいかがですか？',
                'title_img' : 'text-7.png',
                'answers': [
                    {
                        'text': '全体的に気になる',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-7-1.png',
                    },
                    {
                        'text': '部分的に気になる',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-7-2.png',
                    },
                    {
                        'text': 'あまり気にならない',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-7-3.png',
                    },
                ]
            },
        ],
        'subFlower': [
            {
                'title': 'ベースメイク(ファンデ・化粧下地など)についてお聞かせください',
                'title_img' : 'text-8.png',
                'answers': [
                    {
                        'text': '全体的にくずれやすい',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-8-1.png',
                    },
                    {
                        'text': '部分的にくずれやすい',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-8-2.png',
                    },
                    {
                        'text': 'くずれにくいが、粉浮きや乾燥が気になる',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-8-3.png',
                    },
                ]
            },
            {
                'title': '洗顔後の肌の状態は？',
                'title_img' : 'text-9.png',
                'answers': [
                    {
                        'text': 'ざらつきをよく感じる',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-9-1.png',
                    },
                    {
                        'text': 'ざらつきをたまに感じる',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-9-2.png',
                    },
                    {
                        'text': 'つっぱりやすい',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-9-3.png',
                    },
                ]
            },
            {
                'title': 'お肌のお手入れ時に困ることは？',
                'title_img' : 'text-10.png',
                'answers': [
                    {
                        'text': '日によってなじみが悪い日がある',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-10-1.png',
                    },
                    {
                        'text': '過去、化粧品がしみたことがある',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-10-2.png',
                    },
                    {
                        'text': 'とくに困ることはない',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-10-3.png',
                    },
                ]
            },
            {
                'title': '朝起きた時の肌の状態は？',
                'title_img' : 'text-11.png',
                'answers': [
                    {
                        'text': '全体的にベタついている',
                        'type': [1,0,0],
                        'answer_img':'selectBtn-11-1.png',
                    },
                    {
                        'text': '部分的にベタついている',
                        'type': [0,1,0],
                        'answer_img':'selectBtn-11-2.png',
                    },
                    {
                        'text': 'ベタつきはない',
                        'type': [0,0,1],
                        'answer_img':'selectBtn-11-3.png',
                    },
                ]
            },
        ],
    };

    if (typeof window.DEMO_APP === "undefined") {
        window.DEMO_APP = {};
    }
    window.DEMO_APP.questionData = questionData;
})();