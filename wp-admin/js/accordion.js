/**
 * Accordion-folding functionality.
 *
 * Markup with the appropriate classes will be automatically hidden,
 * with one section opening at a time when its title is clicked.
 * Use the following markup structure for accordion behavior:
 *
 * <div class="accordion-container">
 *	<div class="accordion-section open">
<<<<<<< HEAD
 *		<h3 class="accordion-section-title"></h3>
 *		<div class="accordion-section-content">
 *		</div>
 *	</div>
 *	<div class="accordion-section">
 *		<h3 class="accordion-section-title"></h3>
 *		<div class="accordion-section-content">
 *		</div>
 *	</div>
 *	<div class="accordion-section">
 *		<h3 class="accordion-section-title"></h3>
 *		<div class="accordion-section-content">
=======
 *		<h3 class="accordion-section-title"><button type="button" aria-expanded="true" aria-controls="target-1"></button></h3>
 *		<div class="accordion-section-content" id="target">
 *		</div>
 *	</div>
 *	<div class="accordion-section">
 *		<h3 class="accordion-section-title"><button type="button" aria-expanded="false" aria-controls="target-2"></button></h3>
 *		<div class="accordion-section-content" id="target-2">
 *		</div>
 *	</div>
 *	<div class="accordion-section">
 *		<h3 class="accordion-section-title"><button type="button" aria-expanded="false" aria-controls="target-3"></button></h3>
 *		<div class="accordion-section-content" id="target-3">
>>>>>>> 535c0c1 (initial commit)
 *		</div>
 *	</div>
 * </div>
 *
 * Note that any appropriate tags may be used, as long as the above classes are present.
 *
 * @since 3.6.0
 * @output wp-admin/js/accordion.js
 */

( function( $ ){

	$( function () {

		// Expand/Collapse accordion sections on click.
<<<<<<< HEAD
		$( '.accordion-container' ).on( 'click keydown', '.accordion-section-title', function( e ) {
			if ( e.type === 'keydown' && 13 !== e.which ) { // "Return" key.
				return;
			}

			e.preventDefault(); // Keep this AFTER the key filter above.

=======
		$( '.accordion-container' ).on( 'click', '.accordion-section-title button', function() {
>>>>>>> 535c0c1 (initial commit)
			accordionSwitch( $( this ) );
		});

	});

	/**
	 * Close the current accordion section and open a new one.
	 *
	 * @param {Object} el Title element of the accordion section to toggle.
	 * @since 3.6.0
	 */
	function accordionSwitch ( el ) {
		var section = el.closest( '.accordion-section' ),
<<<<<<< HEAD
			sectionToggleControl = section.find( '[aria-expanded]' ).first(),
=======
>>>>>>> 535c0c1 (initial commit)
			container = section.closest( '.accordion-container' ),
			siblings = container.find( '.open' ),
			siblingsToggleControl = siblings.find( '[aria-expanded]' ).first(),
			content = section.find( '.accordion-section-content' );

		// This section has no content and cannot be expanded.
		if ( section.hasClass( 'cannot-expand' ) ) {
			return;
		}

		// Add a class to the container to let us know something is happening inside.
		// This helps in cases such as hiding a scrollbar while animations are executing.
		container.addClass( 'opening' );

		if ( section.hasClass( 'open' ) ) {
			section.toggleClass( 'open' );
			content.toggle( true ).slideToggle( 150 );
		} else {
			siblingsToggleControl.attr( 'aria-expanded', 'false' );
			siblings.removeClass( 'open' );
			siblings.find( '.accordion-section-content' ).show().slideUp( 150 );
			content.toggle( false ).slideToggle( 150 );
			section.toggleClass( 'open' );
		}

		// We have to wait for the animations to finish.
		setTimeout(function(){
		    container.removeClass( 'opening' );
		}, 150);

		// If there's an element with an aria-expanded attribute, assume it's a toggle control and toggle the aria-expanded value.
<<<<<<< HEAD
		if ( sectionToggleControl ) {
			sectionToggleControl.attr( 'aria-expanded', String( sectionToggleControl.attr( 'aria-expanded' ) === 'false' ) );
=======
		if ( el ) {
			el.attr( 'aria-expanded', String( el.attr( 'aria-expanded' ) === 'false' ) );
>>>>>>> 535c0c1 (initial commit)
		}
	}

})(jQuery);
