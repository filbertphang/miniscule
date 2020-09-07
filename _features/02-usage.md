---
title: Configuration
---
## Landing
No content is required in `index.html`, however, there are some tags in the front matter that you may find useful:
```yaml
layout: home

# title and description that will appear at the top of the home page
# you can include HTML
landing-title: "this is miniscule."
landing-description: >
    miniscule is a clean and light one-page theme for jekyll with an easy-to-customize layout.
    <a style="font-weight: 600" href="https://www.github.com/filbertphang/miniscule">Install now.</a>

# thumbnail displayed next to the landing title and description
thumb: https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png
```

The social links can be configured in `_config.yml`:
```yml
miniscule:
    social_links:
        twitter: jekyllrb
        github:  "filbertphang/miniscule"
        # devto: jekyll
        # dribbble: jekyll
        # facebook: jekyll
        ...
    
```
The full list of social media icons can be found [here](https://github.com/filbertphang/miniscule/blob/master/_config.yml#L22). Do note that this is the same as those supported by the original [minima](https://github.com/jekyll/minima) theme.

## Features
To add content to the home page, create a `_features` folder in your site's root directory. All pages (markdown or HTML) added to this folder will be rendered on the home page in order. Front matter tags for configuration:
```yml
# title of the feature. will be displayed in <h1> 
title: Installation 

# false by default. does not wrap your feature in a 'wrapper' div, 
# allowing you to ignore styles specific to the 'wrapper' class
no-content-wrapper: false
```

## Blog Posts
By default, posts will be served from the `_posts` directory.

To display posts on your home page, create a feature and add this to its content: 
```liquid
{% raw %}{%- include posts.html -%}{% endraw %}
```

To display posts on a standalone page, just set `layout: blog` in the front matter 

Posts-related front matter tags for configuration:
```yml
# will only display the most recent posts up till that limit
# if undefined, will display all posts.
post-limit: 4

# if post-limit and post-page-url is defined, will add a "view all posts" button
# which links to the URL defined in post-page-url
post-page-url: blog
```
An example of the post list being displayed can be found at the bottom of this page.

## Header & Footer
Configuration for header and footer can be found in `_config.yml`:
```yml
miniscule:
    # when on the home page (index.html), navbar links to the various
    # features on the home page.
    # navbar will still link to other pages of the site when NOT on the
    # home page (or if this setting is disabled!)
    one_page_header: true 

    # enables the slide-out footer
    # see https://css-tricks.com/the-slideout-footer/
    slide_out_footer: false
    ...
```


## Themes
Miniscule uses the 4 base minima themes: `classic`, `dark`, `solarized`, and `solarized-dark`, and uses `classic` by default.

To change, create a file called `assets/css/style.scss` and add the following contents to it:
```scss
---
# Front matter
---
@import "themes/<YOUR THEME HERE>"; 
@import "main";
```
To use your own theme, add it under `_sass/themes/` and change `<YOUR THEME HERE>` to the name of your theme file.

