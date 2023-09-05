<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Nizam Omer">
    <meta name="description" content="Configration laravel + vue js + tailwndcss">
    <title>Laravel+Vite+Vue+Tailwind+VueX+VueRouter+Axios</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    @vite('resources/css/app.css')
</head>

<body class="antialiased">
    <div id="app"></div>
    @vite('resources/js/app.js')
</body>

</html>
