---
templateKey: white-paper
title: System Surface Area
subheading: Understanding the Impact of Surface Area on Security
selectedCategories:
  - Security
icon: fas dice-d20
sections:
  - align: start
    heading: Surface Area in a Network
    content: >-
      The term “Surface Area” is often used in discussing security to illustrate
      how many ways a secure system can be attacked, and if attacked, how big of
      a prize, in the form of information, could some would be attacker acquire
      from the compromised system.  In general, smaller surface area is
      better.  The WhiteStar Network has been purposefully designed to present
      the smallest possible useful surface area, thereby making the challenge of
      hacking it as large as possible while at the same time keeping the prize
      for having hacked it as small as possible.


      The WhiteStar network achieves minimal surface area through a technology that we call Cohorts.  A cohort can be thought of as a unique pair of devices.  To facilitate the formation of Cohorts, the WhiteStar network operates as a hybrid peer-to-peer network, without the need for a Cloud or any servers.  A single pair Cohort is a set of two distinct network endpoint devices with trusted interlinks between them.  Cohorts are established by exchanging unique pairwise cryptographic keys in a specialized Salutation Protocol using first party trust. 


      Additional endpoints can ‘opt-in’ to join a Cohort by forming first party relationships with each and every other endpoint within the Cohort.  This creates a mesh network of first-party trust between each set of individual endpoint participants within the Cohort.  Once connected, endpoints within a Cohort share data with all other Cohort members by utilizing the unique key pairs.


      Each Cohort is compartmentalized which prevents non-trusted devices from gaining access to the information exchanged within the Cohort unless they are deliberately given access.  Extrapolating the Cohort Architecture onto a larger social graph, this technology allows Cohorts to interconnect, forming larger meshed connections of first party trusted devices with guaranteed security.
    graphic:
      - type: animation-object
        position: bottom left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets8.lottiefiles.com/packages/lf20_mlbqveuq.json
  - align: start
    heading: Existing Solutions
    content: >-
      ###### The unique advantage of the WhiteStar network is that the risk
      surface area is reduced to one.


      What this means is that for two devices to communicate with each other only one other device is involved – the other party.  Think of this as the ultimate form of whitelisting, where each party is deliberately whitelisted into a first party trusted relationship with each counter party.  In the WhiteStar network there is no such thing as “group cryptography” with keys shared among a larger group of endpoints, nor is there a trusted third party used to establish trust relationships in an indirect way. With networks that use group cryptography or group keys, the risk surface area increases proportional to the number of devices added to the network.  So if there are seven devices sharing a group key, then compromising any of the seven would gain an attacker access to all seven.  We say therefore that the surface area is seven.  As the number of devices sharing the same key grows, surface area grows one for one with each new device.


      At the same time, as the surface area grows the prize grows as well.  Compromising one of any of the seven devices means that an attacker can access information on seven devices.
    graphic:
      - type: animation-object
        position: right
        autoplay: true
        loop: false
        controls: false
        interactive: none
        lottie: https://assets6.lottiefiles.com/temp/lf20_iRxzMr.json
  - align: start
    heading: Cohort Architecture
    content: >-
      In contrast, WhiteStar’s Cohort architecture produces an absolute minimum,
      finite and constant risk profile of one, even as the number of connected
      endpoints increase.  Due to the compartmentalized nature of each of the
      Cohorts, it easy to see that the prize for compromising a single device is
      at most that an attacker could access information from a pair of devices. 


      The security of the Cohort architecture is in direct contrast to the Internet itself, which always has full connectivity between all devices.  In effect, the Internet whitelists every device into the same network.  This connectivity model makes it highly susceptible to tampering as it assumes any device can be trusted to communicate to any other device on the network.  Since the network doesn’t understand concepts like trust, identity or authentication, these topics are typically implemented above the network layer and in many cases at the application layer itself.  With respect to risk profiles, the typical internet model presents unlimited risk due to the unlimited nature of device exposure.
    graphic:
      - type: animation-object
        position: left
        autoplay: true
        loop: false
        controls: false
        interactive: none
        lottie: https://assets8.lottiefiles.com/packages/lf20_dpm3fjyp.json
relatedPapers:
  - education/society-in-the-classroom
  - networking/the-whitestar-network
  - networking/whitestar-vs-blockchain
  - security/security-architecture
  - security/cryptography
---
