<?php

########################################################################
# Extension Manager/Repository config file for ext "t3blogjquery".
#
# Auto generated 01-02-2011 18:40
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'T3BLOG: original widgets using jQuery',
	'description' => 'The original widgets of the t3blog extension are useing jQuery instead of Ext JS now.',
	'category' => 'fe',
	'author' => 'Hauke Hain, Andrey Aksenov',
	'author_email' => 'hhpreuss@googlemail.com, aksenovaa@bk.ru',
	'shy' => '',
	'dependencies' => 'cms,t3blog',
	'conflicts' => '',
	'priority' => '',
	'module' => '',
	'state' => 'stable',
	'internal' => '',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'author_company' => '',
	'version' => '3.0.0-dev',
	'constraints' => array(
		'depends' => array(
			'cms' => '',
			't3blog' => '1.1.2',
			'typo3' => '4.3.0-0.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'_md5_values_when_last_written' => 'a:14:{s:9:"ChangeLog";s:4:"f13b";s:10:"README.txt";s:4:"ee2d";s:12:"ext_icon.gif";s:4:"d2de";s:14:"ext_tables.php";s:4:"2124";s:13:"locallang.xml";s:4:"7e55";s:12:"t3jquery.txt";s:4:"a6b5";s:14:"doc/manual.sxw";s:4:"efe9";s:24:"res/js/jquery-1.5.min.js";s:4:"63c1";s:27:"res/js/jquery-noConflict.js";s:4:"e206";s:23:"res/js/jquery.cookie.js";s:4:"d83d";s:24:"res/js/t3blog_archive.js";s:4:"571f";s:20:"res/js/t3blog_cat.js";s:4:"69d2";s:27:"static/jQuery/constants.txt";s:4:"4d04";s:23:"static/jQuery/setup.txt";s:4:"c7c4";}',
	'suggests' => array(
	),
);

?>