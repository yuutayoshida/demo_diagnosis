;(function ($) {
    window.addEventListener('load', function () {
        const $content = $('#shindan_result');
        // 診断ページ以外では処理終了
        if (!$content[0]) {
            return;
        }

        setAnimationLoadEvent();
        setAnimationEvent();
        if(!window.mediaQueryList.matches){
            setScrollEvent();
        }
    });

    /**
     * アニメーション要素 監視/クラス付与
     */
    function setAnimationEvent() {
        const $animationElems = document.getElementsByClassName('js-animationTarget');
        const ANIMATION_CLASSNAME = 'isAnimationStarted';

        const callback = (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting && !entry.target.classList.contains(ANIMATION_CLASSNAME)) {
                    entry.target.classList.add(ANIMATION_CLASSNAME);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '5000px 0px -10% 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver(callback, options);

        for (let i = 0; i < $animationElems.length; i++) {
            observer.observe($animationElems[i]);
        }
    }

    /**
     * 画像ロード後のアニメーションセット
     */
    function setAnimationLoadEvent() {
        const $animationLoadedElems = document.getElementsByClassName('js-animationLoadTarget');
        const ANIMATION_CLASSNAME = 'isAnimationStarted';

        for (let i = 0; i < $animationLoadedElems.length; i++) {
            $animationLoadedElems[i].classList.add(ANIMATION_CLASSNAME);
        }
    }

    /**
     * スクロール誘導アニメーション
     */
    function setScrollEvent(){
        const $target = $('.js-scroll');
        const $observeTarget = $('.result_detail');
        let isShow = false;
        setTimeout(function (){
            if($observeTarget.offset().top >= $(window).scrollTop()){
                $target.fadeIn(400);
                isShow = true;
                removeScrollEvent();
            }
        },7000);

        const removeScrollEvent = function (){
            window.addEventListener('scroll',function (){
                if(isShow){
                    $target.fadeOut(400);
                }
                isShow = false;
            })
        }
    }
})(jQuery);