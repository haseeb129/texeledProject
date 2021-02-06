import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image1 from "../assets/sofas.jpg";
class SellersPagePt2 extends Component {
  render() {
    return (
      <div className="allPageSize">
        <br />
        <Container fluid>
          <Row>
            <Col md={6} lg={6} sm={12} className="containerMainCrousal">
              <div className="childMainCrousal" style={{ height: "80vh" }}>
                <div className="containerImage">
                  <img
                    src={Image1}
                    alt="Girl in a jacket"
                    className="responsiveImage"
                  />
                  <p
                    style={{
                      color: "black",
                      float: "right",
                      fontStyle: "italic",
                    }}
                  >
                    Believe it or not, this is a render
                  </p>
                  <div className="centeredTextImage">
                    The Future Of Selling Homes
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} lg={6} sm={12} className="fixedHeightColumn1">
              <h1 style={{ textAlign: "center" }} className="Heading">
                Sellers Page Pt2
              </h1>
              <div className="allPageSizeInner">
                <p className="p-2 Content">
                  In ancient manuscripts, another means to divide sentences into
                  paragraphs was a line break (newline) followed by an initial
                  at the beginning of the next paragraph. An initial is an
                  oversized capital letter, sometimes outdented beyond the
                  margin of the text. This style can be seen, for example, in
                  the original Old English manuscript of Beowulf. Outdenting isl
                  ornamentation, a English manuscript of Beowulf. Outdenting is
                  still used in English typography, though not commonly.[3]
                  Modern English typography usually indicates a new paragraph by
                  indenting the first line. This style can be seen in the
                  (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a English manuscript of Beowulf.
                  Outdenting is still used in English typography, though not
                  commonly.[3] Modern English typography usually indicates a new
                  paragraph by indenting the first line. This style can be seen
                  in the (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a hedera leaf or other symbol can be
                  added to the inter-paragraph white space, or put in the
                  indentation space. A second common modern English style is to
                  use no indenting, but add verticaletimes outdented beyond the
                  margin of the text. This style can be seen, for example, in
                  the original Old English manuscript of Beowulf. Outdenting is
                  still used in English typography, though not commonly.[3]
                  Modern English typography usually indicates a new paragraph by
                  indenting the first line. This style can be seen in the
                  (handwritten) United States Constitution from 1787. For
                  additional ornamentation, a hedera leaf or othe white space to
                  create "block paragraphs." On a typewriter, a double carriage
                  return produces a blank line for this purpose; professional
                  typesetters (or word processing software) may put in an
                  arbitrary vertical space by adjusting leading. This style is
                  very common in electronic formats, such as on the World Wide
                  Web and email. Wikipedia itself employs this format.[
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SellersPagePt2;
