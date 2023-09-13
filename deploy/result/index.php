<?php
$object = $_GET["object"];
$result = $_GET["result"];
$text = $_GET['text'];

$object_list = ['aC43', 'Zi4j', 'T7a3', 'Fn2J','fM4x','eZ4f','e6EM','w6BG','p7Ce','i9A3','Fy4H','V9dr','p3FE','f9UV','pR5A','vE84','x5Pc','Bw4y','N3pB','sP9k','b9Xq','uT8H','pR5H','s6Fu','J7tG','w4Sd','Jw4G'];
$result_list = ['r7Nt','fU7P','x5Mu'];
$text_list = ['G6nr','K6yT', 'Em7z', 'Lr2M', 'W8i9', 'Sw8E', 'uX5F', 'hX6W', 'zE7n','rW2y','k6L2'];

// パラメータチェック
if(!(isset($object) && isset($result) && isset($text))){
    header('Location: /');
    exit();
} else if (!(in_array($object, $object_list) && in_array($result, $result_list) && in_array($text, $text_list))) {
    // パラメータが指定されていない場合
    header('Location: /');
    exit();
}

$mainColor = array(
    'r7Nt' => 'motivation',
    'fU7P' => 'carefree',
    'x5Mu' => 'ephemeral',
);

$carefree_list = ['i9A3','Fy4H','V9dr','p3FE','f9UV','pR5A','vE84','x5Pc','Bw4y'];
$carefree_class = in_array($object, $carefree_list) ? 'carefree' : '';

$result_text = array(
    "r7Nt" => array(
            "condition" => "元気いっぱいな<br class='sp'>アクティブさん",
            "strength" => "つややかなハリには自信あり。<br>イキイキとした印象。",
            "concern" => "かたくなりやすく、ごわつきやざらつきがち。ニキビなどのトラブルが起こりやすいかも。",
            "exp" => "
                元気いっぱいなあなたのお肌。<br>
                「不要なものの排出」がキーワード、それによるお肌トラブルを起こしがちかも。そんなあなたは、
                お肌の不要なものを取り去るケアで、みずみずしくつるんとなめらかな肌へ整えましょう。<br>
                また「規則正しく十分な睡眠をとること」「ビタミンB2やB6を摂取すること」「紫外線対策をしっかり行うこと」でライフスタイルから整えてみましょう。<br>
                まずはあなたのお肌のことを詳しく知ることから始めてみませんか？<br>
                最短で美しくなれる組み合わせを提案し、サンプルからお試しいただけます。",
    ),
    "fU7P" => array(
            "condition" => "おだやかな<br class='sp'>マイペースさん",
            "strength" => "しなやかさに自信あり。<br>大きな肌トラブルはあまりない印象。",
            "concern" => "ときどきお肌が不安定になることや、小さく部分的なトラブルが起きることがあるかも",
            "exp" => "
                マイペースなあなたのお肌。<br>
                「お肌のバランス」がキーワード、大きなトラブルは起こりにくいけれど、うっかりエラーをおこしがち。ゆらぎやすさにお困りかも。
                そんなあなたは、毎日の丁寧なケアで、すみずみまでうるおう、ぷるんと弾む肌へ整えましょう。<br>
                また「規則正しく十分な睡眠をとること」「ビタミンB2やB6を摂取すること」「紫外線対策をしっかり行うこと」でライフスタイルから整えてみましょう。<br>
                まずはあなたのお肌のことを詳しく知ることから始めてみませんか？<br>
                最短で美しくなれる組み合わせを提案し、サンプルからお試しいただけます。",
    ),
    "x5Mu" => array(
            "condition" => "おとなしい<br class='sp'>ロマンチストさん",
            "strength" => "つるんとしたお肌には自信あり。<br>キメがこまかく清楚な印象。",
            "concern" => "外的な刺激をうけやすく、それによる乾燥などのトラブルもしばしば…乾燥による小じわも現れやすいかも。",
            "exp" => "
                繊細なあなたのお肌。<br>
                バリア機能も低下しがちで、乾燥や紫外線などの外的刺激からのダメージを受けやすいかも。そんなあなたは、「たっぷりの保湿」がキーワード。
                お肌に足りないものを与えるケアで、ふっくら満たしてもっちりしたお肌へ整えましょう。<br>
                また「規則正しく十分な睡眠をとること」「ビタミンB2やB6を摂取すること」「紫外線対策をしっかり行うこと」でライフスタイルから整えてみましょう。
                まずはあなたのお肌のことを詳しく知ることから始めてみませんか？<br>
                最短で美しくなれる組み合わせを提案し、サンプルからお試しいただけます。",
    ),
);

