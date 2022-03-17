---
templateKey: white-paper
title: Supply Chain
subheading: Secure Everything, Everywhere from Everyone
selectedCategories:
  - Security
icon: fas link
sections:
  - align: start
    content: >-
      The National Institute of Standards and Technology (NIST) has recently
      been given the task of defining “Critical Software” and best practices for
      protecting it.  NIST has published NIST SP 800-161 which is a draft
      working copy covering these topics.  At WhiteStar Communications, we are
      committed to doing our part of protecting “Critical Software” as defined
      by NIST.


      By NIST Standards, WhiteStar is to be considered Critical Software and as such we have decided to follow the recommended best practices for Mitigating the Risk of Software Vulnerabilities by adopting the secure software development framework (SSDF) outlined by NIST.
    heading: Critical Software
  - align: center
    heading: The WhiteStar Supply Chain
    subheading: ""
    content: >-
      <p class="lead">In addition to the NIST SSD framework, we have implemented
      a set of general principals to secure our software supply chain.</p>


      The first practice is to never trust hardware to do cryptography.  Hardware is supplied by third party companies through a complex set of relationships, design houses and foundries and we believe it’s too hard to adequately secure for the short term and probably impossible for the long term.


      WhiteStar Communications has also decided to dramatically limit our open-source exposure.  We carefully groom and select open-source projects to draw from.  Once selected, a snapshot copy is taken and held within our own internal repository from which we build our projects.  Taking this step eliminates the possibility of a bad actor inserting software into our products using the ecosystem of public repositories.


      We deliberately stay away from “free” open source development tools.  All our tools are commercial products that we have carefully screened for bad actors.  By executing a license agreement with the tool provider we have legal recourse should a bad actor attempt to attack our supply chain through their tool.


      Additionally, WhiteStar Communications owns and operates our own bare-metal servers, protected in secure data centers.  We don’t use public or shared servers for any of our development, tools, test or production systems.  We have carefully selected equipment, tools and best practices so that our develop and deployment servers are fully protected.


      We utilize a set of general principals to further secure our supply chain.  These include employing a layered defense with hardware fire walls, using geographical firewall defense, DDoS protection, secondary software fire walls, secure boot, secure operating systems and finally segmented control and data plane networks.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets3.lottiefiles.com/packages/lf20_itruvlwi.json
---
