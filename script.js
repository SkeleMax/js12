// ЗАВДАННЯ 1 
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'reading',
  premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}


// ЗАВДАННЯ 2 
function countProps(obj) {
  return Object.keys(obj).length;
}

console.log('\nКількість властивостей:', countProps(user));


//  ЗАВДАННЯ 3
function findBestEmployee(employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestEmployee = name;
    }
  }
  return bestEmployee;
}

const employees = {
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99
};

console.log('\nНайкращий співробітник:', findBestEmployee(employees));


//ЗАВДАННЯ 4 
function countTotalSalary(employees) {
  let total = 0;
  for (const name in employees) {
    total += employees[name];
  }
  return total;
}

const salaries = {
  Mango: 300,
  Poly: 250,
  Alfreado: 450
};

console.log('\nЗагальна зарплата:', countTotalSalary(salaries));


// ЗАВДАННЯ 5
function getAllPropValues(arr, prop) {
  const result = [];
  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }
  return result;
}

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 }
];

console.log('\nВсі назви:', getAllPropValues(products, 'name'));
console.log('Всі ціни:', getAllPropValues(products, 'price'));


// ЗАВДАННЯ 6 
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

console.log(
  '\nЗагальна вартість Radar:',
  calculateTotalPrice(products, 'Radar')
);
console.log(
  'Загальна вартість Droid:',
  calculateTotalPrice(products, 'Droid')
);


// ЗАВДАННЯ 7 
const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів!');
      return;
    }
    this.balance -= amount;
    this.transactions.push({ type: 'withdraw', amount });
  },

  getBalance() {
    return this.balance;
  },

  getHistory() {
    return this.transactions;
  }
};

// Перевірка
account.deposit(1000);
account.withdraw(300);
console.log('\nБаланс акаунта:', account.getBalance());
console.log('Історія транзакцій:', account.getHistory());
