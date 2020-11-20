/*условие

'use strict';

var x = prompt('Введите Х', '1')
y = prompt('Введите Y', '1');

alert( 'Сумма: ' + x + y );
*/


//решение
'use strict';

var x = prompt('Введите Х', '1'),
    y = prompt('Введите Y', '1');

alert('Сумма: ' + (+x + +y));