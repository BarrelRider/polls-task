import React from "react";
import Link from "next/link";
import { Container } from "reactstrap";
import NavigationWrapper from "../../components/NavigationWrapper";
import { Row, Col } from "reactstrap";

const List = ({ questions }) => {

  return (
    <NavigationWrapper>
      <div className="question-wrapper">
        <Container>
          <div className="pb-4">
            <Row>
              <Col lg="2">
                <Link href="/questions/create-question">
                  <a className="btn btn-block btn-success">Yeni Soru Ekle</a>
                </Link>
              </Col>
            </Row>
          </div>
          <div id="list">
            <ul className="questions">
              {questions.map((item, index) => {
                return (
                  <li className="question-item" key={"question-" + index}>
                    <Link href={`${item.url}`}>
                      <a className="question-text">{item.question}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>
    </NavigationWrapper>
  );
};

List.getInitialProps = async (ctx) => {
  const res = await fetch("https://polls.apiblueprint.org/questions");
  const json = await res.json();
  return {
    questions: json,
  };
};

export default List;
