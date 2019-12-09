# GridWork - Free CSS Grid Based CSS Framework
GridWork is a WIP free css framework based off of the CSS grid authored by https://YouTube.com/FollowAndrew  It's a utility framework, that can be thought of as a mix of bootstrap and tailwind.  The framework grid system is based off of the CSS grid, allowing you to create multi-columns layouts by delcaring the columns on the parent container!  

It's fully responsive with 4 breakpoints used throught.  All of the sizing (fonts,spacing,padding,margin, etc.) are based of a (customizable SASS variable) 6 point system.  This allows you do do all sorts of things such as:

```
<div class="p-1 m-6">Content</div>
<div class="grid gap-sm-1 gap-lg-4">Content</div>
<h1 class="font-sm-3 font-lg-6">Heading</h1>
```

## Getting Started

Download the .zip and open the '/docs' folder to see all distribution files

To install dependencies run the following command from the hq-admin folder:
```
npm install
```

then to initialize the dev server and have webpack create the necessary files run:

```
npm run start:dev
```

## Versions
* 0.1 alpha
  * Released: Oct. 4, 2019
  * Initial release

## License
This project is licensed under the [MIT](LICENSE) License