$exp_text = array(
    "G6nr" => "フレッシュな美しさを持つあなたの肌を表すモチーフは『オレンジ』花言葉は「寛大」「美しさ」「優しさ」。聡明で博識な一面は『ディル』『千日紅』に。花言葉は「知恵」「永遠の恋」。",
    "K6yT" => "フレッシュな美しさを持つあなたの肌を表すモチーフは『オレンジ』花言葉は「寛大」「美しさ」「優しさ」。おちゃめで可愛らしい一面は『ハイブリッドスターチス』に。花言葉は「変わらぬ心」。",
    "Em7z" => "フレッシュな美しさを持つあなたの肌を表すモチーフは『オレンジ』花言葉は「寛大」「美しさ」「優しさ」。ミステリアスな一面は『水色のあじさい』に。花言葉は「知的」「神秘的」「辛抱強い愛」。",
    "Lr2M" => "時には明るく時には落ち込む、自由なあなたの肌を表す花は『ピンクのアジサイ』花言葉は「元気な女性」。聡明で博識な一面は『ディル』『千日紅』に。花言葉は「知恵」「永遠の恋」。",
    "W8i9" => "時には明るく時には落ち込む、自由なあなたの肌を表す花は『ピンクのアジサイ』花言葉は「元気な女性」。おちゃめで可愛らしい一面は『ハイブリッドスターチス』に。花言葉は「変わらぬ心」。",
    "Sw8E" => "時には明るく時には落ち込む、自由なあなたの肌を表す花は『ピンクのアジサイ』花言葉は「元気な女性」。ミステリアスな一面は『水色のあじさい』に。花言葉は「知的」「神秘的」「辛抱強い愛」。",
    "uX5F" => "フレッシュな美しさを持つあなたの肌を表すモチーフは『オレンジ』花言葉は「寛大」「美しさ」「優しさ」。聡明で博識な一面は『ディル』『千日紅』に。花言葉は「知恵」「永遠の恋」。",
    "hX6W" => "繊細でたおやかなあなたの肌を表す花は『デルフィニウム グランブルー』花言葉は「幸運を振りまく人」。おちゃめで可愛らしい一面は『ハイブリッドスターチス』に。花言葉は「変わらぬ心」。",
    "zE7n" => "繊細でたおやかなあなたの肌を表す花は『デルフィニウム グランブルー』花言葉は「幸運を振りまく人」。ミステリアスな一面は『水色のあじさい』に。花言葉は「知的」「神秘的」「辛抱強い愛」。",
    "rW2y" => "フレッシュな美しさを持つあなたを表すモチーフは『デルフィニウム グランブルー』花言葉は「幸運を振りまく人」。聡明で博識な一面は『ディル』『千日紅』に。花言葉は「知恵」「永遠の恋」。",
    "k6L2" => "繊細でたおやかなあなたを表す花は『オレンジ』花言葉は「寛大」「美しさ」「優しさ」。ミステリアスな一面は『水色のあじさい』に。花言葉は「知的」「神秘的」「辛抱強い愛」。",
);

$className = $mainColor[$result];

$page_id = 'shindan_result';
$meta_title = 'demo';
$meta_description = 'demo';
$og_url = "https://demo/?object={$object}";
$og_image = "https://demo/images/ogp/ogp_{$object}.png";

$is_useLibrary = false;

$shareText = '＼ デモ投稿／' . "\n\n" . "あなたの #肌 はこんなイメージ✨" . "\n" . "お肌チェックでサンプルプレゼント🎁" . "\n\n" . '▼参加はこちらから▼' . "\n" ;
$encodeShareText = urlencode($shareText);

