import * as React from "react";
import Layout from "../components/Layout";
import { PropTypes } from 'prop-types';
import { graphql } from "gatsby";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import Hero from '../components/Hero';

export const CareersPageTemplate = ({
  }) => {
    return (
    <div>
        <Hero 
            heading="Careers" 
            subheading="At WhiteStar Communications Inc." 
            lottie="https://assets10.lottiefiles.com/packages/lf20_yzffnwrg.json" 
        />
        <div class="container mt-5 pt-3">
        <div class="row">
            <div class="col-md-12">
                <h1>Highlights of Working at WhiteStar</h1>
                <p>There are many advantages to working at WhiteStar:</p>

                <MDBAccordion flush className="pb-4"> 
                    <MDBAccordionItem
                        collapseId="accordionCollapse1"
                        headerTitle="Discretionary Time Off"
                    >
                        WhiteStar does not have a maximum vacation time policy.  We offer unlimited time off during the calendar year which is 
                        mutually agreed upon between you and your manager.
                    </MDBAccordionItem>
                    <MDBAccordionItem
                        collapseId="accordionCollapse2"
                        headerTitle="Generous Bonus Plans"
                    >
                        <ul>
                            <li>Lump-sum (one-time) bonuses for exemplary performance up to $2,000</li>
                            <li>Mid-Year Summer bonus that can range from 10% to a max of 30% of your base pay</li>
                            <li>Year-End Christmas bonus which can range from 40% to 120% of your base pay</li>
                            <li>Patent Award bonuses which range from $500 for submitting an idea up to $5,000 when the patent is issued</li>
                            <li>Adoption and New Child Bonus</li>
                            <li>New Home Owner Bonus</li>
                        </ul>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                        collapseId="accordionCollapse3"
                        headerTitle="Health Benefits and Payroll"
                    >
                        <ul>
                            <li>We offer competitive Health Benefits with companies such as Blue Cross Blue Shield, United Health Care, Metlife, Delta Dental, Aflac, VSP, etc.</li>
                            <li>We also leverage TriNet to manage our payroll with direct deposit.  We pay 2 times a month (roughly the 15th and 30th of the month).</li>
                        </ul>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                        collapseId="accordionCollapse4"
                        headerTitle="Up to date workstation environment"
                    >
                        Includes the latest MacBook Pro - we plan on refreshing your MacBook every 2 years.  When you receive your new MacBook Pro the old one becomes yours (we transfer ownership).
                    </MDBAccordionItem>
                </MDBAccordion>
                <p>Plus working on some of the most cutting edge technology which will fundamentally change the way we work and live.</p>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-light mt-5 pb-3 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Covid Statement and Policy</h1>
                    <p>At WhiteStar our commitment to employee wellbeing is paramount.
                        We have taken deliberate steps to ensure the cleanliness of our offices including generous work space,
                        nightly cleanings, hand sanitizing stations and available masks and gloves.  Additionally, in an effort
                        to minimize external contact, maintain office cleanliness and reduce exposure, we provide healthy lunches,
                        drinks, and snacks.
                        </p>
                        <p>WhiteStar Communications is a medical freedom company, as such we do not require the COVID-19 vaccine or testing. 
                        Medical freedom means leaving individual medical decisions to each employee and their family.  We strongly encourage
                        our employees to research the vaccine, consult their personal physician, and make their own well informed choices.  
                        </p> 
                        <p>In the event of a WhiteStar employee or their family becoming sick, WhiteStar Communications offers unlimited sick leave to allow for their safe recovery. </p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

const CareersPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
  
    return (
      <Layout>
        <CareersPageTemplate
          heading={frontmatter.heading}
          subheading={frontmatter.subheading || {}}
          file={frontmatter.file || {}}
          image={frontmatter.image || {}}
        />
      </Layout>
    );
  };
  
  CareersPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  };

  export default CareersPage;
    
  export const pageQuery = graphql`
    query CareersPageTemplate {
      markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
        frontmatter {
            heading
        }
      }
    }
  `;
  