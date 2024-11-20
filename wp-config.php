<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'andiproject_db' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'password' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~U(th53~`H6?KaKP=:e[Et3Y)*rQ]JaqhM=)U=}%1VPT2q)g 7,gP^cC*O&Y0!$q' );
define( 'SECURE_AUTH_KEY',  'zzk*G}v;2_WsK$k=LKb@aU/zDqGk-V<[5#Z6+Mri3&MhGL~*x:N*UNtOX PsJryH' );
define( 'LOGGED_IN_KEY',    '<:OaTs]Gu~tz?_a=_X1J5yA]yN-A8E}Tl^Ajml`Zt_mC9vXIiv3)5~.>|E(e~h^F' );
define( 'NONCE_KEY',        'F2r3~Vr0Uh,G!tc+l}VfN@]?k&=L+UbC)7KDy`t2~[.Y!LI>l?6iQJB%hV@P72;^' );
define( 'AUTH_SALT',        'YL(_[0nF#Aj0 ZPDXu~W>=6m3C-b7RbVml:{8qV{#*)wa=/I]I!wIxy+H^6upU(@' );
define( 'SECURE_AUTH_SALT', 'HG!:/K1$>hx #v_{}V=5(sOt(sRIY-36}l=/&9LhiAVD}+Q^g]r@Y#|/a$A& -GU' );
define( 'LOGGED_IN_SALT',   'o7]vR~4|D>_e>RMY-p[3UN)goU%tm.pL!lWT24RF2$Bj#l1RY49ry2e.nWXD.6wW' );
define( 'NONCE_SALT',       'u?o).Sc@L^%qqOn2C)j[z!I**hO2|zY<}:aqvpWN;r#S*s$OeE6){CuyO;a9Kb]%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

define('FS_METHOD', 'direct'); 

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
