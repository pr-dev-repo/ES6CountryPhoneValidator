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
                    required: 'Este dato es requerido',
                },
                'country-code': {
                    required: 'Este dato es requerido',
                    isoCountryPhone: 'El número de teléfono no coincide con el pasi seleccionado',
                },
            }
        });
     },
  };
