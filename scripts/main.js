Parse.initialize("lsBN1UCztYJ3oHGSNwf5Mtz66fuF0yYuoO5MBTZ7", "kMRSoP1rYhxb0S1hJQjdLWphPZ3atZpkcvs9WS4O");

$('.signupform').on('Register', function  (event) {

event.preventDefault();

var user = new Parse.User();
user.set("username", $("#name").val());
user.set("password", $("#password").val());
user.set("email", $("#email").val());


user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.

  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

$(this).trigger('reset');

});

$('.signIn').on('login', function  (event) {

event.preventDefault();

var uname = $("#username").val();
var passw = $("#password2").val();

Parse.User.logIn(uname, passw, {
  success: function(user) {
    // Do stuff after successful login.
    alert("Signed In");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

$(this).trigger('reset');
});