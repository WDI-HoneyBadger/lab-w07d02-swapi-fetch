$(document).ready(()=>{
  console.log('jQ connected');

  const fetchPeople = () => {
    const url = "https://swapi.co/api/people/";

    fetch(url)
      .then(response => response.json())
      .then(data => handleData(data))
      .catch(error => console.log(error))
  }

  // const handleData = (data) => data.results.forEach(renderPerson)
  // SAME AS  ^
  const handleData = (data) => {
    data.results.forEach((person)=> {
      renderPerson(person)
    });
  }

  const renderPerson = (person) => {
    const $container = $('<div>').appendTo($('.people'));
    $('.people').append($container)
    const $h3 = $('<h3>').text(person.name).appendTo($container);
    const $height = $('<p>').text(person.height).appendTo($container);
    const $mass = $('<p>').text(person.mass).appendTo($container);
    const $gender = $('<p>').text(person.gender).appendTo($container);
  }

  $('button').click(e => {
    $('.people').empty();
    fetchPeople();
  });

})


// SOLUTION WITH BONUS
// $(document).ready(() => {
//   console.log('jQ connected');

//   const fetchPeople = () => {
//     const url = "https://swapi.co/api/people/";

//     fetch(url)
//       .then(response => response.json())
//       .then(data => handleData(data))
//       .catch(error => console.log(error))
//   }

//   // const handleData = (data) => data.results.forEach(renderPerson)
//   // SAME AS  ^
//   const handleData = (data) => data.results.forEach(fetchHomeworld);

//   const fetchHomeworld = (person) => {
//     fetch(person.homeworld)
//       .then(response => response.json())
//       .then(homeData => renderPerson(person, homeData))
//       .catch(error => console.log(error))
//   }

//   const renderPerson = (person, homeworld) => {
//     const $container = $('<div>').appendTo($('.people'));
//     $('.people').append($container)
//     const $h3 = $('<h3>').text(person.name).appendTo($container);
//     const $height = $('<p>').text(person.height).appendTo($container);
//     const $mass = $('<p>').text(person.mass).appendTo($container);
//     const $gender = $('<p>').text(person.gender).appendTo($container);
//     const $worldName = $('<p>').text(homeworld.name).appendTo($container);
//     const $population = $('<p>').text(homeworld.population).appendTo($container);
//   }

//   $('button').click(e => {
//     $('.people').empty();
//     fetchPeople();
//   });

// })
