const menu = {
    _course: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._course.appetizers;
    },
    get mains() {
      return this._course.mains;    
    },
    get desserts() {
      return this._course.desserts;
    },
    set appetizers(appetizer) {
      this._course.appertizers = appetizer;
    },
    set mains(main) {
      this._course.mains = main;
    },
    set desserts(dessert) {
      this._course.desserts = dessert;
    },
    get course() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    // Add a new dish to the specified course on the menu.
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._course[courseName].push(dish);
    },
    // Get a random dish from each course. 
    getRandomDishFromCourse(courseName) {
      const dishes = this._course[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    // Generate a three-course meal and calculate the total price.
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
    }
  };
  
  // Add 3 dishes to each course.
  menu.addDishToCourse('appetizers', 'salada', 8);
  menu.addDishToCourse('appetizers', 'sashimi', 10);
  menu.addDishToCourse('appetizers', 'edamame', 7);
  menu.addDishToCourse('mains', 'beef stake', 25);
  menu.addDishToCourse('mains', 'pasta', 19);
  menu.addDishToCourse('mains', 'baked salmon', 23);
  menu.addDishToCourse('desserts', 'coffee', 6);
  menu.addDishToCourse('desserts', 'cheese cake', 11);
  menu.addDishToCourse('desserts', 'vanila icecream', 8);
  
  // Generate my menu.
  const meal = menu.generateRandomMeal();
  console.log(meal);