<?php
	@session_start();

	function doAuth ($val) {
		$_SESSION["auth"] = $val;
		header("Location: index.html");
	}

	if (! $_SESSION["auth"]) {
		$errorMsg = "Te agradecemos haberte comunicado con nosotros; lamentablemente estamos impedidos de darte";
		$errorMsg.= "acceso. De acuerdo a la legislación vigente, la comunicación de cigarrillos debe estar";
		$errorMsg.= "estrictamente dirigida a mayores de 18 años. Esperamos sepas entendernos.";
		exit($errorMsg);
	} elseif ($_SESSION["auth"]) {
		exit("true");
	} else {
		if (isset($_POST["submit"], $_POST["year"], $_POST["month"], $_POST["day"])) {
			if ($_POST["year"] == "prev_1980")
				doAuth(true);
			$day 	= int trim($_POST["day"]);
			$year  	= int trim($_POST["year"]);
			$month 	= int trim($_POST["month"]);
			
			$date   = new DateTime("$year-$month-$day")
			doAuth($date > date("Y-m-d", strtotime("18 years ago")))
		}
	}
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Nakhla Uruguay</title>
        <meta name="description" content="Nakhla Tabacos Uruguay">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <!-- build:css(.tmp) styles/main.css -->
        <link rel="stylesheet" href="styles/auth.css">
        <!-- endbuild -->
        <script src="bower_components/modernizr/modernizr.js"></script>

    </head>
	<body>
		<section id="auth">
			<h1></h1>
			<form>
				<h3>mes </h3>
				<select name="month" >
					<option value="1">Enero</option>
					<option value="2">Febrero</option>
					<option value="3">Marzo</option>
					<option value="4">Abril</option>
					<option value="5">Mayo</option>
					<option value="6">Junio</option>
					<option value="7">Julio</option>
					<option value="8">Agosto</option>
					<option value="9">Setiembre</option>
					<option value="10">Octubre</option>
					<option value="11">Noviembre</option>
					<option value="12">Diciembre</option>
				</select>
				<h3>día </h3>
				<select name="day" id="day">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
				</select>
				<h3>año </h3>
				<select name="year" id="year">
					<option>2013</option>
					<option>2012</option>
					<option>2011</option>
					<option>2010</option>
					<option>2009</option>
					<option>2008</option>
					<option>2007</option>
					<option>2006</option>
					<option>2005</option>
					<option>2004</option>
					<option>2003</option>
					<option>2002</option>
					<option>2001</option>
					<option>2000</option>
					<option>1999</option>
					<option>1998</option>
					<option>1997</option>
					<option>1996</option>
					<option>1995</option>
					<option>1994</option>
					<option>1993</option>
					<option>1992</option>
					<option>1991</option>
					<option>1990</option>
					<option>1989</option>
					<option>1988</option>
					<option>1987</option>
					<option>1986</option>
					<option>1985</option>
					<option>1984</option>
					<option>1983</option>
					<option>1982</option>
					<option>1981</option>
					<option>1980</option>
					<option value="prev_1980">Anterior a 1980</option>
				</select>
				<input type="submit" name="submit" value="Entrar">
			</form>
			<!--ATENCIÓN
			Te agradecemos haberte comunicado con nosotros; lamentablemente estamos impedidos de darte acceso. De acuerdo a la legislación vigente, la comunicación de cigarrillos debe estar estrictamente dirigida a mayores de 18 años. Esperamos sepas entendernos.-->
			<span>Seleccione su fecha de nacimiento.</span>
		</section>
		<footer>
		</footer>
	</body>
</html>