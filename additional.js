jQuery.validator.addMethod("isoCountryPhone", function (value) {
 
    try {
        // get ISO Country value and array;
        let formattedPhone = libphonenumber.format('+1' + document.getElementById('phone-dgp').value, 'INTERNATIONAL'); // format intl for lib
        let isoPhoneCountry = libphonenumber.findNumbers(formattedPhone, '', { v2: true })[0].number.country; // retrieve number culture inf
        // validate
        return isoPhoneCountry === value ? true : false

    } catch (e) {  return false;  }

}, 'Custom Error message');
