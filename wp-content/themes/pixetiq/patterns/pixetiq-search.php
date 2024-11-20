<?php
/**
 * Title: Search
 * Slug: pixetiq/pixetiq-search
 * Inserter: no
 */
?>

<!-- wp:group {"tagName":"main","align":"full","layout":{"type":"constrained"}} -->
<main class="wp-block-group alignfull"><!-- wp:query-title {"type":"search","textAlign":"center","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|10"}}},"fontFamily":"Inter","fontSize":"forty-px"} /-->

<!-- wp:search {"label":"Search","showLabel":false,"widthUnit":"%","buttonText":"Search","style":{"border":{"width":"1px","color":"#7f56d9","radius":"10px"}},"backgroundColor":"primary","fontSize":"medium"} /-->

<!-- wp:spacer {"height":"34px"} -->
<div style="height:34px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"metadata":{"name":"Blogs posts"},"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"0px","bottom":"0px","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"backgroundColor":"base-2","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-base-2-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-right:var(--wp--preset--spacing--50);padding-bottom:0px;padding-left:var(--wp--preset--spacing--50)"><!-- wp:columns {"metadata":{"name":"Blog"},"align":"wide","style":{"spacing":{"padding":{"right":"0","left":"0","top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"},"blockGap":{"top":"0px","left":"0px"}},"border":{"radius":"20px"}}} -->
<div class="wp-block-columns alignwide" style="border-radius:20px;padding-top:var(--wp--preset--spacing--50);padding-right:0;padding-bottom:var(--wp--preset--spacing--50);padding-left:0"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:query {"queryId":51,"query":{"perPage":10,"pages":0,"offset":"0","postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"enhancedPagination":true,"align":"wide","layout":{"type":"default"}} -->
<div class="wp-block-query alignwide"><!-- wp:group {"style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained","justifyContent":"center"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:post-template {"align":"full","style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"4/3","width":"100%","height":"","style":{"spacing":{"margin":{"bottom":"0"},"padding":{"bottom":"0"}},"border":{"width":"0px","style":"none","radius":{"topLeft":"16px","topRight":"16px","bottomLeft":"0px","bottomRight":"0px"}}}} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px","margin":{"top":"0"},"padding":{"top":"17px","left":"20px","right":"20px","bottom":"17px"}},"border":{"color":"#eff1f6","width":"1px","radius":{"topLeft":"0px","topRight":"0px","bottomLeft":"16px","bottomRight":"16px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-border-color" style="border-color:#eff1f6;border-width:1px;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-left-radius:16px;border-bottom-right-radius:16px;margin-top:0;padding-top:17px;padding-right:20px;padding-bottom:17px;padding-left:20px"><!-- wp:post-title {"level":1,"isLink":true,"style":{"layout":{"flexSize":"min(2.5rem, 3vw)","selfStretch":"fixed"},"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.4","textDecoration":"none"},"spacing":{"padding":{"right":"0","left":"0","top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0","left":"0","right":"0"}},"elements":{"link":{":hover":{"color":{"text":"var:preset|color|accent-6"}},"color":{"text":"#101828"}}},"color":{"text":"#101828"}},"fontFamily":"body"} /-->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"10px","bottom":"17px"}}}} -->
<div class="wp-block-buttons" style="margin-top:10px;margin-bottom:17px"><!-- wp:button {"backgroundColor":"base-2","textColor":"contrast","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"border":{"radius":"30px","color":"#eaecf0"},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"400"},"spacing":{"padding":{"left":"12px","right":"12px","top":"6px","bottom":"6px"}}},"className":"is-style-outline","fontFamily":"body"} -->
<div class="wp-block-button has-custom-font-size is-style-outline has-body-font-family" style="font-size:14px;font-style:normal;font-weight:400"><a class="wp-block-button__link has-contrast-color has-base-2-background-color has-text-color has-background has-link-color has-border-color wp-element-button" style="border-color:#eaecf0;border-radius:30px;padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px" href="#"><?php echo esc_html_e( 'Development', 'pixetiq');?></a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"base-2","textColor":"contrast","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"border":{"radius":"30px","color":"#eaecf0"},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"400"},"spacing":{"padding":{"left":"12px","right":"12px","top":"6px","bottom":"6px"}}},"className":"is-style-outline","fontFamily":"body"} -->
<div class="wp-block-button has-custom-font-size is-style-outline has-body-font-family" style="font-size:14px;font-style:normal;font-weight:400"><a class="wp-block-button__link has-contrast-color has-base-2-background-color has-text-color has-background has-link-color has-border-color wp-element-button" style="border-color:#eaecf0;border-radius:30px;padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px" href="#"><?php esc_html_e( 'Design', 'pixetiq');?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:separator {"align":"wide","style":{"color":{"background":"#eaecf0"},"spacing":{"margin":{"top":"20px","bottom":"15px"}}},"className":"is-style-default"} -->
<hr class="wp-block-separator alignwide has-text-color has-alpha-channel-opacity has-background is-style-default" style="margin-top:20px;margin-bottom:15px;background-color:#eaecf0;color:#eaecf0"/>
<!-- /wp:separator -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0.3em"}},"layout":{"type":"flex","justifyContent":"left"}} -->
<div class="wp-block-group"><!-- wp:post-date {"format":"M j, Y","isLink":true,"style":{"color":{"text":"#98a2b3"},"elements":{"link":{"color":{"text":"#98a2b3"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"400"}},"fontFamily":"body"} /-->

<!-- wp:paragraph {"textColor":"contrast-2"} -->
<p class="has-contrast-2-color has-text-color">—</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"contrast-2","fontSize":"small"} -->
<p class="has-contrast-2-color has-text-color has-small-font-size"><?php esc_html_e('by', 'pixetiq');?></p>
<!-- /wp:paragraph -->

<!-- wp:post-author-name {"isLink":true,"style":{"color":{"text":"#98a2b3"},"elements":{"link":{"color":{"text":"#98a2b3"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"400"}},"fontFamily":"body"} /-->

<!-- wp:post-terms {"term":"category","prefix":"in ","style":{"color":{"text":"#98a2b3"},"elements":{"link":{"color":{"text":"#98a2b3"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"400"}},"fontFamily":"body"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"0px","width":"0px","style":{"layout":[]}} -->
<div style="height:0px;width:0px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"space-between"}} -->
<!-- wp:query-pagination-previous /-->

<!-- wp:query-pagination-next /-->
<!-- /wp:query-pagination --></div>
<!-- /wp:query --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></main>
<!-- /wp:group -->