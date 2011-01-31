<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}
t3lib_extMgm::addStaticFile($_EXTKEY,'static/jQuery/', 't3blog: jQuery');

t3lib_extMgm::addStaticFile($_EXTKEY,'static/jquery_library/', 't3blog: jQuery library');

t3lib_extMgm::addStaticFile($_EXTKEY,'static/jquery_plugin_cookie/', 't3blog: jQuery plugin cookie');

t3lib_extMgm::addStaticFile($_EXTKEY,'static/jquery_archive/', 't3blog: jQuery archive');

?>