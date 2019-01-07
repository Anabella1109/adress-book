// business logic
function Contact(first, last,phone,email,adress) {
  this.firstName = first;
  this.lastName = last;
  this.userEmail=email;
  this.phonenumber=phone;
  this.userAdress=adress;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhone=$("input#new-phone-number").val();
    var inputtedEmail=$("input#new-e-mail").val();
    var inputtedAdress=$("input#new-adress").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedPhone,inputtedEmail,inputtedAdress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone").text(newContact.phonenumber);
      $(".email").text(newContact.userEmail);
      $(".adress").text(newContact.userAdress);
    });  
  });
}); user