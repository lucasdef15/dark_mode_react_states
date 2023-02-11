import React from 'react';
import ReactDOM from "react-dom";
import lucasImage from "./img/lucas.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { BsCircleHalf } from "react-icons/bs";
import "./index.css";

//Header component
//class component
class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { firstName, lastName, occupation, country, image } = this.props.data;
    return (
      <header className="headerWrapper">
        <div className="imgWrapper">
          <img src={image} alt={firstName}></img>
        </div>
        <div className="nameLabel">
          <h1>
            {firstName} {lastName}
          </h1>
          <BsCheckCircleFill id="verify" />
        </div>
        <div className="location">
          <p>
            {occupation}, {country}
          </p>
        </div>
      </header>
    );
  }
}

// TechList Component
//class component
class TechList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { techs } = this.props;
    const techList = techs.map((tech) => <span key={tech}>{tech}</span>);
    return techList;
  }
}

//Main Module
//class component
class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { techs } = this.props;
    return (
      <main>
        <h2>SKILLS</h2>
        <div>
          <TechList techs={techs} />
        </div>
      </main>
    );
  }
}

//Footer module
//class component
class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { date, showDate, changeBackground } = this.props;
    return (
      <footer>
        <AiOutlineLeftCircle />
        <small>Joinned {showDate(date)}</small>
        <BsCircleHalf id="darkMode" onClick={changeBackground} />
      </footer>
    );
  }
}

//App Module
//class component
class App extends React.Component {
  state = {
    styles: {
      backgroundColor: "#fff",
      color: "#222",
    },
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  changeBackground = () => {
    this.setState((prevState) => {
      if (prevState.styles.backgroundColor === "#fff") {
        return {
          styles: {
            backgroundColor: "#222",
            color: "#dfdfdf",
          },
        };
      } else {
        return {
          styles: {
            backgroundColor: "#fff",
            color: "#222",
          },
        };
      }
    });
  };
  render() {
    const date = new Date();
    const data = {
      firstName: "Lucas",
      lastName: "Faria",
      occupation: "Software Developer",
      country: "Brazil",
      image: lucasImage,
    };
    const techs = [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Flask",
      "Django",
      "MYSQL",
      "GraphQL",
      "D3.js",
      "Git",
    ];
    return (
      <div className="appWrapper" style={this.state.styles}>
        <Header data={data} />
        <Main techs={techs} />
        <Footer
          changeBackground={this.changeBackground}
          date={date}
          showDate={this.showDate}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);