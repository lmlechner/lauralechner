## Basic Elements

Each page has a `<main>` tag, and the content of each page is inside a container div: `<div class="container">`.  When adding content, keep everything within this container class.

## Images

To ensure that images look on retina displays and load quickly, size them to be 1.5x the size of the widest space that they'll occupy on the page, and save them at relatively low quality, like '2' in Photoshop.  The styling will squish them down to the correct size.  Because the images are effectively scaled down, they'll still look good despite the low quality.  Aim to keep the file size of images in the low 100's of Kb.

## Home page

To add a tile to the homepage, first save an image to the image directory.  The tiles on the home page are wrapped in divs, like this:

```
<div class="front-page-tile">
  <img src="./images/some_image.jpg" alt="">
</div>
```

Add the filename to src of the image.  To link the image to another page, wrap the `<img>` with an anchor tag like this:
```
<div class="front-page-tile">
  <a href="https://vimeo.com/104234881"><img src="./images/Forest.jpg" alt=""></a>
</div>
```

## Work Page

Items on the work page are wrapped up in divs like this:

```
<div class="work-container">
  <div class="video-container">
    <iframe src="https://player.vimeo.com/video/80760789" width="1000" height="562" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">
      <h2>Citizen Kane, Part II</h2>
    </div>
    <div class="video-caption">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt repellat, magnam delectus fugit, dicta culpa, praesentium ducimus provident enim reiciendis, fuga cumque! Iusto provident alias eligendi sunt sint vel eveniet?
    </div>
  </div>
</div><!-- end of .work-container -->
```

To add a video, first copy the `<iframe>` element of the video from Vimeo, YouTube, ect.  Delete any extra text outside of the iframe, and paste it into the video-container div.

## About Page

The about page is divided into two responsive columns.  When adding content to this page, keep the content inside these divs.

## Nav and Footer

To add new items to the nav, add in new `<li>` elements in this section:
```
<div class="menu">
  <ul>
    <li><a href="about.html">About</a></li>
    <li><a href="work.html">Work</a></li>
  </ul>
</div> <!-- end of menu -->
<div class="name">
```
There isn't much room in this space on smaller screens, so don't go too crazy.

The site uses [Font Awesome](https://fortawesome.github.io/Font-Awesome/) for the social icons.  To add a new one, look up the icon you want at Font Awesome and paste in the `<i>` tag in side the social div:
```
<div class="social">
  <a href="mailto:laura@lauralechner.com"><i class="fa fa-envelope"></i></a>
  <a href="https://www.linkedin.com/in/lalechner"><i class="fa fa-linkedin-square"></i></a>
  <a href="https://vimeo.com/lauralechner"><i class="fa fa-vimeo-square"></i></a>
</div>
```

## Basic Page

Is a blank page you can use to create new pages.  For full width, you can add new content inside the container - or use the col-1 and col-2 divs for a responsive layout.

## Styling

The site uses SASS for styling the site.  SASS is compiled into the styles.css file by a build tool called Gulp.  Because Gulp generates the styles.css from the scss files, don't edit styles.css directly.  Its overwritten every time Gulp runs.

To get this whole crazy thing to work, the package.json file is there to describe the packages you need.  First install node.js using Homebrew.  Then cd over the site folder and install the packages globally:
> $ npm install -g

then install them locally in the folder
> $ npm install

To run Gulp:
> $ gulp

It will compile the scss files on each save.


