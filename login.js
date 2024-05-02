document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  document.querySelector("#signin").addEventListener("click", function(e){  e.preventDefault();});
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mobile = document.getElementById('mobile').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    let term = document.getElementById('term').checked;
  
    if (!name || !email || !password || !mobile || !address || !pincode || !term) {
        document.getElementById('nameError').textContent = name ? '' : 'Name is required';
        document.getElementById('emailError').textContent = email ? '' : 'Email is required';
        document.getElementById('passwordError').textContent = password ? '' : 'Password is required';
        document.getElementById('mobileError').textContent = mobile ? '' : 'Mobile Number is required';
        document.getElementById('addressError').textContent = address ? '' : 'Address is required';
        document.getElementById('pincodeError').textContent = pincode ? '' : 'Pincode is required';
        document.getElementById('termError').textContent = term ? '' : 'You must accept the privacy statement';
        return;
    }
  
    let userData = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        pincode: pincode,
    }
  // Remove this line from your script.js file
document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'block';
});