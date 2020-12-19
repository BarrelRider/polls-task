import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "reactstrap";
import NavigationWrapper from "../../../components/NavigationWrapper";
import { getHeaders, withHost } from "../../../utils/request";

const CreateQuestion = () => {
  const [questionObj, setQuestionObj] = useState({
    question: "",
    choices: ["", "", "", ""],
  });

  const handleInputChange = (event) => {
    if (event.target.getAttribute("data-type") === "choice") {
      let newChoices = [...questionObj.choices];
      newChoices[event.target.id] = event.target.value;
      setQuestionObj({
        ...questionObj,
        choices: newChoices,
      });
    } else {
      setQuestionObj({
        ...questionObj,
        [event.target.id]: event.target.value,
      });
    }
  };

  const handleChoiceCount = (event) => {
    let currentChoices = [...questionObj.choices];
    if (event.target.id === "add") {
      currentChoices.push("");
    } else if (event.target.id === "remove" && currentChoices.length !== 2) {
      currentChoices.pop();
    }
    setQuestionObj({
      ...questionObj,
      choices: currentChoices,
    });
  };

  console.log(JSON.stringify(questionObj));

  const submit = () => {
    const method = "POST";
    fetch(withHost("/questions?page=1"), {
      method,
      headers: getHeaders(),
      body: JSON.stringify(questionObj)
    }).then((res) => res.json()).then((data) => {
      alert('Added successfully', JSON.stringify(data));
    });
  };

  return (
    <NavigationWrapper>
      <Container>
        <div className="question-wrapper">
          <Row>
            <Col className="m-auto" lg="8" xs="10">
              <Form className="new-question-form">
                <FormGroup>
                  <Label for="question">Question</Label>
                  <Input
                    type="text"
                    name="question"
                    id="question"
                    onChange={handleInputChange}
                    placeholder="What is your profession ?"
                  />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Choices</legend>
                  <ButtonGroup className="pb-3">
                    <Button
                      color="success"
                      id="add"
                      onClick={handleChoiceCount}
                    >
                      Ekle
                    </Button>
                    <Button
                      color="danger"
                      id="remove"
                      onClick={handleChoiceCount}
                    >
                      Çıkar
                    </Button>
                  </ButtonGroup>
                  {questionObj.choices.map((_, i) => {
                    return (
                      <FormGroup key={`choice-${i + 1}`}>
                        <Label for={`choice-${i + 1}`}>Choice-{i + 1}</Label>
                        <Input
                          onChange={handleInputChange}
                          data-type="choice"
                          type="text"
                          name={`choice-${i + 1}`}
                          id={`${i}`}
                          placeholder={`Choice-${i + 1}`}
                        />
                      </FormGroup>
                    );
                  })}
                </FormGroup>
                <Button type="button" onClick={submit} color="primary">
                  Gönder
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </NavigationWrapper>
  );
};

export default CreateQuestion;
