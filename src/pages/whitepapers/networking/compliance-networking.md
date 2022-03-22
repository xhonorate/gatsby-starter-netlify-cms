---
templateKey: white-paper
title: Compliance Networking
subheading: "Protecting Sensitive User Data for Compliance Purposes "
selectedCategories:
  - Networking
icon: fas gavel
sections:
  - align: start
    heading: Compliance Requirements
    content: >-
      Pandemic-induced remote work can cause serious headaches for businesses
      trying to stay afloat in a challenging environment, especially when it
      comes to maintaining compliance with information handling. Lawyers,
      accountants, financial advisors and brokers, educators and healthcare
      professionals, just to name a few, all have legal obligations to make a
      best effort to protect the information of their clients. However, due to
      the distributed nature of today’s work places, this can be an extremely
      daunting task.

      <br></br>


      <Center>

      <h4>A few of the more common compliance requirements: </h4>

      </Center>


      <dl>

      <div class='col icon-box'><i class='fas fa-school'></i><h4>FERPA</h4><p>The Family Education Rights and Privacy Act of 1974. Gives parents access to their child's education records, an opportunity to seek to have the records amended, and some control over the disclosure of information from the records including ID’s, grades, email addresses, etc.</p></div>

      <div class='col icon-box'><i class='fas fa-clipboard-check'></i><h4>PTAC</h4><p>Privacy Technical Assistance Center.  Government resource for dissemination of educational privacy and security compliance.  Provides training on FERPA and related requirements as well as data security best practices.</p></div>

      <div class='col icon-box'><i class='fas fa-syringe'></i><h4>HIPAA</h4><p>Health Insurance Portability and Accountability Act.  Controls access to medical records.  This also applies to student's records held by schools.

      </p></div>

      <div class='col icon-box'><i class='fas fa-globe-europe'></i><h4>GDPR</h4><p>General Data Protection Regulation.  Defines what is personal data and how it should be protected and rights to have it removed. 

      </p></div>

      <div class='col icon-box'><i class='fas fa-child'></i><h4>COPPA</h4><p>Children’s Online Privacy Protection Act.  Governs collection of information for children under 13 years of age.  Requires parental consent.  Limits data collection and distribution.  Rights of erasure.

      </p></div>

      <div class='col icon-box'><i class='fas fa-globe-americas'></i><h4>CCPA</h4><p>California Consumer Privacy Act.  Aims to increase transparency for California residents, allowing them to understand how their data is collected and transacted.

      </p></div>

      <div class='col icon-box'><i class='fas fa-money-bill-wave'></i><h4>SOX</h4><p>Sarbanes-Oxley Act.  Mandates how financial record keeping and reporting must be handled for corporations.

      </p></div>

      <div class='col icon-box'><i class='fas fa-credit-card'></i><h4>PCI-DSS</h4><p>Payment Card Industry Data Security Standard governs how credit card information is handled.

      </p></div>

      </dl>


      How can businesses quickly and easily set up communications and networking infrastructure that will facilitate compliant communications, without the overhead of a massive IT staff, and potential for human error, that expose the organization to legal and civil liability for failure to comply with data protection regulations? Moreover, what is the best practice when it comes to the state of the art of protecting information?
  - align: start
    content: >-
      WhiteStar Communications has developed the


      <Tooltip label='WhiteStar or WhiteStar NOS for short' to=''>WhiteStar Network Operating System</Tooltip>


      , which enables businesses to quickly and easily deploy secure networks that are scalable, reliable and minimize human error.  The WhiteStar NOS is not just fully compliant with all best practices for data protection, it is in fact *the* *best* choice for securing sensitive data in-flight and at rest.\

      \

      WhiteStar’s hybrid peer to peer architecture allows sensitive data to be sent from one place to another with the absolute minimum attack surface area, thus ensuring no devices have access to sensitive data when they shouldn’t.  This is accomplished with WhiteStar’s patent pending Cohort system of first-party trusted connected devices. Likewise, WhiteStar functions with secure cryptography that protects all user data within the network of trusted devices.


      WhiteStar accomplishes full information data handling compliance without the risk of exposure to


      <Tooltip label='Man-in-the-Middle' to=''>MITM</Tooltip>


      attacks, which are possible with other networking protocols and architectures. These attacks occur on networks when a cybercriminal inserts a device to mimic the intended destination for the packets being sent, thus tricking the client into thinking the erroneous device is the intended destination. This allows the malicious device to complete a


      <Tooltip label='Process that kicks off a communication session that uses TLS encryption' to=''>TLS handshake</Tooltip>


      with the sending device enabling it to further intercept and decrypt packets. With WhiteStar Networks, since all end devices are known and trusted, a MITM attack is not possible.\

      \

      The current data compliance paradigm requires corporate data to be decrypted for data monitoring and retention, but this introduces security risks that are inherent in the technologies and protocols being used to maintain the compliance. That’s why WhiteStar's solution is so revolutionary; the WhiteStar NOS’s Cohort maintains first-party trust deliberately whitelisting each pair of connected devices through an exchange of unique key-pairs and allowing only those trusted devices to have access to information via patent pending Crypto Tag Switching. Keys roll on each packet, which contains the possibility of a data leak if a key-pair is ever compromised, to a single packet.\

      \

      The WhiteStar NOS is available in both Java and C++ implementations and can run on both mobile and desktop devices. The StarFury REST API integration allows the technology to be adapted to existing web applications as well. This means users can interact with WhiteStar enabled devices via a host of applications, like WhiteStar’s Society: Secure Social Network application which delivers secure instant messaging and public communities of interest.
    heading: The WhiteStar Solution
    subheading: ""
    graphic:
      - type: animation-object
        position: bottom left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets9.lottiefiles.com/packages/lf20_dpm3fjyp.json
  - align: start
    heading: WhiteStar vs Existing Solutions
    content: >-
      In addition to providing a complete information data compliance solution,
      the WhiteStar Network eliminates the need to pay for costly


      <Tooltip label='Virtual Private Networks' to=''>VPNs</Tooltip>


      that slow down data transfer and deteriorate the quality of the end user experience. It’s important to also note that users may not understand that VPNs do not guarantee secure end-to-end communications; they only secure the tunnel to the VPN concentrator typically located at the edge of each network. This means that a VPN potentially only offers protection for the first hop in the network, but could leave data vulnerable to exposure for any subsequent hops. These vulnerabilities are difficult to understand for the average layperson, thus the likelihood they’ll make a mistake when using a VPN is much higher. This, on the other hand, is not an issue when using a WhiteStar enabled application, which essentially makes a VPN obsolete.\

      \

      Today the


      <Tooltip label='Transport Layer Security' to=''>TLS</Tooltip>


      protocol is the primary means of protecting network communications over the Internet. It, (and its predecessor, Secure Sockets Layer or SSL), has been used for decades in many applications, but most notably in browsers when users interact with HTTPS websites. However, there are some inherent risks with the way TLS is typically deployed: requiring only one-way authentication and not two-way. This means only one party, (the server,) must prove its identity but not the client. This introduces the potential for transaction fraud.\

      \

      The same issue is true when considering most other applications that run over standard TLS. Despite negotiating an encrypted handshake, TLS only ensures that the first hop in the data’s path is somewhat secure, but does not necessarily protect any subsequent hops.\

      \

      WhiteStar ensures that data is encrypted with a two-way authenticated key-pair that prevents data from being read by any device other the device it was sent to or from. Unlike a VPN, this pairwise encryption extends end-to-end from the source device to the destination device and through every node that the user’s packets traverse. No node between the source and destination has the keys necessary to decrypt the packet. This packet forwarding technique is accomplished by way of WhiteStar’s patent pending [Crypto Tag Switching technology](/Security/ip).
    graphic:
      - type: animation-object
        position: top right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets8.lottiefiles.com/packages/lf20_wvvpsdll.json
  - align: start
    heading: User Data Protection
    content: >-
      ###### In simple terms, the WhiteStar Network is a hybrid peer-to-peer
      network.


      It attempts to send encrypted packets by way of a peer-to-peer connection between devices by default. In the event packets cannot be sent directly, for example if one device is behind a firewall and the two endpoints need to negotiate


      <Tooltip label='Network Address Translation / Port Address Translation' to=''>NAT/PAT</Tooltip>


      , the WhiteStar Core provides a routing service so connectivity can be established. Most importantly, the WhiteStar Core has no visibility either into the data within packets or about the final destination of the packets that are sent over the network, nor the final destination of those packets. This is accomplished with Crypto Tag Switching, which is appending packets sent by one endpoint to another with a cryptographically signed key. Each hop in the network can attest to the next hop the validity of the packet. In a network assembled of first-party trusted devices, this allows for extremely secure communication whereby every packet was verified by the next device in the transmission path, but nothing in the payload was decrypted. At the end of this chain, packets make their way to the end device and are then decrypted finally using the private key held by the end recipient.\

      \

      Additionally, encryption keys are rolled on every packet, meaning the potential exposure if a set of keys are leaked, is no larger than a single packet. Normally this would require a massive amount of computational overhead to implement at scale, but WhiteStar shifts the computational burden of cryptography to the end device and the WhiteStar Core never has to handle encryption or decryption, or the verification of the signature of a previous hop in the network. This allows the WhiteStar Network to scale nearly indefinitely, unlike a traditional Cloud backend with TLS.\

      \

      WhiteStar’s system also prevents MITM attacks, Replay attacks, and does not require opening pinholes in a firewall. Each packet is given a unique encrypted temporal key, which is signed onto a payload of packets moving from one device to the next. This temporal key is checked against each device’s known previous temporal keys to determine whether a packet is part of a malicious Replay attack using another one of WhiteStar’s patented technologies. If the temporal key matches a known key, the packet is determined to be part of an attack and dropped. The key-pair exchange of the Cohort also applies to Replicators within the WhiteStar Core.  Because packets are never decrypted at any point in flight across the WhiteStar Network, MITM attackers cannot intercept a decrypted packet at any point during the movement of packets because they are only fully decrypted by the end device.
  - align: start
    heading: Next Generation Compliance
    content: >-
      Coming full circle, most regulatory requirements for data-handling are
      open ended, mandating compliance with best practices within any given
      industry. Until the introduction of WhiteStar’s Cohort system, those best
      practices were defined as AES-256 encryption between TLS or TURN
      networking implementations on Cloud servers, which would have information
      pushed to the client side and protected in silicon on the end device.
      However, the Cohort system now provides a credible and more secure
      alternative to those best practices, redefining the standard by which
      network security is measured. Given the dramatic paradigm shift caused by
      this system, it’s fair to say the WhiteStar NOS is the new best practice
      for any secure networking implementation. Conversely stated, any
      networking implementation that doesn’t include WhiteStar is no longer in
      compliance with the letter of the law. 


      Lastly, it’s important to note that WhiteStar can understand a bevy of rich lifecycle policies that determine how long data is retained using a patented life cycle management system. While most data regulations have a prescribed lifecycle, there are currently no networking protocols that have a concept of lifecycle - instead this is left up to the application or end user to manage. WhiteStar’s life cycle management system shifts the burden of data retention from the application to the network by immutably signing each object upon creation and imbuing it with a set of properties that define ownership and lifecycle, which can include things like a birth and death date.


      This creates a form of


      <Tooltip label='Data Retention Management' to=''>DRM</Tooltip>

      , which is managed by the WhiteStar NOS, enabling users to fully control the information they create using a WhiteStar enabled application.  This functions even with account deletion, which WhiteStar handles as a service called Zeroization.


      WhiteStar’s patent pending Zeroization feature cryptographically deletes and removes the ability to view any content created by a user who has Zeroized their account. Because account management is also handled by WhiteStar, the NOS can zeroize any piece of data sent by an account to any other device within its Cohorts where the data was shared using a specialized protocol.  Once data has been zeroized, it impossible to forensically recover.
    graphic:
      - type: animation-object
        position: top left
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets1.lottiefiles.com/packages/lf20_4hj71q9i.json
  - align: start
    heading: True Data Ownership
    content: >-
      ###### Data creation, availability, modification, and deletion is always
      dictated by the end user on WhiteStar Networks.


      Users can remove or modify data at any time and the network will enforce those alterations. This allows for data to be corrected easily or removed for any reason the end user deems necessary. However, it’s important to note that this is handled at the network layer, not the application. The WhiteStar Network functions without the need for a Cloud-based database as a central repository of information as all data is held at rest on end user devices. 


      One of the major benefits of moving content management into the network layer is how it handles the future growth and obsolescence of end user device technology. Devices can become inoperable for any number of reasons, either from damage or something as mundane as an operating system or application no longer being supported by the provider. This can cause data that was sent from those devices to be perpetually “in flight”, making it impossible to delete that data, creating a regulatory and information security risk. 


      This can also be an issue with certain secure Cloud-based client-server applications where access to data is based on private keys stored at the end device level; if access to those keys is ever lost, without any kind of proper recovery mechanism there is no way to identify and delete data that is beyond its’ retention time. This is a particular issue with things like encrypted messaging platforms that utilize Cloud backends, which retain data pushed to the Cloud that can only be altered or retrieved by verifying a set of private keys. Without a lifecycle policy in effect, data pushed to the Cloud cannot be removed and lives on those servers indefinitely. WhiteStar’s patented lifecycle policy management automatically solves this issue at the network layer, allowing for sensitive and regulated information to be automatically deleted at the appropriate time without the need for user input, future-proofing the network.


      The WhiteStar Network is a proven solution, employing patented technologies to provide a revolutionary solution to organization’s most vexing problems for securing client data and maintaining regulatory compliance for years to come.
---
