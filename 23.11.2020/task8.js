/*9. Напишите проверку пароля, введенного пользователем. Если введенный пароль правильный,
то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа
снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не
нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены,
что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили
авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля
 */
let pass, correctPass='qwerty';
while (true){
    pass=prompt('Enter the pass');
    if(pass!==null){
        if(pass===correctPass){
            alert('Вы успешно авторизованы');
            break;
        }
    }else {
        let question=confirm('Вы уверены что хотите отменить авторизацию?');
        if(question===true){
            alert('Вы отменили авторизацию');
            break;
        }
        continue;
    }
}

