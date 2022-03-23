---
templateKey: white-paper
title: Cryptography
subheading: Protection of Information
selectedCategories:
  - Security
icon: fas key
sections:
  - align: start
    subheading: ""
    heading: Using Standards, but in Novel Ways
    content: >-
      ###### At WhiteStar communications, we use state of the art cryptographic
      algorithms to protect all information in flight and at rest.


      We use well tested, standards-based algorithms that are provided by one of two trusted third parties.  For WhiteStar C++ implementations we use the Crypto++ libraries.  For WhiteStar Java implementations we use libraries supplied by Bouncy Castle.  Both groups are well supported, toughly vetted, and provide optimal implementations of the algorithms that we utilize.


      We never use hardware-based cryptography nor keystores in our products.  Hardware is a point in time solution; it will always be breached at some point in time.  We also don’t use the cryptographic libraries provided by our device manufactures.  That is another source of attack outside of our control.


      While we do use standards-based cryptography, we don’t use them in the normal “Internet” protocol stack.  Internet based systems typically use a protocol stack that consists of HTTPS over TLS over TCP over IP.  These protocols have many weaknesses that are largely the result of being designed to provide general security across a wide variety of applications and vendors above the network layer (above IP).  This, in turn, was required since the network layer was not designed with security from the beginning but rather security was added to the internet as add on protocols and standards.  WhiteStar’s network and NOS were designed from the beginning with a comprehensive security architecture that does not require application developers or other vendors to know or understand about security principles.  This shifting of what is in the “network layer” vs what is in the “application layer” allows WhiteStar to re-employ the same cryptography, but in a much more capable and homogeneous way.


      Within the WhiteStar network we employ a layered approach to security with redundant hardened firewalls, DDoS protection, and separate control and data plane networks.  All deployed servers utilize TPMs that securely boot Red Hat Enterprise Linux (RHEL) running SE Linux with ultra-high trust certificates.  These servers are maintained in hardened US Based data centers which are maintained by a staff of former US military personnel.
    graphic:
      - type: image-object
        position: bottom left
        image: /img/crypto.png
relatedPapers:
  - networking/whitestar-vs-blockchain
  - security/security-architecture
  - security/security-first
  - security/system-surface-area
  - iot/business-of-iot
---
