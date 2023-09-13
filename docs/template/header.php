<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $meta_title ?></title>
    <meta property="og:title" content="<?php echo $meta_title ?>">
    <meta property="og:description" content="<?php echo $meta_description ?>">
    <meta property="og:url" content="<?php echo $og_url ?>">
    <meta property="og:image" content="<?PHP echo $og_image ?>">
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content="<?php echo $meta_title ?>" />
    <meta name="twitter:description" content="<?php echo $meta_description ?>" />
    <meta name="twitter:image" content="<?php echo $og_image ?>">
    <?php if($is_useLibrary){ ?>
        <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
    <?php } ?>
    <link rel="stylesheet" href="/css/style.css?v=220714">
</head>
<body class="shindan" id="<?php echo $page_id ?>">
<header>
    <div class="inner">
        <div class="header_inner">
            <div class="headerLogo-project">
                <a href="/">
                    <picture>
                        <source media="(max-width:767px)" srcset="https://placehold.jp/98x40.png" sizes="100vw">
                        <img src="https://placehold.jp/156x64.png" alt="">
                    </picture>
                </a>
            </div>
            <div class="headerLogo-company">
                <a href="/">
                    <picture>
                        <source media="(max-width:767px)" srcset="https://placehold.jp/142x32.png" sizes="100vw">
                        <img src="https://placehold.jp/208x48.png" alt="">
                    </picture>
                </a>
            </div>
        </div>
    </div>
</header>
<main>