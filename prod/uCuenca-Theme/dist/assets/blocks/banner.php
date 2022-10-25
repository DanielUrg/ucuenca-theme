<?php

if ( ! $attributes['imgURL'] ) {
	$attributes['imgURL'] = get_theme_file_uri( '/images/library-hero.jpg' );
}

?>

<div class="page-banner">
	<div style="background-image: url('<?php echo $attributes['imgURL']; ?>')"></div>
	<div ">
		<?php echo $content; ?>
	</div>
</div>
