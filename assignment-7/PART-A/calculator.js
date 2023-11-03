$(document).ready(function () {
    function showError(field, message) {
        $('#' + field + '-error').text(message).show();
    }

    function hideError(field) {
        $('#' + field + '-error').text('').hide();
    }

    function validateInput(input) {
        var value = input.val();
        hideError(input.attr('id'));
        var isValid = true;

        if (value.trim() === '') {
            showError(input.attr('id'), 'This field is required.');
            isValid = false;
        } else if (!$.isNumeric(value)) {
            showError(input.attr('id'), 'Please enter a valid number.');
            isValid = false;
        } else if (parseFloat(value) === Infinity || parseFloat(value) === -Infinity) {
            showError(input.attr('id'), 'Please enter a finite number.');
            isValid = false;
        }

        return isValid;
    }
    
    //arrow function for computing the operation's result
    const compute = (operand) => {
        const isValidInput = validateInput($('#number1')) && validateInput($('#number2'));
    
        if (isValidInput) {
            const num1 = parseFloat($('#number1').val());
            const num2 = parseFloat($('#number2').val());
            let result;
    
            switch (operand) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num1 / num2;
                    break;
                default:
                    result = 'Invalid Operation';
                    break;
            }
    
            $('#number3').val(result);
        } else {
            $('#number3').val('');
        }
    };
    

    $('#number1, #number2').on('input', function () {
        validateInput($(this));
    });

    $('#number1, #number2').on('blur', function () {
        validateInput($(this));
    });

    $('#add').click(function () {
        compute('add');
    });

    $('#subtract').click(function () {
        compute('subtract');
    });

    $('#multiply').click(function () {
        compute('multiply');
    });

    $('#divide').click(function () {
        compute('divide');
    });
});