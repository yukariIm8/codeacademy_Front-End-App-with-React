// Parent class for Book, CD, and Movie classes.
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    set isCheckedOut (value) {
      this._isCheckedOut = value;
    }
    
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    
    getAverageRating() {
      let ratingsSum = this.ratings.reduce(
        (currentSum, rating) => currentSum + rating, 0);
      let lengthOfArray = this._ratings.length;
      return ratingsSum / lengthOfArray;
    }
    
    addRating(rating) {
      this._ratings.push(rating);
    }
  }
  
  // Book class that extends Media class.
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages() {
      return this._pages;
    }
  }
  
  // CD class that extends Media class.
  class CD extends Media {
    constructor(title, artist, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() {
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }
  }
  
  // Movie class that extends Media class.
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() {
      return this._director;
    }
    
    get runTime() {
      return this._runTime;
    }
  }
  
  // Create a book instance.
  const historyOfEverything = new Book('Bill Bryson',
                                       'A short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  // Create a cd instance.
  const fallingIntoYou = new CD('Falling into you', 'Celine Dion',
                                ['Make You Happy', 'Falling into you', 'Declaration Of Love']);
  
  fallingIntoYou.toggleCheckOutStatus();
  console.log(fallingIntoYou.isCheckedOut);
  fallingIntoYou.addRating(4);
  fallingIntoYou.addRating(2);
  fallingIntoYou.addRating(5);
  console.log(fallingIntoYou.getAverageRating());
  
  
  // Create a movie instance.
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  