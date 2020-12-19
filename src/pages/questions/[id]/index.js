import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import NavigationWrapper from "../../../components/NavigationWrapper";
import { withHost } from "../../../utils/request";

const Detail = ({ question, choices, url }) => {

  const [details, setDetails] = useState({
    question,
    choices,
    url,
  })

  const voteChoice = (url) => {
    const method= "POST";
    fetch(withHost(url), {
      method,
    }).then((res) => res.json()).then(data => {
      alert(`Voted on ${data.choice}. Total vote: ${data.votes}`)
      fetch(withHost(details.url)).then((res) => res.json()).then(data => {
        setDetails({
          ...details,
          question: data.question,
          choices: data.choices,
          url: data.url
        })
      }) 

    });
  }

  return (
    <NavigationWrapper>
      <Container>
        <div className="question-wrapper">
          <Row noGutters>
            <Col className="m-auto" lg="6" sm="8" xs="11">
              <div className="selected-question">
                <span className="selected-question-text">{details.question}</span>
                <ul className="choices">
                  {details.choices.map((item, index) => {
                    return <li key={`choice-${index}`} className="choice-item">
                      <a className="choice-text" onClick={() => { voteChoice(item.url) }}>
                        <span>{item.choice}</span>
                        <span>votes: {item.votes}</span>
                        </a>
                    </li>
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </NavigationWrapper>
  );
};

Detail.getInitialProps = async (ctx) => {
  const res = await fetch(withHost(ctx.asPath));
  const json = await res.json();

  return {
    question: json.question,
    choices: json.choices,
    url: json.url
  };
};

export default Detail;
