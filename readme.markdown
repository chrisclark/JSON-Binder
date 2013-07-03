A simple jQuery plugin to bind (and clear) json data to form fields, given a convention of corresponding JSON field names and CSS class names.

For instance, given this JSON string:

	var jsonData = eval("{'Name':'Chris',
					  'Car':'saab',
					  'Check1':true,
					  'Check2':false,
					  'Email':'chris@test.com'}";)

And this form:

	<div id="myForm">
		<div>Name:<label class="dfName clearMe"></label></div>
		<div>Email:<input type="text" class="dfEmail"></input></div>
		<div>Checked:<input type="checkbox" class="dfCheck1"></input></div>
		<div>Unchecked:<input type="checkbox" class="dfCheck2"></input></div>
		<div>Car:
			<select class="dfCar">
				<option value=""></option>
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>
			</select>
		</div>
	</div>

The form can be bound to the JSON thusly:

	$('#myForm').BindJson(jsonData, 'df');

The second argument is a prefix you can provide for mapping the JSON values to the corresponding CSS class names.

The form can be cleared like this:

	$('#myForm').ClearDataFields('clearMe');

This will only clear fields with the clearMe CSS class. This is necessary because some forms that are bound (or cleared) are not necessarily form fields, but perhaps labels or spans.
				  
You can try it out via the jsfiddle here:
JSFiddle: http://jsfiddle.net/cbPnq/2/

Or with demo.html in the repo.
