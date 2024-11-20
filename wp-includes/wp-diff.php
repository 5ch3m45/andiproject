<?php
/**
 * WordPress Diff bastard child of old MediaWiki Diff Formatter.
 *
 * Basically all that remains is the table structure and some method names.
 *
 * @package WordPress
 * @subpackage Diff
 */

if ( ! class_exists( 'Text_Diff', false ) ) {
	/** Text_Diff class */
	require ABSPATH . WPINC . '/Text/Diff.php';
	/** Text_Diff_Renderer class */
	require ABSPATH . WPINC . '/Text/Diff/Renderer.php';
	/** Text_Diff_Renderer_inline class */
	require ABSPATH . WPINC . '/Text/Diff/Renderer/inline.php';
<<<<<<< HEAD
=======
	/** Text_Exception class */
	require ABSPATH . WPINC . '/Text/Exception.php';
>>>>>>> 2b44096 (initial commit 2)
}

require ABSPATH . WPINC . '/class-wp-text-diff-renderer-table.php';
require ABSPATH . WPINC . '/class-wp-text-diff-renderer-inline.php';
