<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="200" alt="Laravel Logo"></a></p>
<h2>Installation & Configuration: </h2>
Laravel, Vite, Vuejs, TailwindCss, VueX, VueRouter, Axios

<h3>1: Setup new Laravel App</h3>

```
composer create-project laravel/laravel LaravelviteVuejs
```

<h3>2: Go to Project </h3>

```
cd LaravelviteVuejs
```
<h3>3: Installing Dependencies </h3>

```
npm i && npm i vue vue-router@4 vuex axios @vitejs/plugin-vue -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
```
<h3>4: Change `vite:config.js` to this: </h3>

```
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],

});
```

<h3>5: Change `welcome.blade.php` to this:</h3>

```
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

```
<h3>5: Change `tailwind.config.js` to this: </h3>

```
export default {
  content: [
    "./index.html",
    "./resources/js/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
<h3>6: Add codes to `resources/css/app.css`  </h3>

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
<h3>7: Add codes to `routes/web.php` in the top  </h3>

```
Route::view('/{any?}' , 'welcome')->where('any', '.*');
```

<h3>8: now Copy my `js` folder in `resources` and replace your js folder  </h3>
<h3>8: Now run your project </h3>

```
php artisan serve
```
```
npm run dev
```

<br>

Thank you for exploring this project! We hope these instructions were helpful in setting up your Laravel application with Vite, Vue.js, Tailwind CSS, Vuex, VueRouter, and Axios. If you encounter any issues or have suggestions for improvements, please don't hesitate to reach out.

Inshallah, this project will serve as a foundation for your web development journey. Happy coding!



