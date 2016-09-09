function personConstructor(name){
    return person = {
      name: name,
      distance_traveled: 0,
      say_name: function(){
        console.log(person.name);//would be alert(person.name)
      },
      say_something: function(){
        console.log(`${person.name} says: ${'This is starting to make a little more sense!'}`);
      },
      walk: function(){
        // console.log(`${person.name} is walking `);
        // person.distance_traveled += 3;
        return person.move("walking", 3);
      },
      run: function(){
        // console.log(`${person.name} is running `);
        // person.distance_traveled += 10;
        return person.move("running", 10);
      },
      crawl: function(){
        // console.log(`${person.name} is crawling `);
        // person.distance_traveled += 1;
        return person.move("crawling", 1);
      },
      move: function(movement, incDistance){
        console.log(`${person.name} is ${movement}`);
        person.distance_traveled += incDistance;
        return person;
      }
    }
  }
  var heather = personConstructor("Heather");
  heather.walk().run().crawl();

  // Now create a ninjaConstructor that can be used to create Ninjas that each have a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

  function ninjaConstructor(name){
    return ninja = {
      name: name,
      cohort: 'MEAN 2016',//this stays the same for each ninja
      belt: 'yellow-belt'
    },
    levelUp: function(){
//      red: function(){}
  //    black: function(){}
      var red_belt = red_belt,
      var black_belt = black_belt,
      ninja.belt += ninja.red_belt;
      console.log(`${ninja.name} is now at the ${ninja.belt} level!`);
      return ninja;
    }
  }
  var heather = ninjaConstructor("heather");
  heather.levelUp();
  //so this doesn't run as I get an error message for "levelUp" on line 44...
//I thought that maybe "levelUp" was an actual function or call in javascript but I cannot find that in documentation...
// Also, not sure how do I differentiate different levels of belts and select them? Do I need a new function for each belt? and is this something I could nest inside the "LevelUp" function?
}
