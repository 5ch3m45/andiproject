<?php
/**
 * Feed API: WP_Feed_Cache_Transient class
 *
 * @package WordPress
 * @subpackage Feed
 * @since 4.7.0
 */

/**
 * Core class used to implement feed cache transients.
 *
 * @since 2.8.0
<<<<<<< HEAD
 */
#[AllowDynamicProperties]
class WP_Feed_Cache_Transient {
=======
 * @since 6.7.0 Now properly implements the SimplePie\Cache\Base interface.
 */
#[AllowDynamicProperties]
class WP_Feed_Cache_Transient implements SimplePie\Cache\Base {
>>>>>>> 535c0c1 (initial commit)

	/**
	 * Holds the transient name.
	 *
	 * @since 2.8.0
	 * @var string
	 */
	public $name;

	/**
	 * Holds the transient mod name.
	 *
	 * @since 2.8.0
	 * @var string
	 */
	public $mod_name;

	/**
	 * Holds the cache duration in seconds.
	 *
	 * Defaults to 43200 seconds (12 hours).
	 *
	 * @since 2.8.0
	 * @var int
	 */
	public $lifetime = 43200;

	/**
<<<<<<< HEAD
	 * Constructor.
	 *
	 * @since 2.8.0
	 * @since 3.2.0 Updated to use a PHP5 constructor.
	 *
	 * @param string $location  URL location (scheme is used to determine handler).
	 * @param string $filename  Unique identifier for cache object.
	 * @param string $extension 'spi' or 'spc'.
	 */
	public function __construct( $location, $filename, $extension ) {
		$this->name     = 'feed_' . $filename;
		$this->mod_name = 'feed_mod_' . $filename;
=======
	 * Creates a new (transient) cache object.
	 *
	 * @since 2.8.0
	 * @since 3.2.0 Updated to use a PHP5 constructor.
	 * @since 6.7.0 Parameter names have been updated to be in line with the `SimplePie\Cache\Base` interface.
	 *
	 * @param string                           $location URL location (scheme is used to determine handler).
	 * @param string                           $name     Unique identifier for cache object.
	 * @param Base::TYPE_FEED|Base::TYPE_IMAGE $type     Either `TYPE_FEED` ('spc') for SimplePie data,
	 *                                                   or `TYPE_IMAGE` ('spi') for image data.
	 */
	public function __construct( $location, $name, $type ) {
		$this->name     = 'feed_' . $name;
		$this->mod_name = 'feed_mod_' . $name;
>>>>>>> 535c0c1 (initial commit)

		$lifetime = $this->lifetime;
		/**
		 * Filters the transient lifetime of the feed cache.
		 *
		 * @since 2.8.0
		 *
		 * @param int    $lifetime Cache duration in seconds. Default is 43200 seconds (12 hours).
<<<<<<< HEAD
		 * @param string $filename Unique identifier for the cache object.
		 */
		$this->lifetime = apply_filters( 'wp_feed_cache_transient_lifetime', $lifetime, $filename );
	}

	/**
	 * Sets the transient.
	 *
	 * @since 2.8.0
	 *
	 * @param SimplePie $data Data to save.
	 * @return true Always true.
	 */
	public function save( $data ) {
		if ( $data instanceof SimplePie ) {
=======
		 * @param string $name     Unique identifier for the cache object.
		 */
		$this->lifetime = apply_filters( 'wp_feed_cache_transient_lifetime', $lifetime, $name );
	}

	/**
	 * Saves data to the transient.
	 *
	 * @since 2.8.0
	 *
	 * @param array|SimplePie\SimplePie $data Data to save. If passed a SimplePie object,
	 *                                        only cache the `$data` property.
	 * @return true Always true.
	 */
	public function save( $data ) {
		if ( $data instanceof SimplePie\SimplePie ) {
>>>>>>> 535c0c1 (initial commit)
			$data = $data->data;
		}

		set_transient( $this->name, $data, $this->lifetime );
		set_transient( $this->mod_name, time(), $this->lifetime );
		return true;
	}

	/**
<<<<<<< HEAD
	 * Gets the transient.
	 *
	 * @since 2.8.0
	 *
	 * @return mixed Transient value.
=======
	 * Retrieves the data saved in the transient.
	 *
	 * @since 2.8.0
	 *
	 * @return array Data for `SimplePie::$data`.
>>>>>>> 535c0c1 (initial commit)
	 */
	public function load() {
		return get_transient( $this->name );
	}

	/**
	 * Gets mod transient.
	 *
	 * @since 2.8.0
	 *
<<<<<<< HEAD
	 * @return mixed Transient value.
=======
	 * @return int Timestamp.
>>>>>>> 535c0c1 (initial commit)
	 */
	public function mtime() {
		return get_transient( $this->mod_name );
	}

	/**
	 * Sets mod transient.
	 *
	 * @since 2.8.0
	 *
	 * @return bool False if value was not set and true if value was set.
	 */
	public function touch() {
		return set_transient( $this->mod_name, time(), $this->lifetime );
	}

	/**
	 * Deletes transients.
	 *
	 * @since 2.8.0
	 *
	 * @return true Always true.
	 */
	public function unlink() {
		delete_transient( $this->name );
		delete_transient( $this->mod_name );
		return true;
	}
}
