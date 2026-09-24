<?php
//echo 'config';
$n0=19;//number of instructions
$list0Size = 10000;//size of list0
$list1Size = 10000;//size of list1
$inst=array(
	'IDを入力してください。',
	'患者氏名を入力してください。',
	'性別を入力してください。',
	'出生年月日を入力してください。',
	'年齢は自動入力されます。',
	'郵便番号を入力してください。',
	'住所を入力してください。',
	'診断名１を入力してください。',
	'診断名２を入力してください。',
	'診断名３を入力してください。',
	'診断名４を入力してください。',
	'診断名５を入力してください。',
	'診断名６を入力してください。',
	'診断名７を入力してください。',
	'付記を入力しkeyWord checkをクリックししてください。keyWord checkが終わったら文章修正ボタンを押すと入力完成です。',
	'記述日を入力してください。',
	'当院名を入力してください。',
	'当科名を入力してください。',
	'主治医名を入力してください。'
	
);

$itemIndex=
[
		'ID',
		'患者氏名',
		'性',
		'出生年月日',
		'歳',
		'〒',
		'住所',
		'診断１',
		'診断２',
		'診断３',
		'診断４',
		'診断５',
		'診断６',
		'付記',
		'記載日',
		'病院名',
		'診療科',
		'担当医'

];

$itemAlone=[0,1,4,5,6];
$itemReference=[2,7,8,9,10,13,14,15];

$dateMaker=[3,12];
$documentMaker=[11];
$sender=array('旭川荘南愛媛病院','小児神経科','森本武彦');

$selectWordPatternArray=[
	'/お[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}\x{20000}-\x{2A6DF}]{1,5}[にはをが]/u',
	'/[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}\x{20000}-\x{2A6DF}]{2,}/u',
	'/この[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}\x{20000}-\x{2A6DF}]{1,5}[はにをが]/u',
	'/[A-Za-zァ-ヶー゛゜]{2,}/u',
	'/client/',
	'/令和y年m月d日/',
	'/平成y年m月d日/',
	'/昭和y年m月d日/',
	'/西暦y年m月d日/',
	'/[0-9０-９]+[歳才]/u'
];

$replaceParams=
[
	['/[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}\x{20000}-\x{2A6DF}]{1,5}[\x{4E00}-\x{9FFF}\x{3400}-\x{4DBF}\x{20000}-\x{2A6DF}-\x{3041}-\x{3096}]{2,5}(さん|さま|様)/u','client'],
	['/令和\s*([0-9０-９]{1,2})\s*年\s*([0-9０-９]{1,2})\s*月\s*([0-9０-９]{1,2})\s*日/u','令和y年m月d日'],
	['/平成[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/u','平成y年m月d日'],
	['/昭和[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/u','昭和y年m月d日'],
	['/西暦[0-9０-９]+年[0-9０-９]+月[0-9０-９]+日/u','西暦y年m月d日'],
	['/本児|患児|患者|利用者/u','client'],
	['/[0-9０-９]+[歳才]/u','y歳']
];

//$databasePath='C:\Apache24\htdocs\myAppli\docMaker\database\medcertificateV9';
$databasePath='C:\Apache24\htdocs\myAppli\docMaker\database\mCertificate';
//$currentPath=__DIR__;


$pathForClientData='C:\Apache24\htdocs\myAppli\clientData';

$referenceNumber=[2,7,8,9,10,13,14,15];
$pathToRef='reference';
$selfPath = 'http://localhost/myAppli/docMaker/medCertificate-Prototype/index.php';
$clientManagerPath = '../clientManager-Prototype/index.php';
$registerPath = 'C:/Apache24/htdocs/myAppli/docMaker/nameRegister';
?>