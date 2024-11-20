=== Counting Number Block ===
Contributors:      Mr2P
Tags:              Gutenberg, block, number, counter, animation
Requires PHP:      7.0.0
Requires at least: 5.9.0
Tested up to:      6.6
Stable tag:        1.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

This single-block plugin provides an animated counter effect for numbers. It's fast, lightweight, SEO-friendly, accessibility-ready and can be fit in any design.

== Description ==

Let's make your numbers stand out by animating them while still keeping them SEO-friendly and accessibility-ready. The number can be counted up or down.

=== Key features ===

* It can be counted up or down depending on the start value and the real value
* SEO and Accessibility ready - Screen readers will read the actual number value, not the animated one.
* It can be fit in any design
* Highly customizable with a large range of options like duration, separator, decimal, etc.
* You can animate it one time or multiple times whenever the block appears in the viewport
* You can provide a prefix and/or a suffix value
* The animated effect will not be shown in the reduced motion mode

Please take a look at [these custom block patterns](https://boldpatterns.net/keywords/number?utm_source=wp.org&utm_campaign=readme&utm_medium=link&utm_content=Counting+Number+Block) that use this block to see how it can be applied to real-world sites.

If this plugin is useful for you, please do a quick review and [rate it](https://wordpress.org/support/plugin/counting-number-block/reviews/#new-post) on WordPress.org to help us spread the word. I would very much appreciate it.

## Other plugins

Please check out my other plugins if you're interested:

- [Content Blocks Builder](https://wordpress.org/plugins/content-blocks-builder) - A tool to create blocks, patterns or variations easily for your site directly on the Block Editor.
- [Meta Field Block](https://wordpress.org/plugins/display-a-meta-field-as-block) - A block to display a meta field or an ACF field as a block. It can also be used in the Query Loop block.
- [Block Enhancements](https://wordpress.org/plugins/block-enhancements) - A plugin to add more useful features to blocks like icon, box-shadow, transform, hover style...
- [Icon separator](https://wordpress.org/plugins/icon-separator) - A tiny block just like the core/separator block but with the ability to add an icon to it.
- [SVG Block](https://wordpress.org/plugins/svg-block) - A block to insert inline SVG images easily and safely. It also bundles with more than 3000 icons and some common non-rectangular dividers.
- [Breadcrumb Block](https://wordpress.org/plugins/breadcrumb-block) - A simple breadcrumb trail block that supports JSON-LD structured data.
- [Better YouTube Embed Block](https://wordpress.org/plugins/better-youtube-embed-block) - Embed YouTube videos without slowing down your site.

The plugin is developed using @wordpress/create-block.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/counting-number-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Why and when would you need this plugin? =

If you want to highlight your numbers, you could use this plugin to make a counting effect.

= Does it fit in my design?

Absolutely! It is super simple. It only animates the number, you can put it in any layout blocks.

== Changelog ==

= 1.1.0 =
*Release Date - 30 June 2024*

* Improved - Support accessibility for the actual value
* Improved - Don't animate the number in the reduced motion mode
* Added    - Support clientNavigation interactivity
* Added    - Allow editing content attributes from the block toolbar
* Improved - Refactor the code
* Updated  - Tested up to WP 6.6

= 1.0.7 =
*Release Date - 10 August 2023*

* DEV - Add a CSS class named `is-number-animating` when it's counting
* DEV - Show the `startVal` at the beginning
* DEV - Refactor code

= 1.0.6 =
*Release Date - 22 March 2023*

* DEV - Make the block animate the trailing zero in decimal places

= 1.0.5 =
*Release Date - 31 January 2023*

* DEV - Add settings for disabling grouping, grouping separator, decimal separator
* DEV - Add more typography settings
* DEV - Add keywords for blocks

= 1.0.4 =
*Release Date - 16 October 2022*

* FIX - Refactor code to allow animate the number both scroll up & down

= 1.0.3 =
*Release Date - 16 September 2022*

* FIX - Change textdomain

= 1.0.1 =
*Release Date - 20 July 2022*

* FIX - Allow animating decimal numbers
* FIX - Animate on load

= 1.0.0 =
*Release Date - 13 July 2022*
