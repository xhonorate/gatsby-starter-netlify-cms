---
templateKey: white-paper
title: Security Architecture
subheading: Building a Network of Security
selectedCategories:
  - Security
icon: fas diagram-project
sections:
  - align: start
    heading: A Holistic View of Security
    content: >-
      Today’s Internet was conceived during the cold war as a way for research
      scientists to communicate. At that time, security and scalability were not
      primary design factors as only a few trusted institutions were
      interconnected via secure telephone lines. Instead, the focus was on
      durability, mitigation of congestion, reliable transport and
      interoperability.  The Internet architecture is loosely based on a
      modified OSI stack as shown below:


      ![Network Diagram](/img/group-92.png)


      In today’s Internet, the datalink and physical layers are mostly


      <Tooltip label='IEEE 802.x defines a variety of Ethernet protocols that run over top of various media layers.' to=''>“Ethernet”</Tooltip>


      based, whether that be over wires, coaxial cable, wireless or fiber.  The network layer is the “Internet Protocol” or IP layer and is either based on IP version 4 or the more recent IP version 6.  As can be seen in the above illustration, it is the IP layer that allows packets to flow from any host A to any other host B via any number of intermediary devices (what can be called a network of devices — or simply the network layer.)\

      \

      Two protocols dominate the next layer of the Internet,


      <Tooltip label='RFC793 Transmission Control Protocol' to=''>TCP</Tooltip>


      and


      <Tooltip label='RFC768 User Datagram Protocol' to=''>UDP</Tooltip>


      , both of which run over the IP layer and thus are generally referred to as TCP/IP or UDP/IP.  TCP, or Transmission Control Protocol is the dominant protocol within the Internet and provides for “reliable” and “orderly” communications between hosts.  Above TCP, the dominant application protocol is


      <Tooltip label='RFC2616 and RFC2068 Hypertext Transfer Protocol' to=''>HTTP</Tooltip>


      , or the Hyper Text Transport Protocol, that allows clients and servers to exchange multi-media documents.\

      \

      *As is illustrated above, within the Internet architecture, security has always been an afterthought.*  There are various


      <Tooltip label='IEEE 802.1AExxx MACSec and others' to=''>protocols and standards</Tooltip>


      that allow for securing the “Ethernet” layer on a hop-by-hop basis between nodes on the “network”, however with this approach, packets are decrypted and then re-encrypted at each node.
    graphic: []
  - align: start
    heading: Transport Security
    content: >-
      ###### Like Ethernet, TCP has a secure counterpart.


      Today’s current version is called


      <Tooltip label='RFC5246, RFC8446, RFC6066, RFC4492 Transport Layer Security' to=''>TLS</Tooltip>


      , or Transport Layer Security, which rides on top of TCP and provides encryption services generally based on public/private key pairs. 


      <Tooltip label='RFC2818 HTTP over TLS' to=''>HTTPS</Tooltip>


      (or secure HTTP) negotiates for a secure TLS link to be used to transport data between hosts in a seemingly secure manner.  However, the trust model for this is generally broken in that the authentication of who is host A and who is host B is generally only one way.  In other words, if you use a browser to have a HTTPS session with your bank, the HTTPS/TLS session from your browser to your bank only ensures that your bank is who it says it is but not that you are who you say you are.  Because of this, the “application layer” must authenticate the “bank user”, generally “Logging Into” the bank account.


      Because of the


      <Tooltip label='HTTPS defines bi-directional authentication, but it is rarely, if ever used' to=''>lack of bi-directional authentication</Tooltip>


      of HTTPS sessions, there is an opportunity for an intermediate node, called a HTTPS or TLS proxy to be a “man-in-the-middle” between the client (browser) and the server (the bank.). The proxy node can “pretend” to be the bank and therefore decrypt all the packets flowing through it and then re-encrypt, “pretending” to be the browser.  This “feature” allows enterprises, for example, to enforce corporate policies and detect exfiltration of important information.


      Finally, HTTPS/TLS only secures data in flight.  Once your “personal information” reaches your bank or internet service provider, the information you sent gets decrypted and then stored somewhere, possibly in many places and often not encrypted.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets3.lottiefiles.com/packages/lf20_wcsmi8hn.json
  - align: start
    heading: The Scaling Problem
    content: >-
      In addition to a lack of intrinsic security, the Internet and the services
      that have been built upon it have massive scaling problems.  The Internet
      is a “single network” in which billions of hosts are attached.  As more
      and more of those hosts are mobile (such is the case with cell phones),
      then keeping track of all the hosts and their current IP addresses within
      the network becomes an increasing challenge.  Additionally, the Internet
      allows for any host on the “network” to route packets to any other
      host.  The ability to do this is considered to be the point in which the
      network has converged.


      While this is a nice feature, it also is a major security issue in that it allows any host to attack any other host in what is called a DoS (denial of service) or worse a DDoS (distributed denial of service) attack.  These types of attacks seek to make a host’s computer or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet.


      Finally, there’s the matter of identity vs network address.  When the Internet was first developed, IP address were fixed.  Address blocks were sub-divided by companies or organizations that needed to attach hosts to the Internet.  Organizations would sub-divide, aka. sub-net, their block addresses into smaller blocks and then physically assign those blocks to floors of buildings.  Addresses where then wired up to ethernet jacks in cubicles and offices.  With this arrangement, one could imply that a host at a given IP address was a given person as a person was assigned that office space.  Additionally, a given IP address could be inferred to belong to a given organization and even imply its location.


      Today, none of that is true.  Addresses are dynamically assigned; sub-networks are reused using NAT/PAT and people roam across networks and addresses with mobile devices.  All of this has caused significant security and scaling issues that have been band-aided over the years.
    graphic:
      - type: animation-object
        position: top right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets10.lottiefiles.com/packages/lf20_w6bazspj.json
  - align: start
    heading: The WhiteStar Solution
    content: >-
      ###### The WhiteStar Network and the WhiteStar Network Operating System
      have been built to address all these shortcomings of the current Internet
      stack.


      \

      WhiteStar has been built from the ground up to be both always secure and scalable and to have proper addressing semantics. While the Internet is a single network with billions of hosts in it, WhiteStar creates billions of small networks, each with potentially hundreds of hosts per network.  This can be seen as billions of clusters of interconnected hosts as shown below:


      ![Diagram of many interconnected clusters of nodes](/img/group-101.png)


      The WhiteStar Network does not attempt to automatically allow the inter-connection of every host to every other host and as such is immune to all forms of DoS and DDoS attacks as well as their application layer equivalent known as SPAM, Phishing, Spear Phishing, etc.  The WhiteStar Network accomplishes this through several technologies, which require its subscribers (people and things) to opt-into every relationship that they join.
    graphic: []
  - align: start
    heading: Distributed Trust
    content: >-
      ###### WhiteStar builds “trust” from the ground up with a distributed
      first party trust system known as Salutation and uses that foundation to
      both secure information in flight between hosts, and when at rest when it
      arrives at a host.


      Essentially, trust and indeed the entire WhiteStar Network are formed from the edge of the network, without any centralized services.


      In addition to forming trusted relationships as a foundational technology, WhiteStar also includes replacement protocols for the classic HTTPS/TLS/TCP/IP stack commonly used by Internet Cloud/Server/Client services today.  These protocols have been carefully crafted to ensure proper manners and behaviors and controls by its end users.


      In essence, WhiteStar’s NOS enables and enforces manners and etiquette that have been present in human culture since man first learned to communicate.  WhiteStar addresses and prevents the misuse and misappropriation of content, photographs, video, data and words by using integrated social semantics.  With traditional social media publishers that were built on current Internet protocols, it is easy to abuse the free access to others’ data which has become a problem for humanity.  WhiteStar Communications sought to create a network that is intrinsically secure and safe to use.  Those who are sensitive to these issues of privacy and data integrity will appreciate the care with which WhiteStar’s core mission philosophy is defused into the fabric of the WhiteStar network.
    graphic:
      - type: animation-object
        position: bottom right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets5.lottiefiles.com/packages/lf20_zijnvios.json
  - align: start
    heading: Traditional Internet Security
    content: >-
      We are now knee-deep in the era of the Deep-fake; unscrupulous individuals
      can gain access to others’ data and create fake content in order to
      blackmail, extort or damage others.  This level of unprecedented identity
      theft can be used to create fake images, videos, audio, social media
      posts, etc., and can easily destroy a person’s livelihood and social
      standing.  As a culture, we should be gravely concerned with protecting
      the integrity of social media users, and the next generation, as they grow
      up in this environment.  WhiteStar’s infrastructure and apps like SOCIETY
      help to ensure that content is not misused by nefarious entities.


      With the WhiteStar NOS, relationships are formed and maintained by the peered subscribers within the network itself rather than any application based on the WhiteStar Network.  Only a trusted party can contact another subscriber; essentially subscribers must opt-into a relationship which we call a Cohort in order to have contact.  The WhiteStar Network also understands the concept of out casting, which allows subscribers to permanently block other untrusted subscribers or their content by tagging them as an outcast.  The judgement of who is trusted, or untrusted, is at the sole discretion of the individual subscriber, and not controlled by the network.


      In order to better understand the unsecure vulnerabilities of the traditional social media/internet versus the robust security of the WhiteStar Network, consider the illustrations on the left.


      The top figure illustrates the current ultra-vulnerable and utterly unsecurable structure of today’s traditional social media/Internet where a user’s data is not owned nor controlled by the subscriber.  In this structure the content is all owned by the Service providers the moment the subscriber posts their content.  This content is then stored on servers somewhere, possibly in many locations around the world, and is subject to whatever laws those foreign entities impose, which often include those governments having full access to the data.  Your content can be data mined by companies wishing to profit from your content.


      Additionally, there are immeasurable points of vulnerability that can be easily hacked into by bad actors anywhere around the world.  Even if the ISPs wanted to address this issue, their structure does not allow for it.  Further, they are but one corrupt employee away from a major data leak from an “inside job”.
    graphic:
      - type: image-object
        position: bottom left
        image: /img/traditional-social-media-diagram.png
  - align: start
    content: >-
      By contrast, all content in the WhiteStar Network is always owned and
      controlled by the originator of the content and all content is always
      protected by WhiteStar and never stored on a server; we are cloudless by
      design.  Your content is cryptographically secured by WhiteStar both at
      rest (in an encrypted vault on your device, as well as in an encrypted
      vault on the device of whomever you allow to view your content) in
      addition to being encrypted in flight between the owner and with whomever
      they wish to share their content.  Your content is only stored on the
      devices with whom you shared it and is always subject to


      <Tooltip label='Zeroization is a process by which WhiteStar will permanently and cryptographically remove all content of a user from every device that content is stored within.' to=''>Zeroization</Tooltip>


      by you if you wish to remove it from the devices of others.  Moreover, and by design, WhiteStar’s cryptography algorithm is so secure that not even our employees can break it even if we explain to them exactly how it works.
    graphic:
      - type: image-object
        position: bottom left
        image: /img/whitestar-network-diagram.png
    heading: Security in the WhiteStar Network
  - align: start
    heading: Password Security
    content: >-
      ###### The WhiteStar NOS also features a fully integrated password
      authentication system.


      Traditional password control systems typically rely on patterns (such as requiring some combination of upper- and lower-case letters along with a special character or a number along with a minimal number of total characters.)  Additionally, it is normal in enterprise settings to require passwords to be changed on a fixed time schedule.  Both approaches have serious drawbacks.  Requiring certain patterns within a password don’t necessarily give surety as to the strength of a password.  Similarly, changing passwords on a fixed schedule is only a band-aid on the larger problem of not picking strong passwords to start with.  This leads to further problems as changing and rolling out a new password, particularly in an enterprise setting, is filled with error and often causes issues that IT must then be engaged to correct.


      To address these sorts of issues, WhiteStar has developed a novel Autonomic Password Management System.  Simply enter any password combination of alphanumeric and special characters and WhiteStar’s system shows you how long that password will be safe to use based on the present day commonly available hacking techniques combined with a temporally scaling model of compute power to estimate the time it would take a hacker to gain access to a subscriber’s account based on the actual password chosen by that subscriber.  With WhiteStar, Passwords and their enforcement is now a part of the Network itself.


      WhiteStar continuously re-evaluates each user’s chosen password and should new techniques, algorithms or unpredicted increases in compute power come along, then WhiteStar will revise the time that remains before the subscriber’s password must change.
    graphic:
      - type: animation-object
        position: top right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets2.lottiefiles.com/packages/lf20_k4ipkihe.json
  - align: start
    heading: Screen Capture Protection
    content: As part of the WhiteStar security package, the WhiteStar Network
      Operating System disables screen capture and send ability so that content
      cannot be taken and distributed without a user’s permission, and there is
      no provision to download content without the express consent of the user.
      Where possible, all WhiteStar applications disable the screen capturing of
      content.
  - align: start
    heading: Artificial Intelligence
    content: >-
      ###### The WhiteStar Network Operating System utilizes a variety of AI
      agents.


      Security is orchestrated in novel and powerful ways through a synergistic interaction of three such agents: the Guardian, the Sentinel and the Navigator.  The Guardian is what most people think of when they think about security.  The Guardian protects data in flight and at rest using advanced first party trust and proven cryptographic algorithms.


      The Guardian protects passwords and it’s the Guardian that estimates their hack times.  The Guardian provides full attestation of all parties, devices and messages.  The Guardian provides protection against advanced threats and us strategies to avoid replay attacks.  The Guardian attempts to block content exfiltration through screen captures, the clip board and other means.


      By contrast, the Sentinel agent monitors for cyber threats and attacks and attempts to detect them in real time.  The Sentinel assists subscribers in connecting and revoking relationships to manage bad actors.  The Sentinel allows subscribers to outcast relationships, conversations and message.  The Sentinel notifies subscribers when hacking and other bad behaviors are detected.  Finally, it is the Sentinel that intelligently provides an array of threat mitigation strategies including: management of backups, zeroization and revoking/out casting relationships.


      Finally, the Navigator works with both the Guardian and Sentinel to orchestrate navigation policies that in turn decide what networks and types of network connections should be used to carry out connections between devices.  The Navigator considers threats detected by the Sentinel as well as network availability, power level, federations, and likelihood estimates of the need to converse as it “navigates” to the safest ways for parties to communicate.
    graphic:
      - type: animation-object
        position: left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets6.lottiefiles.com/packages/lf20_qs2pvarq.json
relatedPapers:
  - iot/iot-sitrep
  - networking/compliance-networking
  - security/cryptography
  - security/intellectual-property
  - security/security-first
---
