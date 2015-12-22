
/**
 * Constructor of a Board Space object. It contains info about the space position and the color to be taken by. 
 *	
 * @constructor BoardSpace
 * @param  {CGFScene}	scene	current scene
 * @param  {int}		x		border x position
 * @param  {int}		y		border y position
 * @param  {CGFObject}	cube		this cube object is passed as argument to save resources (see initPrimitives method in Board.js)
 *
 */

function BoardSpace(scene, x, y, cube) {
	
	CGFobject.call(this,scene);
	
	this.scene = scene;
	this.x = x;
	this.y = y;
	this.space = cube;

	this.getColorByPos(x, y);

	this.transformMatrix = mat4.create();
	mat4.identity(this.transformMatrix);
	var posx = 5 + 2.5 * this.x; var posy =  5 + 2.5 * this.y;
	mat4.translate(this.transformMatrix, this.transformMatrix, [posx, 0, posy]);

}


BoardSpace.prototype = Object.create(CGFobject.prototype);
BoardSpace.prototype.constructor= BoardSpace;

/**
 * Displays spaces by applying the right appearance and previously calculated transform matrixes. 
 *	
 * @method display
 *
 */

BoardSpace.prototype.display = function () {

	this.scene.pushMatrix();
	this.appearance.apply();
	this.scene.multMatrix(this.transformMatrix);
	this.space.display();
	this.scene.popMatrix();

}

/**
 * Gets the appearance to be applied according to the space position, this appearances are created in the scene file because they are used often.
 *	
 * @method getColorByPos
 * @param {int}		x		board x position
 * @param {int}		y		board y position
 *
 */

BoardSpace.prototype.getColorByPos = function (x, y) {

	if (x == 0 || y == 0 
		|| x == 12 || y == 12)  {

		this.appearance = this.scene.redMaterial;

	} if ( (x == 1 || y == 1
	 		|| x == 11 || y == 11 ) &&
	 	(x > 0 && y > 0 
	 		&& x < 12 && y < 12) ) {

		this.appearance = this.scene.orangeMaterial;

	} if ( ( x == 2 || y == 2
	 		|| x == 10 || y == 10 ) &&
	 	(x > 1 && y > 1 
	 		&& x < 11 && y < 11) ) {

		this.appearance = this.scene.yellowMaterial;

	} if ( ( x == 3 || y == 3
	 		|| x == 9 || y == 9 ) &&
	 	(x > 2 && y > 2 
	 		&& x < 10 && y < 10) ) {

		this.appearance = this.scene.greenMaterial;

	} if ( ( x == 4 || y == 4
	 		|| x == 8 || y == 8 ) &&
	 	(x > 3 && y > 3 
	 		&& x < 9 && y < 9) ) {

		this.appearance = this.scene.blueMaterial;

	} if ( ( x == 5 || y == 5
	 		|| x == 7 || y == 7 ) &&
	 	(x > 4 && y > 4 
	 		&& x < 8 && y < 8) ) {

		this.appearance = this.scene.purpleMaterial;

	} if ( x == 6 && y == 6) {

		this.appearance = this.scene.lilacMaterial;

	}

}