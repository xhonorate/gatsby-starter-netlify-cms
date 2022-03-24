---
templateKey: white-paper
title: Faster Than Light
subheading: WhiteStar's Next Generation SASE Solution
selectedCategories: []
icon: fas apple-whole
sections:
  - align: start
    heading: SASE
    content: >-
      <Tooltip label='Secure Access Service Edge' to=''>SASE</Tooltip>


      was first recognized by Gartner in a 2019 report [The Future of Network Security in the Cloud](<The Future of Network Security in the Cloud>) as an emerging architecture to provide 


      <Tooltip label='SD-WAN' to=''>Software-Defined Wide Area Network</Tooltip>

      , Zero Trust, and Cloud Native technologies to allow hybrid workforces to securely access Cloud-based services and applications from their homes and offices. Gartner has since projected SASE to reach a 40% deployment penetration by 2024 among global technology companies. While that’s a whole lot of words, let’s break the components down to gain a better insight.
  - align: start
    heading: Current SASE Technologies
    content: >-
      First, SD-WAN is generally considered to be a replacement for


      <Tooltip label='Multi-Protocol Label Switch' to=''>MPLS</Tooltip>


      . The easiest way to describe this is a technology that service providers use to create “circuits” between branch offices and the main office of an enterprise network. SD-WAN can be deployed as a software service rather than relying on vendor dependent hardware which is the case for MPLS. SD-WAN has been widely deployed and service providers have management software to allocate and deploy the circuits, provision their


      <Tooltip label='Quality of Service' to=''>QoS</Tooltip>


      and generally manage them. But today’s SD-WAN systems stop at establishing network circuits.


      Zero Trust is the idea that a user can never trust the underlying network that they run on. To create trust, they must always establish a


      <Tooltip label='Virtual Private Network' to=''>VPN</Tooltip>

      , or IPSec tunnel, from point to point which runs on top of the untrusted network. Within that tunnel every packet gets encrypted while in flight. This is required for enterprises that have branch offices as well as those that have applications hosted in cloud-based systems. After a circuit has been established via SD-WAN, a service provider will typically “provision” a series of VPN’s that run over those circuits. To do so often requires a hodgepodge of implementations depending on the equipment at the enterprise edge and within the cloud service providers themselves.


      SASE is the fusion of these capabilities into a unified solution that addresses both the deployment of “circuits” and the securing of them in a holistic and unified way. As such, it simplifies the deployment of multi-point enterprise networks - reducing cost and improving security at the same time. It also allows Cloud-native architectures to be containerized into micro-services and integrated with Cloud-based network security services with in-Cloud management of on-demand services and centralized policy control. Further, SASE allows local survivability in case of a failure of the Cloud. 


      Originally SASE was conceived as a way for enterprises to connect their stationary branch offices, headquarters and cloud-based applications at a moderate scale; think dozens of peer points for a typical enterprise. More recently, though, SASE has been repurposed to be a means by which entire remote teams can collaborate and work together.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets5.lottiefiles.com/packages/lf20_ob0uojnk.json
  - align: start
    heading: Remote Work Forces
    content: Current SASE solutions have three major challenges, two related to
      mobility and the third related to scale. First let's consider remote work
      forces. A remote work force tends to be much more mobile than a “fixed”
      branch office. A remote worker might access corporate applications via a
      mobile device that has both WiFi and Cellular connectivity. As the worker
      moves about, so does their connection. As they move, the secure circuit
      “breaks” because the underlying technologies are dependent upon the IP
      address of the connected device, and that IP address changes as the mobile
      device traverses from WiFi to Cellular and back to WiFi.
    graphic:
      - type: animation-object
        position: right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets4.lottiefiles.com/packages/lf20_ad1buz0z.json
  - align: start
    heading: Mobile Services
    content: The second issue with respect to mobility is that enterprises are
      increasingly wanting to “mobilize” their cloud services. In an ideal
      environment, they would like to transparently move the workload from one
      cloud provider to another, or from one cloud data center to another,
      depending on the costs of those services. Again, as this happens, the IP
      address of the cloud native application changes and therefore the secure
      circuit needs to change. Not having the ability to deal with this
      gracefully is a major challenge that limits Cloud native application
      mobility today.
    graphic:
      - type: animation-object
        position: left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets3.lottiefiles.com/packages/lf20_zw5fzhuo.json
  - align: start
    heading: System Scale
    content: >-
      Finally, there is scale. Generally, when we think of a service provider
      solution, scale is not an issue. However, SASE, SD-WAN, Zero Trust, etc.
      were all created to serve potentially dozens of endpoints in a given
      enterprise deployment. Scaling those solutions to the mobile work force
      suddenly requires that same system to scale to potentially hundreds of
      thousands of endpoints (worker’s devices) per enterprise. The ability to
      scale several orders of magnitude greater than the original design of a
      system has proven to be very challenging.


      While SASE has been an excellent transitional solution for hybrid workforces who need to be able to collaborate and work together from a variety of places, on the go, all over the world, it lacks the ability to do so while maintaining secure access to Cloud-based apps and services that might also be mobile.
  - align: start
    heading: FasterThanLight - FTL
    content: >-
      ###### WhiteStar’s Next Generation SASE solution


      WhiteStar’s FTL architecture solves the existing issues with today’s SASE solutions by utilizing the WhiteStar Network Operating System (NOS) to seamlessly connect mobile users to their Cloud-based apps and services that are needed. The WhiteStar NOS was developed specifically for mobile devices and applications that are constantly changing IP addresses; mobility is a core capability of all WhiteStar solutions. Additionally, the WhiteStar NOS, fundamentally being a Peer-to-Peer solution, was designed to scale to billions of endpoints. WhiteStar automatically forms secure “circuits” between each pair of endpoints within a WhiteStar Network in a system we call Cohorts and transparently maintains those secure circuits even while mobile.
    graphic:
      - type: animation-object
        position: right
        autoplay: true
        loop: true
        controls: false
        interactive: playOnScroll
        lottie: https://assets2.lottiefiles.com/packages/lf20_dpm3fjyp.json
        frames: ""
  - align: start
    heading: Deploying FTL on Existing Networks
    content: >-
      In order to utilize the WhiteStar NOS to deploy a SASE solution, all that
      is required is to deploy a WhiteStar FTL adapter into both the client and
      server micro-services endpoints and then provision the circuits at one end
      of each connection. Once provisioned, WhiteStar captures the standard
      internet traffic flow between the client and server, allowing nodes to
      communicate directly, without the need for a centralized network node,
      while also allowing them to access Cloud enabled services and applications
      for their business. \

      \

      When point to point connections cannot be easily established, for example if one or both endpoints being connected reside behind a firewall or NAT/PAT point, WhiteStar’s patent pending Crypto Tag Switching is automatically used to establish secure flows through intermediate nodes in the WhiteStar overlay network. With Crypto Tag Switching, packets are not decrypted until they reach their intended destination, dramatically improving network security and eliminating the threat of various common cybersecurity attacks in the process.
  - align: start
    heading: Advantages of FTL
    content: >-
      WhiteStar’s secure hybrid peer to peer network also removes the
      requirement for costly physical infrastructure, routers, firewalls and the
      staff to maintain those devices, thus driving down costs immensely and
      reducing complexity. The simple, mobile and scalable nature of the
      WhiteStar NOS, over other SASE solutions, means that employees are not
      needed to maintain and upgrade infrastructure. This also means that remote
      workers can securely work on a plane, train or in the car without losing
      secure access to their Cloud apps. Likewise, employers can have the peace
      of mind knowing that an employee working from their kitchen table has the
      best cybersecurity available protecting sensitive company data flowing
      from their employee’s laptop to the company’s Cloud.


      WhiteStar’s FTL architecture is plug-and-play, making it extremely easy to setup and manage as a secure network layer to deliver a company’s preexisting suite of Cloud native applications and services. It alleviates the need for companies to be locked in to using any single Cloud provider and can easily be installed on to bare metal or provided as a container solution for secure SASE delivery by Cloud network providers.


      Finally, WhiteStar FTL is also compatible with a variety of complex communication patterns including unicast, multicast and anycast. All of these attributes make the WhiteStar FTL an ideal transitional short-term solution for companies looking to migrate their existing Cloud applications to the secure WhiteStar ecosystem while laying the groundwork for an easy migration to a fully native WhiteStar secure implementation.


      For companies looking to provide best-in-class security for their employees, enabling them to work remotely without any compromise in the network’s security, and providing access to their Cloud-based services and applications, they need to look no further than WhiteStar. WhiteStar’s NOS first-party trust and Crypto Tag Switching, along with our FTL solution, automatically prevents cyber threats posed to the network while seamlessly adapting to both client and server mobility.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: false
        controls: false
        interactive: playOnScroll
        lottie: https://assets8.lottiefiles.com/packages/lf20_4wyyzeyf.json
relatedPapers:
  - iot/iot-sitrep
  - iot/business-of-iot
  - iot/iot-cars
  - security/intellectual-property
  - networking/the-whitestar-network
---
