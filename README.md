# Customiser votre selectBox
 
Un petit script permettant de customiser de A à Z sans vous compliquer la vie votre SelectBox.

Complètement personnalisable en CSS

L'option de redirection est également disponible en ajoutant method="redirect" à votre classe showOptions

Exemple ci dessous :

<div class="boxInput SelectBox">
	<input type="hidden" value="" name="exemple" value="" />
	<div class="inputText">International</div>
	<div class="button"><img src="button_arrow_bottom.jpg"></div>
	<div method="redirect" class="showOptions">
		<span value="/de/">Allemagne</span>
		<span value="/ru/">Russie</span>
	</div>
</div>

Enjoy
