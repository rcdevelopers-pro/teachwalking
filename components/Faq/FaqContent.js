import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="faq-img">
                <img src="/images/faq-img.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What does TechWalking specialize in?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        TechWalking is a software services company that
                        specializes in providing cutting-edge solutions for
                        businesses, including custom software development,
                        website design & Development, mobile application
                        development, digital Marketing and IT consulting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can TechWalking benefit my business?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        TechWalking can enhance your business by delivering
                        tailor-made software solutions that streamline
                        operations, improve efficiency, and address specific
                        challenges unique to your industry.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What industries does TechWalking serve?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        TechWalking caters to a diverse range of industries,
                        including but not limited to healthcare, finance,
                        e-commerce, manufacturing, educational and technology.
                        Our team is equipped to handle various business domains.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does the TechWalking development process work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our development process involves a thorough
                        understanding of your business requirements, followed by
                        design, development, testing, and deployment phases. We
                        emphasize collaboration and feedback throughout to
                        ensure the final product aligns with your vision.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can TechWalking assist with existing software
                        maintenance?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, TechWalking provides ongoing support and
                        maintenance services for existing software applications.
                        This includes updates, bug fixes, and enhancements to
                        ensure your software remains robust and up-to-date.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
