App.Person=Ember.Object.extend({
	say:function(){
		console.log('this is person');
		console.log('fullName=',this.get('fullName'));
	},

	firstName:'jin',

	lastName:'jiaxing',

	fullName:function(){
		return this.get('firstName')+" "+this.get('lastName');
	}.property('firstName','lastName'),

	fullNameChange:function(){
		console.log('fullName is Change');
	}.observes('fullName')
})