;(function ($) {
    /** スライド用変数 */
    let slide_1;
    let slide_2;
    let slide_3;
    let slide_4;
    let slide_5;
    let slide_6;
    const slideArray = [slide_1, slide_2, slide_3, slide_4, slide_5, slide_6];

    let $slideElms;

    let $animationLoadedElems;
    const ANIMATION_CLASSNAME = 'isAnimationStarted'; // アニメーション表示クラス

    window.addEventListener('load', function () {
        const $content = $('#shindan_top');
        // 診断ページ以外では処理終了
        if (!$content[0]) {
            return;
        }

        $slideElms = document.getElementsByClassName('swiper');
        $animationLoadedElems = $('.js-animationLoadTarget'); // アニメーション対象要素

        setSlide();
        checkCookie();
    });

    /**
     * Cookieチェック
     * 1日以内に再訪問した場合はイントロアニメーション非表示
     */
    function checkCookie(){
        const today = Math.floor(new Date().getTime()/1000);
        const loadingCookie = Cookies.get('viewed_demo');

        //Cookieが無い場合：イントロアニメーションを表示
        if (typeof loadingCookie === 'undefined') {
            setIntro();
            Cookies.set('viewed_demo', today, {
                expires: 1,
                path: '/demo_diagnosis/',
            });
        }
        //Cookieの秒数と現在の秒数の差が（86400秒/1日）より大きい場合：イントロアニメーションを表示
        else if (today - loadingCookie >= 86400000) {
            setIntro();
            Cookies.set('viewed_demo', today, {
                expires: 1,
                path: '/demo_diagnosis/',
            });
        }
        //前回訪問から1日経過していない：イントロアニメーション非表示
        else {
            $('.intro').css('pointer-events','none');
            $('.beforeLoading').hide();
            startSlide();
            setLoadEvent();
        }
    }

    /**
     * イントロアニメーション
     */
    function setIntro(){
        const introArea = $('.intro');
        introArea.addClass('isAnimationStarted');//1200
        setTimeout(function (){
            $('.beforeLoading').hide();
            setTimeout(function (){
                introArea.css('pointer-events','none');
                startSlide();
                setLoadEvent();
            },1000)
        },5000)
    }

    /**
     * スライダー生成
     */
    function setSlide(){
        let firstDisplayVal = 0;
        for (let i = 0, len = $slideElms.length; i < len; i++) {
            firstDisplayVal = Math.floor( Math.random() * 9 );
            slideArray[i] = new Swiper($slideElms[i], {
                initialSlide: firstDisplayVal,
                loop: true,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 2000,
                },
                speed: 3000,
            });
            slideArray[i].autoplay.stop();
        }
    }

    /**
     * スライダー自動再生開始
     */
    function startSlide(){
        let delaySpeed;
        for (let i = 0, len = $slideElms.length; i < len; i++) {
            delaySpeed = 1000 * i;
            setTimeout(function (){
                slideArray[i].autoplay.start();
            },delaySpeed);
        }
    }

    /**
     * ローディング完了後アニメーション
     */
    function setLoadEvent(){
        $animationLoadedElems.addClass(ANIMATION_CLASSNAME);
    }

})(jQuery);