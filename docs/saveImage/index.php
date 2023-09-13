<?php
$herbarium_imageList = ['aC43', 'Zi4j', 'T7a3', 'Fn2J','fM4x','eZ4f','e6EM','w6BG','p7Ce','i9A3','Fy4H','V9dr','p3FE','f9UV','pR5A','vE84','x5Pc','Bw4y','N3pB','sP9k','b9Xq','uT8H','pR5H','s6Fu','J7tG','w4Sd','Jw4G'];
$exp_imageList = ['r7Nt','fU7P','x5Mu'];

// OGP画像 動的変更用にGETパラメータ取得
if(isset($_GET['herbarium']) && isset($_GET['exp'])){
    if (in_array($_GET['herbarium'], $herbarium_imageList) && in_array($_GET['exp'], $exp_imageList)) {
        // tapas_listに存在するtpsが指定されている場合
        $herbarium_imageName = $_GET['herbarium'];
        $herbarium_imagePath = "{$herbarium_imageName}.png";

        $exp_imageName = $_GET['exp'];
        $exp_imagePath = "{$exp_imageName}.png";
    } else {
        // tapas_listに存在しないtpsが指定されている場合
        header('Location: /');
        exit();
    }
} else {
    // パラメータが指定されていない場合
    header('Location: /');
    exit();
}

?>
<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <meta property="og:title" content="demo">
    <meta property="og:description" content="demo">
    <meta property="og:url" content="https://demo/">
    <meta property="og:image" content="https://demo/images/ogp/ogp_default.png">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@" />
    <meta name="twitter:site" content="https://demo" />
    <meta name="twitter:title" content="demo" />
    <meta name="twitter:description" content="demo" />
    <meta name="twitter:image" content="https://demo/ogp/ogp_default.png">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="shindan" id="shindan_saveImage">
<main>
    <section class="saveImage">
        <h1 class="saveImage_msg">
            <picture>
                <source media="(max-width:767px)" srcset="/images/saveImage/sp-saveImage_msg.png" sizes="100vw">
                <img src="/images/saveImage/sp-saveImage_msg.png" alt="右クリック or 長押しで保存してください。">
            </picture>
        </h1>
        <div class="saveImage_inner">
            <div class="saveImage_herbarium">
                <img src="/images/saveImage/herbarium/<?php echo $herbarium_imagePath ?>" alt="">
            </div>
            <div class="saveImage_exp">
                <img src="/images/saveImage/exp/<?php echo $exp_imagePath ?>" alt="">
            </div>
        </div>
    </section>
</main>
</body>
</html>