include($_SERVER['DOCUMENT_ROOT'] . '/template/header.php');
?>
    <div class="herbarium bg_<?php echo $className; ?> js-animationLoadTarget">
        <div class="bg_circleObj bg_circleObj-1 js-animationLoadTarget">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.54 178.43">
                <path fill-rule="evenodd" d="M 83.37 21 c 12 -15 22 -21 47 -21 c 25 0 51 7 58 34 c 7 27 -5 43 -7 48 c -2 5 -24 21 -27 24 c -3 3 -11 14 -12 19 c -1 5 -18 29 -30 32 c -12 3 -25 11 -46 -1 c -21 -12 -3 -30 -44 -47 c -41 -17 -19 -72 13 -70 S 71.37 36 83.37 21 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 83.37 21 c 12 -15 22 -21 47 -21 c 25 0 51 7 58 34 c 7 27 -5 43 -7 48 c -2 5 -24 21 -27 24 c -3 3 -11 14 -12 19 c -1 5 -18 29 -30 32 c -12 3 -25 11 -46 -1 c -21 -12 -3 -30 -44 -47 c -41 -17 -19 -72 13 -70 S 71.37 36 83.37 21 Z;
                    M 74.6 11.31 c 16 -14 41 -15 67 -3 c 26 12 34 10 43 31 c 9 21 -1.39 39 -8 45 c -6.61 6 -20.77 -1.45 -32 14 c -11.23 15.45 0 17 -1 35 c -1 18 -11.67 25.91 -27 36 c -15.33 10.09 -34 15 -55 3 c -21 -12 -14 -23 -41 -45 c -27 -22 -22 -96 10 -94 S 62.82 21.61 74.6 11.31 Z;
                    M 81.37 19 c 4 -4 12 -19 37 -19 c 25 0 45 11 52 38 c 7 27 -6 26 -8 37 c -2.66 14.63 4 30 -7 41 c -3 3 -9 9.89 -23 14 c -17 5 -21.83 23 -32 30 c -13 9 -32 12 -44 1 c -20.85 -19.11 7 -35 -34 -52 c -41 -17 -19 -72 13 -70 S 72.31 28.06 81.37 19 Z;
                    M 83.37 21 c 12 -15 22 -21 47 -21 c 25 0 51 7 58 34 c 7 27 -5 43 -7 48 c -2 5 -24 21 -27 24 c -3 3 -11 14 -12 19 c -1 5 -18 29 -30 32 c -12 3 -25 11 -46 -1 c -21 -12 -3 -30 -44 -47 c -41 -17 -19 -72 13 -70 S 71.37 36 83.37 21 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_circleObj bg_circleObj-2 js-animationLoadTarget">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462.47 404.77">
                <path fill-rule="evenodd" d="M 439.21 53.38 c 53.25 71.37 5 195 -44 243 c -49 48 -104 53 -149 76 c -45.35 23.18 -155 58 -203 3 c -54.75 -62.73 -66.08 -216 17 -301 C 148.21 -15.62 380.31 -25.56 439.21 53.38 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 439.21 53.38 c 53.25 71.37 5 195 -44 243 c -49 48 -104 53 -149 76 c -45.35 23.18 -155 58 -203 3 c -54.75 -62.73 -66.08 -216 17 -301 C 148.21 -15.62 380.31 -25.56 439.21 53.38 Z;
                    M 347.07 22 c 57 39 64.73 149.33 29 219 c -20 39 -78 52 -140 73 c -77.42 26.22 -179 44 -212 9 c -57.12 -60.58 -5 -151 77 -224 C 183.9 25.24 265.79 -33.63 347.07 22 Z;
                    M 386.77 41.25 c 53.25 71.37 -7 174 -56 222 c -49 48 -59 44 -96 79 c -37 35 -109.6 60.31 -171 11 c -64.92 -52.13 -92.31 -159.75 -24 -257 C 103.51 5.5 327.87 -37.68 386.77 41.25 Z;
                    M 439.21 53.38 c 53.25 71.37 5 195 -44 243 c -49 48 -104 53 -149 76 c -45.35 23.18 -155 58 -203 3 c -54.75 -62.73 -66.08 -216 17 -301 C 148.21 -15.62 380.31 -25.56 439.21 53.38 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_circleObj bg_circleObj-3 js-animationLoadTarget">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343.1 370.75">
                <path fill-rule="evenodd" d="M 2.93 193.75 c 14.29 -56.46 52.87 -50.89 65 -61 c 30 -25 6.83 -52.81 36 -91 c 42 -55 102 -56 155 -1 c 53 55 96 173 32 269 c -64 96 -170 25 -196 14 C 71.13 313.69 -17.07 272.75 2.93 193.75 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 2.93 193.75 c 14.29 -56.46 52.87 -50.89 65 -61 c 30 -25 6.83 -52.81 36 -91 c 42 -55 102 -56 155 -1 c 53 55 96 173 32 269 c -64 96 -170 25 -196 14 C 71.13 313.69 -17.07 272.75 2.93 193.75 Z;
                    M 3.55 218.58 c 10.36 -41.45 67.6 -45.77 96 -76 c 31 -33 -20.57 -61.58 0 -105 c 27 -57 117.53 -46.62 164 14 c 46 60 -29.88 96.77 -24 212 c 5 98 -135 130 -189 91 C 29.61 339.45 -12.45 282.58 3.55 218.58 Z ;
                    M 15.7 202.26 c 9.47 -12.5333 18.94 -25.0667 28.41 -37.6 c 20.24 -19.88 65.19 -66.79 85.76 -110.21 c 27 -57 105 -77 158 -22 c 53 55 83 148 19 244 c -64 96 -203 91 -229 80 C 54.08 346.38 -35.87 297.79 15.7 202.26 Z;
                    M 2.93 193.75 c 14.29 -56.46 52.87 -50.89 65 -61 c 30 -25 6.83 -52.81 36 -91 c 42 -55 102 -56 155 -1 c 53 55 96 173 32 269 c -64 96 -170 25 -196 14 C 71.13 313.69 -17.07 272.75 2.93 193.75 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_obj js-animationLoadTarget">
            <picture>
                <source media="(max-width:767px)" srcset="/images/result/sp-result_bgObj.png" sizes="100vw">
                <img src="/images/result/result_bgObj.png" alt="">
            </picture>
        </div>
        <div class="inner">
            <p class="herbarium_secTitle js-animationLoadTarget">
                <svg xmlns="http://www.w3.org/2000/svg" id="secTitle-1" viewBox="0 0 101.9 46.95">
                    <g>
                        <path class="secTitle_path" d="M9.33,1S4.64,12.22,4.07,16.05s-.14,5.4,1,6.39,6.39,1.28,17.18-14.77c0,0-6.68,15.76-8.38,19.6s-7.31,16.93-8.8,18c-.89.65-2.79,1.26-3.84-.57-1.2-2.1,2-9.8,15.05-18.74s18.89-7.38,19.88-5.82c0,0-3.41-3.41-5.68-.14s-2.84,6.53-.14,7.52S36.45,26,37,20.45c0,0-2-1.7-2.13.57s3.41,7.52,17.18-2c0,0-6.39,4.69-4,7.1s8.09-1.14,11.21-6c0,0-2.84,5.39,3.27,6.24s13.91-9.08,14.06-10.93-2.7-1.84-3,.14,1.14,6.68,8.81,4.12c0,0-4.69,8.09.14,9.09s12.35-5.78,18.31-8.66"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="secTitle-2" viewBox="0 0 118.77 36.93">
                    <g>
                        <path class="secTitle_path" d="M23.93,17.18s9.23-2.13,9.23-8.38-11.65-5-16.47-3.69S3.91,9.23,1.35,15.05s9.52,5.82,13.06,7.24,7.53,2.27,6.68,5.26-5,8.52-8.95,8.37S5.9,31.52,10,30.24s7.1-.14,14.34-2.27,19-14.76,21.87-22.43S41.25,1,39.69,7,33.3,27.83,30.17,32.23c0,0,8.1-10.51,15-9.65s-5,8.8-10.64,6.1c0,0,10.22,15.48,25.69-5.54,0,0-7.52,17.33,27-.56,0,0-9.41,7.14-6.71,8.68s13.74-7.71,16-6.55S94.28,31.9,98,32.54s15.28-5.65,19.77-9"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="secTitle-3" viewBox="0 0 3.7 4.41">
                    <g>
                        <path class="secTitle_path" d="M2.7,1,1,3.41"/>
                    </g>
                </svg>
            </p>
            <div class="herbarium_inner js-animationLoadTarget">
                <div class="herbariumImage_wrap <?php echo $carefree_class; ?>">
                    <div class="herbarium_image herbarium_image-1">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbarium/sp-<?php echo $object ?>-1.png" sizes="100vw">
                            <img src="/images/result/herbarium/<?php echo $object ?>-1.png" alt="herbarium">
                        </picture>
                    </div>
                    <div class="herbarium_image herbarium_image-2">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbarium/sp-<?php echo $object ?>-2.png" sizes="100vw">
                            <img src="/images/result/herbarium/<?php echo $object ?>-2.png" alt="herbarium">
                        </picture>
                    </div>
                    <div class="herbarium_image herbarium_image-3">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbarium/sp-<?php echo $object ?>-3.png" sizes="100vw">
                            <img src="/images/result/herbarium/<?php echo $object ?>-3.png" alt="herbarium">
                        </picture>
                    </div>
                    <div class="herbarium_image herbarium_image-4">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbarium/sp-<?php echo $object ?>-4.png" sizes="100vw">
                            <img src="/images/result/herbarium/<?php echo $object ?>-4.png" alt="herbarium">
                        </picture>
                    </div>
                    <div class="herbarium_image herbarium_image-5">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbarium/sp-<?php echo $object ?>-5.png" sizes="100vw">
                            <img src="/images/result/herbarium/<?php echo $object ?>-5.png" alt="herbarium">
                        </picture>
                    </div>
                </div>
                <div class="herbarium_detail">
                    <p class="herbarium_exp">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/herbariumExp/sp-herbariumExp-<?php echo $text ?>.png" sizes="100vw">
                            <img src="/images/result/herbariumExp/herbariumExp-<?php echo $text ?>.png" alt="<?php echo $exp_text[$text] ?>">
                        </picture>
                    </p>
                    <ul class="btn_list btn_list-kv">
                        <li class="btn_saveImage">
                            <a href="/saveImage/?exp=<?php echo $result; ?>&herbarium=<?php echo $object; ?>" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source media="(max-width:767px)" srcset="/images/result/sp-btn_saveImage.png" sizes="100vw">
                                    <img src="/images/result/btn_saveImage.png" alt="">
                                </picture>
                            </a>
                        </li>
                        <li class="btn_share btn_shareInsta">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareInsta.png" sizes="100vw">
                                    <img src="/images/result/btn_shareInsta.png" alt="">
                                </picture>
                            </a>
                        </li>
                        <li class="btn_share btn_shareTwitter">
                            <a href="https://twitter.com/share?url=<?php echo $og_url ?>&text=<?php echo $encodeShareText ?>" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareTwitter.png" sizes="100vw">
                                    <img src="/images/result/btn_shareTwitter.png" alt="">
                                </picture>
                            </a>
                        </li>
                        <li class="btn_share btn_shareLine">
                            <a href="http://line.me/R/msg/text/?<?php echo $encodeShareText ?> <?php echo $og_url ?>" target="_blank" rel="noopener noreferrer">
                                <picture>
                                    <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareLine.png" sizes="100vw">
                                    <img src="/images/result/btn_shareLine.png" alt="">
                                </picture>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="scrollNav_wrap js-scroll" style="display: none">
            <div class="scrollNav_inner">
                <p class="scroll_nav sp">SCROLL</p>
                <div class="scrollNav_line"></div>
            </div>
        </div>
    </div>
    <div class="result_detail js-animationTarget">
        <div class="bg_obj">
            <picture>
                <source media="(max-width:767px)" srcset="/images/result/sp-resultDetail_bgObg.png" sizes="100vw">
                <img src="/images/result/resultDetail_bgObg.png" alt="">
            </picture>
        </div>
        <div class="inner">
            <div class="resultDetail_inner">
                <div class="resultSummary_wrap">
                    <div class="result_summary result_summary-condition">
                        <div class="resultSummary_image">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-summary-condition.png" sizes="100vw">
                                <img src="/images/result/summary-condition.png" alt="あなたのお肌状態">
                            </picture>
                        </div>
                        <p class="resultSummary_text"><?php echo $result_text[$result]['condition'] ; ?></p>
                    </div>
                    <div class="result_summary result_summary-strength">
                        <div class="resultSummary_image">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-summary-strength.png" sizes="100vw">
                                <img src="/images/result/summary-strength.png" alt="長所">
                            </picture>
                        </div>
                        <p class="resultSummary_text"><?php echo $result_text[$result]['strength'] ; ?></p>
                    </div>
                    <div class="result_summary result_summary-concern">
                        <div class="resultSummary_image">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-summary-concern.png" sizes="100vw">
                                <img src="/images/result/summary-concern.png" alt="気になるお肌の気がかり">
                            </picture>
                        </div>
                        <p class="resultSummary_text"><?php echo $result_text[$result]['concern'] ; ?></p>
                    </div>
                </div>
                <div class="result_advice">
                    <div class="resultAdvice_image">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/sp-summary-advice.png" sizes="100vw">
                            <img src="/images/result/summary-advice.png" alt="アドバイス">
                        </picture>
                    </div>
                    <p class="resultAdvice_text"><?php echo $result_text[$result]['exp'] ; ?></p>
                </div>
            </div>
        </div>
    </div>
    <section class="bnrArea">
        <div class="bg_circleObj bg_circleObj-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.86 279.76">
                <path fill-rule="evenodd" d="M 176.79 223.34 c 15 -46 35.62 -68.21 65 -85 c 28 -16 21 -60 15 -83 c -5.36 -20.52 -24 -50 -73 -55 c -49 -5 -61 46 -77 66 c -19.61 24.51 -89 56 -104 114 c -12.89 49.84 22.19 85.59 38 93 C 72.79 288.34 158.59 279.15 176.79 223.34 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 176.79 223.34 c 15 -46 35.62 -68.21 65 -85 c 28 -16 21 -60 15 -83 c -5.36 -20.52 -24 -50 -73 -55 c -49 -5 -61 46 -77 66 c -19.61 24.51 -89 56 -104 114 c -12.89 49.84 22.19 85.59 38 93 C 72.79 288.34 158.59 279.15 176.79 223.34 Z;
                    M 138.83 189.54 c 15 -32 46 -19 78 -30 c 32 -11 67.37 -40.94 66 -96 c -1 -40 -28 -67.81 -77 -63 c -51 5 -74.85 55.88 -95 72 c -20.15 16.12 -103 46 -110 97 c -7 51 32.36 69.69 49 75 C 96.83 259.54 123.83 221.54 138.83 189.54 Z;
                    M 113.62 230.29 c 19 -36 39 -60 71 -71 c 32 -11 54 -69 51 -90 c -3 -21 -13 -64 -62 -69 c -49 -5 -99 56 -105 65 c -6 9 -60 73 -67 124 c -7 51 10 66 26 73 C 43.62 269.29 94.62 266.29 113.62 230.29 Z;
                    M 176.79 223.34 c 15 -46 35.62 -68.21 65 -85 c 28 -16 21 -60 15 -83 c -5.36 -20.52 -24 -50 -73 -55 c -49 -5 -61 46 -77 66 c -19.61 24.51 -89 56 -104 114 c -12.89 49.84 22.19 85.59 38 93 C 72.79 288.34 158.59 279.15 176.79 223.34 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_circleObj bg_circleObj-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.28 242.88">
                <path fill-rule="evenodd" d="M 38.61 26.09 c 21 -20 52 -35 117 -20 c 65 15 107 31 114 77 c 7 46 18.71 73.23 -1 101 c -22 31 -52 2.89 -95 12 c -33 7 -24 36 -65 46 c -21.39 5.22 -95 -15 -106 -79 C -8.39 99.09 17.61 46.09 38.61 26.09 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 38.61 26.09 c 21 -20 52 -35 117 -20 c 65 15 107 31 114 77 c 7 46 18.71 73.23 -1 101 c -22 31 -52 2.89 -95 12 c -33 7 -24 36 -65 46 c -21.39 5.22 -95 -15 -106 -79 C -8.39 99.09 17.61 46.09 38.61 26.09 Z;
                    M 42.11 54.87 c 19 -35 28 -66 93 -51 c 65 15 107 31 114 77 c 7 46 -19 64 -30 76 c -11 12 -29 38 -54 41 c -29.86 3.59 -38 32 -74 38 c -21.72 3.63 -88.55 -7.1 -91 -72 C -1.89 110.87 22.81 90.43 42.11 54.87 Z;
                    M 60.57 29.69 c 24 -22 47 -39 112 -24 c 65 15 107 31 114 77 c 7 46 -40 86 -51 98 c -11 12 -63 36 -69 37 c -6 1 -64 25 -86 24 c -22 -1 -68 6 -79 -58 C -9.43 119.69 40.09 48.46 60.57 29.69 Z;
                    M 38.61 26.09 c 21 -20 52 -35 117 -20 c 65 15 107 31 114 77 c 7 46 18.71 73.23 -1 101 c -22 31 -52 2.89 -95 12 c -33 7 -24 36 -65 46 c -21.39 5.22 -95 -15 -106 -79 C -8.39 99.09 17.61 46.09 38.61 26.09 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_circleObj bg_circleObj-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225.63 283.94">
                <path fill-rule="evenodd" d="M 19.64 103.47 c 29 -35 53 -19 63 -52 c 10 -33 40 -55 80 -51 c 40 4 66 43 56 103 c -9.78 58.67 -6 124 -85 167 c -41.66 22.68 -100 3 -118 -37 C -2.36 193.47 -9.36 138.47 19.64 103.47 Z">
                    <animate dur="16s" repeatCount="indefinite" attributeName="d" values="
                    M 19.64 103.47 c 29 -35 53 -19 63 -52 c 10 -33 40 -55 80 -51 c 40 4 66 43 56 103 c -9.78 58.67 -6 124 -85 167 c -41.66 22.68 -100 3 -118 -37 C -2.36 193.47 -9.36 138.47 19.64 103.47 Z;
                    M 33.33 122.68 c 21 -22 14.53 -45.88 33 -75 c 26 -41 53.32 -52.46 93 -46 c 43 7 79 51 62 108 c -17 57 -69 91 -103 118 c -34 27 -94 37 -112 -3 C -11.67 184.68 12.33 144.68 33.33 122.68 Z;
                    M 33.19 129.31 c 20 -18 39 -31 49 -64 c 10 -33 38 -69 78 -65 c 40 4 57 56 40 113 c -17 57 -53 126 -87 153 c -34 27 -89 24 -107 -16 C -11.81 210.31 13.19 147.31 33.19 129.31 Z;
                    M 19.64 103.47 c 29 -35 53 -19 63 -52 c 10 -33 40 -55 80 -51 c 40 4 66 43 56 103 c -9.78 58.67 -6 124 -85 167 c -41.66 22.68 -100 3 -118 -37 C -2.36 193.47 -9.36 138.47 19.64 103.47 Z
                    "></animate>
                </path>
            </svg>
        </div>
        <div class="bg_obj">
            <picture>
                <source media="(max-width:767px)" srcset="/images/result/sp-resultBnr_bgObj.png" sizes="100vw">
                <img src="/images/result/resultBnr_bgObj.png" alt="">
            </picture>
        </div>
        <div class="inner">
            <div class="bnrArea_inner">
                <h2 class="bnrArea_title js-animationTarget">
                    <picture>
                        <source media="(max-width:767px)" srcset="/images/result/sp-bnrArea_title.png" sizes="100vw">
                        <img src="/images/result/bnrArea_title.png" alt="わたしに必要な美しさ。”わたしにいい”が見つかる。">
                    </picture>
                </h2>
                <div class="coupon js-animationTarget">
                    <a href="/" class="coupon_inner" target="_blank" rel="noopener noreferrer">
                        <picture>
                            <source media="(max-width:767px)" srcset="https://placehold.jp/590x240.png" sizes="100vw">
                            <img src="https://placehold.jp/886x360.png" alt="">
                        </picture>
                    </a>
                </div>
                <div class="btn_restart js-animationTarget">
                    <a href="/content/">
                        <picture>
                            <source media="(max-width:767px)" srcset="/images/result/sp-btn_restart.png" sizes="100vw">
                            <img src="/images/result/btn_restart.png" alt="もう一度チェック">
                        </picture>
                    </a>
                </div>
                <ul class="btn_list">
                    <li class="btn_saveImage">
                        <a href="/saveImage/?exp=<?php echo $result; ?>&herbarium=<?php echo $object; ?>" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-btn_saveImage.png" sizes="100vw">
                                <img src="/images/result/btn_saveImage.png" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="btn_share btn_shareInsta">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareInsta.png" sizes="100vw">
                                <img src="/images/result/btn_shareInsta.png" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="btn_share btn_shareTwitter">
                        <a href="https://twitter.com/share?url=<?php echo $og_url ?>&text=<?php echo $encodeShareText ?>" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareTwitter.png" sizes="100vw">
                                <img src="/images/result/btn_shareTwitter.png" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="btn_share btn_shareLine">
                        <a href="http://line.me/R/msg/text/?<?php echo $encodeShareText ?> <?php echo $og_url ?>" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source media="(max-width:767px)" srcset="/images/result/sp-btn_shareLine.png" sizes="100vw">
                                <img src="/images/result/btn_shareLine.png" alt="">
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
<?php
include ($_SERVER['DOCUMENT_ROOT'] .'/template/footer.php');
?>