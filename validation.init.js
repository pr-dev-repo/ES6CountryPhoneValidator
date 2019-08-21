validation = {
    // INIT
    init: function () {
        $('#countries').validate({
            rules: {
                'phone-dgp': {
                    required: true,
                },
                'country-code': {
                    required: true,
                    isoCountryPhone: true,
                },
            },
            messages: {
                'phone-dgp': {
                    required: 'some error',
                },
                'country-code': {
                    required: 'some error',
                    isoCountryPhone: 'some error',
                },
            }
        });
     },
  };
