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
  heather.say_name();
  heather.say_something();
  heather.walk().run().crawl();
  console.log(`${person.name} is coding!`);

  // Now create a ninjaConstructor that can be used to create Ninjas that each have a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

  function ninjaConstructor(name, cohort){
    var belts = ['yellow', 'red', 'green', 'blue', 'white',];
    var ninja = {
      name: name,
      cohort: cohort,
      beltLevel: belts[0],

      levelUp: function(){
        if (ninja.beltLevel !== belts[belts.length - 1]){
          for (var i = 0; i < belts.length; i += 1){
            if (belts[i] === ninja.beltLevel){
              ninja.beltLevel = belts[i + 1];
              return;
            }
          }
        }
      }
    };
    return ninja;
  }
  ninjaHeather = ninjaConstructor('heather', 'mean')
  console.log(ninjaHeather);
  ninjaHeather.levelUp();
  ninjaHeather.beltLevel;
  console.log(`${ninjaHeather.name} is now at the ${ninjaHeather.beltLevel} level!`);
  ninjaHeather.levelUp();
  console.log(`${ninjaHeather.name} is now at the ${ninjaHeather.beltLevel} level!`);
