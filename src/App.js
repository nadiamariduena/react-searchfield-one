import React, { Component } from "react";
//
//
//

const people = [
  {
    id: 0,
    first: "Lisbeth",
    last: "Johnson",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    tag: "whatever",
  },
  {
    id: 1,
    first: "Melissa",
    last: "Moncada",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    tag: "whatever",
  },
  {
    id: 2,
    first: "Darius",
    last: "Thompson",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    tag: "whatever",
  },
  {
    id: 3,
    first: "Charles",
    last: "montesquieu",
    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    description:
      "Charles-Louis de Secondat, Baron de La Brède et de Montesquieu,  was a French judge, man of letters, and political philosopher.He is the principal source of the theory of separation of powers, which is implemented in many constitutions throughout the world. He is also known for doing more than any other author to secure the place of the word 'despotism' in the political lexicon.[3] His anonymously-published The Spirit of Law in 1748, which was received well in both Great Britain and the American colonies, influenced the Founding Fathers in drafting the United States Constitution.",
    tag: "whatever",
  },
  {
    id: 4,
    first: "Elisabetta",
    last: "Petrovna",
    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    description:
      "After taking the throne in 1741, Elizabeth of Russia founded her country’s first university and forged strong ties in Europe during her 20-year reign. Elizaveta Petrovna  (b. 29 December 1709 – d. 5 January 1762 ) was the Empress of Russia from 1741 until her death. She led the country into the two major European conflicts of her time: the War of Austrian Succession and the Seven Years’ War. She remains one of the most popular Russian monarchs due to her strong opposition to Prussian policies and her decision not to execute a single person during her reign.",
    tag: "whatever",
  },
  {
    id: 5,
    first: "Francesco ",
    last: "Bartolomeo Rastrelli",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    tag: "whatever",
    description:
      "was an Italian architect who worked mainly in Russia. He developed an easily recognizable style of Late Baroque, both sumptuous and majestic. His major works, including the Winter Palace in Saint Petersburg and the Catherine Palace in Tsarskoye Selo, are famed for extravagant luxury and opulence of decoration.",
  },
  {
    id: 6,
    first: "The Peterhof Palace",
    last: "Peter s Court",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    description:
      " is a series of palaces and gardens located in Petergof, Saint Petersburg, Russia, commissioned by Peter the Great as a direct response to the Palace of Versailles by Louis XIV of France.",
    tag: "whatever",
  },
  {
    id: 7,
    first: "Hans",
    last: "Henkel",

    url: "./img/Saty_Pratha_Designer_Maryam_Keyhani_12_metalmagazine-17.jpg",
    tag: "whatever",
  },
];
//
//

function searchingFor(term) {
  return function (x) {
    // so when i have a !term , i want to match it with the "first" name x.first.toLowerCase(), works a bit like the regex test abbr ..a little bit but not really
    // its going to iterate through the content and find if there s a word that contains that letter, if it doesnt find it it will show nothing.
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

// ------   constructor   ------------
//
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: people,
      term: "",
    };

    // Define and Bind this function to this component, you are going to use this searchHandler inside the form {this.searchHandler}
    this.searchHandler = this.searchHandler.bind(this);
    // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    //
    // https://reactjs.org/docs/faq-functions.html
    //
    //
  }
  // ------   constructor   ------------
  //
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  //
  //
  render() {
    const { term, people } = this.state;

    return (
      <React.Fragment>
        <div className="App">
          <div className="banner">
            <h1>
              HELLO <span>SEARCH FIELD</span> ONE
            </h1>

            <form>
              <input
                placeholder="type something"
                type="text"
                onChange={this.searchHandler}
                value={term}
              />
            </form>
          </div>

          <div className="top-section">
            {people.filter(searchingFor(term)).map((person) => (
              <div className="content-box" key={person.id}>
                <h2> {person.first} </h2>
                <h3> {person.last} </h3>

                <img src={person.url} className="img-box" alt={person.tag} />
                <p> {person.description} </p>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
