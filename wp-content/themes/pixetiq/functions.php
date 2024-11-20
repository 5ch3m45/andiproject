<?php
/**
 * Pixetiq functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Pixetiq
 * @since Pixetiq 1.0
 */

/**
 * Register block styles.
 */

if ( ! function_exists( 'pixetiq_block_styles' ) ):
	/**
	 * Register custom block styles
	 *
	 * @since Pixetiq 1.0
	 * @return void
	 */
	function pixetiq_block_styles() {

		register_block_style(
			'core/details',
			[
				'name'         => 'arrow-icon-details',
				'label'        => __( 'Arrow icon', 'pixetiq' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => ' .is-style-arrow-icon-details {
						padding-top: var(--wp--preset--spacing--10);
						padding-bottom: var(--wp--preset--spacing--10);
					}

					.is-style-arrow-icon-details summary {
						list-style-type: "\2193\00a0\00a0\00a0";
					}

					.is-style-arrow-icon-details[open]>summary {
						list-style-type: "\2192\00a0\00a0\00a0";
					}',
			]
		);
		register_block_style(
			'core/post-terms',
			[
				'name'         => 'pill',
				'label'        => __( 'Pill', 'pixetiq' ),
				/*
				 * Styles variation for post terms
				 * https://github.com/Wordpress/gutenberg/issues/24956
				 */
				'inline_style' => '.is-style-pill a, .is-style-pill span:not([class], [data-rich-text-placeholder]) {
						display: inline-block;
						background-color: var(--wp--preset--color--base-2);
						padding: 0.375rem 0.875rem;
						border-radius: var(--wp--preset--spacing--20);
					}

					.is-style-pill a:hover {
						background-color: var(--wp--preset--color--contrast-3);
					}',
			]
		);
		register_block_style(
			'core/list',
			[
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'pixetiq' ),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/Wordpress/gutenberg/issues/51480
				 */
				'inline_style' => 'ul.is-style-checkmark-list {
						list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			]
		);
		register_block_style(
			'core/navigation-link',
			[
				'name'         => 'arrow-link',
				'label'        => __( 'With arrow', 'pixetiq' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			]
		);
	}

endif;

add_action( 'init', 'pixetiq_block_styles' );

/**
 * Register pattern categories.
 */

if ( ! function_exists( 'pixetiq_pattern_categories' ) ):
	/**
	 * Register pattern categories
	 *
	 * @since Pixetiq 1.0
	 * @return void
	 */
	function pixetiq_pattern_categories() {

		register_block_pattern_category(
			'pixetiq_page',
			[
				'label'       => _x( 'Pixetiq Pages', 'Block pattern category', 'pixetiq' ),
				'description' => __( 'A collection of full page layouts.', 'pixetiq' ),
			]
		);
	}

endif;

add_action( 'init', 'pixetiq_pattern_categories' );

/**
 * Enqueue scripts and styles
 */

if ( ! function_exists( 'pixetiq_enqueue_scripts' ) ):
	function pixetiq_enqueue_scripts() {
		wp_enqueue_style( 'pixetiq-style', get_template_directory_uri() . '/assets/css/style.css', );
		wp_enqueue_style( 'bizcanvas-animatecss', get_template_directory_uri() . '/assets/css/animate.css');
		wp_enqueue_script('bizcanvas-wow-script', get_template_directory_uri() . '/assets/js/wow.js', array('jquery'));
		wp_enqueue_script('bizcanvas-main-script', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0.0', true);
	}

endif;

add_action( 'wp_enqueue_scripts', 'pixetiq_enqueue_scripts', 800 );

function pixetiq_override_elementor_global_colors( $response, $handler, $request ) {
	$route = $request->get_route();

	if ( '/elementor/v1/globals' !== $route ) {
		return $response;
	}

	$global_settings = wp_get_global_settings();
	$colors          = $global_settings['color']['palette']['theme'];
	$data            = $response->get_data();

	foreach ( $colors as $_color ) {
		$name  = $_color['name'];
		$slug  = $_color['slug'];
		$color = $_color['color'];

		// Remove hyphens from slug.
		$no_hyphens = str_replace( '-', '', $slug );

		if ( isset( $data['colors'][$no_hyphens] ) ) {
			$data['colors'][$no_hyphens] = [
				'id'    => esc_attr( $no_hyphens ),
				'title' => 'Pixetiq ' . $name,
				'value' => $color,
			];
		} elseif ( $data['colors']['text'] && 'body' === $slug ) {
			$data['colors']['text'] = [
				'id'    => 'text',
				'title' => 'Pixetiq ' . ' Body',
				'value' => $color,
			];
		} elseif ( $data['colors']['accent'] && 'info' === $slug ) {
			$data['colors']['accent'] = [
				'id'    => 'accent',
				'title' => 'Pixetiq ' . ' Accent',
				'value' => $color,
			];
		}
	}

	$response->set_data( $data );

	return $response;
}

add_action( 'rest_request_after_callbacks', 'pixetiq_override_elementor_global_colors', 999, 3 );