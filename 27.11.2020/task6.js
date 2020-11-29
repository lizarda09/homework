/*Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот
гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person,
не используя встроенный метод Object.assign и JSON.parse, то есть перебором свойств.*/
let  phoneProp, propValue, phone = {};
while(true){
    if(phoneProp===null){break;}
    else {
        phoneProp = prompt('Enter the property of phone ');
        if(phoneProp in phone){alert('This property is already exist');}
        else {
            propValue = prompt('Enter the value of '+ phoneProp);
            phone[phoneProp] = propValue;
        }
    }
}
let person = {
    name : 'Denis',
    age : 22,
    activity : 'student',
    device : phone,
};
let person2 = {};

for(let key in person){
    person2[key] = person[key];
}


