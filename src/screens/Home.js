import * as React from "react";
import logo from "../logo.svg";

import "../App.css";
import { Card, CardBody, Text, Button, Link } from "@chakra-ui/react";

function Home() {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  const [buttonColor, setButtonColor] = React.useState("green");

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
    if (isButtonClicked) {
      setButtonColor("green");
    } else {
      setButtonColor("blue");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* button to change to alternate screen */}
        <Card>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
            <Link to="/about">
              <Button
                colorScheme={buttonColor}
                onClick={() => {
                  console.log(`button clicked ${isButtonClicked}`);
                  handleClick();
                  // change button color to blue
                }}
              >
                Switch Color
              </Button>
            </Link>
          </CardBody>
        </Card>
      </header>
    </div>
  );
}

export default Home;
