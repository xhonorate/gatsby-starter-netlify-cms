---
templateKey: white-paper
title: Interplanetary Networking
subheading: Solving the Problems of Communication in Space
selectedCategories:
  - Networking
icon: fas rocket
sections:
  - align: start
    heading: Enabling Interplanetary Networks
    content: >-
      ###### Mankind is on the verge of becoming an interplanetary species.


      As humanity expands into high orbit, the moon, other planets, and eventually the stars, we must consider that our current networking technologies (the Internet) will fail to meet our communications needs. There are a myriad of complications associated with attempting to adapt legacy internet for interplanetary communications, but the two most glaring are those of distance and obstruction.
  - align: start
    heading: The Distance Problem
    content: >-
      ###### No matter how much technology improves, the laws of the universe
      prevent any signal transmission from exceeding the speed of light.


      On Earth, distances are relatively short, so this delay in transmission is negligible, but as the distance between end points grows, these delays will increase dramatically. Communication with a geostationary satellite in orbit, a mere 22 thousand miles above earth, already introduces significant delay on the order of hundreds of milliseconds. The distance between the Earth and Mars can range from 36 to 249 *million* miles, resulting in delays between 3 to 23 *minutes*, even at the speed of light. Under such conditions, legacy internet would simply fall apart. \

      \

      The workhorse of the internet today is the HTTP protocol which runs over a TCP connection.  TCP uses “end to end” ACK’s of IP packets carrying information.  A sending device transmits packets, then “waits” for ACK’s from the remote end before sending more packets or possibly re-sending lost packets.  TCP will simply fail under such conditions.  One layer higher, HTTP also has time constraints.  Modern web resources often depend on back-and-forth life cycle communications between the client device and the server.  For example, several back-and-forth exchanges are required to negotiate content types, compression protocols, etc. These exchanges would increase delays exponentially, coming to a head with the finite transaction times of web sockets and grinding communication to a halt.
    graphic:
      - type: animation-object
        position: left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets3.lottiefiles.com/packages/lf20_cgrur549.json
  - align: start
    heading: The Obstruction Problem
    content: >-
      If that wasn’t bad enough, lets next consider the challenge of not having
      an end-to-end connection at all and the possibility of never having one.
       Today’s Internet protocols almost all require end-to-end connections to
      function.  Consider a network with 3 routers that are between the “source”
      device and a “destination” device. For communications to flow from source
      to destination, there must be a path between the two devices.  If, for
      example, the connection between the middle two routers is blocked, packets
      will not be able to flow through the network.  The Internet was designed
      to try to overcome such challenges by selecting alternate routes from
      source to destination when any given link breaks, but those techniques
      cannot overcome the situation where no alternative links are available.


      So why is this important?  Consider the varying rotation and orbits of planets and their respective moons.  In the path from Earth to Mars, for example, there will be times when the Sun sits between the planets and no direct line of sight is available.  A communications array could attempt to redirect the signal through other planets and moons, but the windows of opportunity for direct communication may be few and far between, resulting in long periods of delay or a complete loss of connection.


      Beyond the simple inconvenience, there is a greater structural and architectural issue at play.  By its very nature, the internet reaches convergence when all endpoints in the network can communicate with all other points.  In an interplanetary system, where nodes can be abruptly and unexpectedly cut off from one another at any time, this would become impossible.  This creates a paradox by which the current internet’s architecture and the mechanics of interplanetary communication are mutually exclusive.  Put simply, the network cannot converge in space.
    graphic:
      - type: animation-object
        position: right
        autoplay: true
        loop: true
        controls: false
        interactive: syncWithScroll
        lottie: https://assets9.lottiefiles.com/packages/lf20_6ululmvu.json
  - align: start
    heading: Existing Solutions
    content: >-
      Now this is not a new problem.  It has been understood for a long time
      that traditional Internet protocols would fail for interplanetary
      communications.


      Potential solutions have been implemented in the past to deal with these issues; DTN, or Delay Tolerant Networking (also known sometimes as Disruption Tolerant Networking) is one such attempt to circumvent these issues using redundant networking with store-and-forward queuing. However, DTN as a replacement for the TCP protocol is only a partial solution, and is not dynamically scalable due to its lack of name resolution and routing capabilities. For a single agency monitoring a single spacecraft of known trajectory on a mission where every move has been plotted ahead of time, DTN may be appropriate, but DTN’s lack of a


      <Tooltip label='Domain Name Server' to=''>DNS</Tooltip>


      means that it will have difficulty routing in more complex environments.  DTN as a protocol also lacks a meaningful security model, and while many suggestions have been made, there are no formal standards for implementing security with DTN. Having been bred initially to address the challenges faced by NASA’s deep space probes, DTN lacks the general-purpose capabilities necessary to make it a viable replacement for today’s internet stack.
  - align: start
    heading: The WhiteStar Solution
    content: >-
      WhiteStar Communications, Inc. was founded by pioneers in the DTN
      ecosystem, who have leveraged their deep understanding of the strengths
      and weakness of DTN in developing the WhiteStar Network, the first
      ever Distributed Disruption and Delay Tolerant Network, or
      D<sup>3</sup>TN.\

      \

      The WhiteStar Network is an encrypted, hybrid peer-to-peer network, which distributes the burden of networking onto the edge devices, while maintaining a core which helps to facilitate routing for fault tolerance and redundancy.  Like DTN, the WhiteStar Network is inherently a “store and forward” network built upon a messaging orient fabric. Unlike DTN, however, the WhiteStar Network allows its infrastructure to dynamically route information, enabling connections in changing and chaotic environments where many entities may need to communicate in real time.\

       \

      Furthermore, D<sup>3</sup>TN allows for the real time assembly of networks, making it infinitely more extensible and more repairable than other inflexible networking protocols.  The WhiteStar NOS can be deployed over existing networks and built into current devices and applications, meaning legacy systems can be easily adapted to use the new D3TN networking architecture.


      The WhiteStar Network is also highly secure, allowing for compartmentalized networks to silo themselves from other networks that may be compromised.  No other network allows this level of security in the networking protocol while maintaining flexible extensibility. D<sup>3</sup>TN is not reliant on static routing tables, which rigidly fix the size and shape of other networks.  Naming and routing can be dynamic due to the first-party trust established through the WhiteStar Network’s salutation protocols, enabling devices to connect in an ad hoc manner with extreme levels of security, and conversely, devices can be removed from the network easily if found to be extraneous or malicious.


      All combined, this makes D<sup>3</sup>TN the ideal solution for next generation networking, solving not just the problems presented in the hostile environment of space, but also those here on Earth.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets9.lottiefiles.com/packages/lf20_tnk1qsyg.json
---
