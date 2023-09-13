<?php
$page_id = 'shindan_content';
$meta_title = 'demo';
$meta_description = 'demo';
$og_url = 'https://demo';
$og_image = 'https://demo/images/ogp/ogp_default.png';

$is_useLibrary = false;

include($_SERVER['DOCUMENT_ROOT'] . '/template/header.php');
?>
    <div id="diagnose">
        <div class="bg_obj">
            <picture>
                <source media="(max-width:767px)" ssrcset="/images/content/sp-content_bgObj.png" sizes="100vw">
                <img src="/images/content/content_bgObj.png" alt="">
            </picture>
        </div>
        <div class="inner">
            <div id="diagnose_area" class="load">

            </div>
        </div>
    </div>
    <div class="pageOverlay intermediate" id="intermediate-bottle" style="display: none">
        <div class="intermediate_wrap">
            <div class="bg_obj">
                <picture>
                    <source media="(max-width:767px)" ssrcset="/images/content/sp-intermediate_bgObj.png" sizes="100vw">
                    <img src="/images/content/intermediate_bgObj.png" alt="">
                </picture>
            </div>
            <div class="intermediate_inner">
                <p class="intermediate_lead">
                    <picture>
                        <source media="(max-width:767px)" ssrcset="/images/content/sp-intermediate_lead-1.png" sizes="100vw">
                        <img src="/images/content/intermediate_lead-1.png" alt="あなたのボトルはこんなイメージ。次はどんな花が入るか楽しみですね。">
                    </picture>
                </p>
                <div class="intermediate_imageWrap">
                    <img class="intermediate_image" src="" alt="">
                </div>
            </div>
        </div>
        <div class="pageOverlay_bottomArea">
            <div class="bottomArea_inner">
                <button type="button" class="btn btn-next js-btn" data-action="next">
                    <picture class="btn_inner">
                        <source media="(max-width:767px)" ssrcset="/images/content/sp-btn-next.png" sizes="100vw">
                        <img src="/images/content/btn-next.png" alt="NEXT">
                    </picture>
                </button>
            </div>
        </div>
    </div>
    <div class="pageOverlay intermediate" id="intermediate-mainFlower" style="display: none">
        <div class="intermediate_wrap">
            <div class="bg_obj">
                <picture>
                    <source media="(max-width:767px)" ssrcset="/images/content/sp-intermediate_bgObj.png" sizes="100vw">
                    <img src="/images/content/intermediate_bgObj.png" alt="">
                </picture>
            </div>
            <div class="intermediate_inner">
                <p class="intermediate_lead">
                    <picture>
                        <source media="(max-width:767px)" ssrcset="/images/content/sp-intermediate_lead-2.png" sizes="100vw">
                        <img src="/images/content/intermediate_lead-2.png" alt="あなたのお花はこんなイメージ。最後の完成が楽しみですね。">
                    </picture>
                </p>
                <div class="intermediate_imageWrap">
                    <img class="intermediate_image" src="" alt="">
                </div>
            </div>
        </div>
        <div class="pageOverlay_bottomArea">
            <div class="bottomArea_inner">
                <button type="button" class="btn btn-next js-btn" data-action="next">
                    <picture class="btn_inner">
                        <source media="(max-width:767px)" ssrcset="/images/content/sp-btn-next.png" sizes="100vw">
                        <img src="/images/content/btn-next.png" alt="NEXT">
                    </picture>
                </button>
            </div>
        </div>
    </div>
    <div class="pageOverlay" id="loading" style="display: none">
        <div class="loading_wrap">
            <div class="loading_inner">
                <p class="loading_msg">
                    <picture>
                        <source media="(max-width:767px)" ssrcset="/images/content/sp-loading_text.png" sizes="100vw">
                        <img src="/images/content/loading_text.png" alt="分析中">
                    </picture>
                </p>
                <div class="loading_animateElm">
                    <div class="loadingBottle_wrap">
                        <div class="loadingBar loadingBar-wave">
                            <picture>
                                <source media="(max-width:767px)" ssrcset="/images/content/sp-loading_wave.png" sizes="100vw">
                                <img src="/images/content/loading_wave.png" alt="">
                            </picture>
                        </div>
                        <div class="loadingBar loadingBar-frame">
                            <img id="loading_frame" src="" alt="">
                        </div>
                    </div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                    <div class="loading_dot"></div>
                </div>
            </div>
            <div class="bg_obj">
                <picture>
                    <source media="(max-width:767px)" ssrcset="/images/content/sp-intermediate_bgObj.png" sizes="100vw">
                    <img src="/images/content/intermediate_bgObj.png" alt="">
                </picture>
            </div>
        </div>
        <div class="pageOverlay_bottomArea">

        </div>
    </div>
<?php
include ($_SERVER['DOCUMENT_ROOT'] .'/template/footer.php');
?>