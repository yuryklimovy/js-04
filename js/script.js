var container = document.createElement('div');
container.className = 'container';

var row1 = document.createElement('div');
row1.className = 'row';

var row2 = document.createElement('div');
row2.className = 'row';

var colsm12 = document.createElement('div');
colsm12.className = 'col-sm-12';

var colsm4 = document.createElement('div');
colsm4.className = 'col-sm-4';

var h3 = document.createElement('h3');
h3.className = 'text-center';
h3.innerHTML = 'Тест по программированию';

var form = document.createElement('form');
form.setAttribute('role', 'form');
form.method = 'post';

var question1 = document.createElement('h4')
question1.className = 'question1';
question1.innerHTML = '1. Вопрос №1';

var question2 = document.createElement('h4')
question2.className = 'question1';
question2.innerHTML = '2. Вопрос №2';

var question3 = document.createElement('h4')
question3.className = 'question3';
question3.innerHTML = '3. Вопрос №3';

var checkbox1 = document.createElement('div');
checkbox1.className = 'checkbox col-sm-push-2';

var checkbox2 = document.createElement('div');
checkbox2.className = 'checkbox col-sm-push-2';

var checkbox3 = document.createElement('div');
checkbox3.className = 'checkbox col-sm-push-2';

var checkbox4 = document.createElement('div');
checkbox4.className = 'checkbox col-sm-push-2';

var checkbox5 = document.createElement('div');
checkbox5.className = 'checkbox col-sm-push-2';

var checkbox6 = document.createElement('div');
checkbox6.className = 'checkbox col-sm-push-2';

var label1 = document.createElement('label');
label1.setAttribute('for', 'label1');
label1.innerHTML = 'Ответ на вопрос №1';

var label2 = document.createElement('label');
label2.setAttribute('for', 'label2');
label2.innerHTML = 'Ответ на вопрос №2';

var label3 = document.createElement('label');
label3.setAttribute('for', 'label3');
label3.innerHTML = 'Ответ на вопрос №3';

var label4 = document.createElement('label');
label4.setAttribute('for', 'label4');
label4.innerHTML = 'Ответ на вопрос №4';

var label5 = document.createElement('label');
label5.setAttribute('for', 'label5');
label5.innerHTML = 'Ответ на вопрос №5';

var label6 = document.createElement('label');
label6.setAttribute('for', 'label6');
label6.innerHTML = 'Ответ на вопрос №6';

var input1 = document.createElement('input');
input1.setAttribute('type', 'checkbox');
input1.setAttribute('value', 'check1');

var input2 = document.createElement('input');
input2.setAttribute('type', 'checkbox');
input2.setAttribute('value', 'check2');

var input3 = document.createElement('input');
input3.setAttribute('type', 'checkbox');
input3.setAttribute('value', 'check3');

var input4 = document.createElement('input');
input4.setAttribute('type', 'checkbox');
input4.setAttribute('value', 'check4');

var input5 = document.createElement('input');
input5.setAttribute('type', 'checkbox');
input5.setAttribute('value', 'check5');

var input6 = document.createElement('input');
input6.setAttribute('type', 'checkbox');
input6.setAttribute('value', 'check6');

document.body.appendChild(container);
container.appendChild(row1);
container.appendChild(row2);
row1.appendChild(colsm12);
colsm12.appendChild(h3);
row2.appendChild(colsm4);
colsm4.appendChild(form);
form.appendChild(question1);
form.appendChild(checkbox1);
checkbox1.appendChild(input1);
checkbox1.appendChild(label1);
form.appendChild(checkbox2);
checkbox2.appendChild(input2);
checkbox2.appendChild(label2);
form.appendChild(checkbox3);
checkbox3.appendChild(input3);
checkbox3.appendChild(label3);
form.appendChild(question2);
form.appendChild(checkbox4);
checkbox4.appendChild(input4);
checkbox4.appendChild(label4);
form.appendChild(checkbox5);
checkbox5.appendChild(input5);
checkbox5.appendChild(label5);
form.appendChild(checkbox6);
checkbox6.appendChild(input6);
checkbox6.appendChild(label6);
form.appendChild(question3);
