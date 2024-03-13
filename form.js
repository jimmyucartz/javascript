const submitForm = (e) => {
  e.preventDefault();
  alert("Submitted Form Successfully");
};

const validateForm = (e) => {
  e.preventDefault();
  let form = document.forms.validate_form;
  if (form.fname.value.length > 10) {
    alert("First Name Length must be less than or equal to 10");
    return;
  }
  if (form.fname.value.length <= 3) {
    alert("First name Length must be greater than or equal to 4");
    return;
  }
  if (form.lname.value.length > 10) {
    alert("Last Name Length must be less than or equal to 10");
    return;
  }
  if (form.lname.value.length <= 3) {
    alert("Last name Length must be greater than or equal to 4");
    return;
  }
  if (form.lname.value.length <= 3) {
    alert("Last name must be greater than or equal to 4");
    return;
  }
  if (form.age.value < 18 || form.age.value > 60) {
    alert("Age must be between 18 and 60 ");
    return;
  }
  alert("Submitted Form Successfully");
  form.reset();
};
