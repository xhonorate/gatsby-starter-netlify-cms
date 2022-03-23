---
templateKey: white-paper
title: Security First
subheading: Security is a Journey, Not a Destination
selectedCategories:
  - Security
icon: fas lock
sections:
  - align: start
    heading: The Security Journey
    content: >-
      ###### WhiteStar believes that security is a journey, not a destination.


      No matter how hard we try, we will never reach a place where our systems and services are “secure”.  Therefore we must always be moving forward, pushing the bar higher and higher.  To facilitate this, we have carefully architected every aspect of our system for evolution.


      At WhiteStar, we operate on the principal that no matter how good of a job we do today to secure something, someone in the world will eventually find a way around currently accepted algorithms and practices.  While that might sound hopeless, there are specific practices that we engage in to manage this reality.
    graphic:
      - type: animation-object
        position: left
        autoplay: true
        loop: false
        controls: false
        interactive: none
        lottie: https://assets4.lottiefiles.com/packages/lf20_g21zcwha.json
  - align: start
    heading: The Two-Step Process
    content: >-
      ###### One of the most important tools we use is planning for two steps of
      evolution ahead of current technologies, and being prepared to immediately
      deploy enhanced capabilities within our products if a breach or weakness
      is detected.


      To illustrate this point, consider something like encryption key size.  Currently we ship our product using 256 bit AES encryption keys.  We know that this is considered unbreakable today.  However, we know that eventually it will be broken.  Applying our two-step process means that we need to plan for what we do for the next key size as well as cipher algorithm.  And not just the next one, but the one after that. In doing so, we carefully architect our current system, the one shipping today, for everything we would need to make those two steps forward.  Furthermore, we have developed the next step and have it on the shelf, ready to go.  When we take that next step, we then plan out another so that we continuously have two steps ahead planned and architected.
    graphic:
      - type: animation-object
        position: right
        autoplay: true
        loop: true
        controls: false
        interactive: none
        lottie: https://assets8.lottiefiles.com/packages/lf20_hvkrb0kz.json
  - align: start
    heading: Demoralizing Potential Attackers
    content: >-
      One might wonder why not just deploy the bleeding edge best solution we
      have today?  The answer is a simple concept.  Once you are hacked, and you
      will eventually be no matter how strong of protection you employ, there is
      a window of time from when you have been breached until when you can fix
      or replace the system that has failed.  During that time your system is
      vulnerable to exploitation.  We want to make that time window as small as
      possible.  One way to do that is to be able to immediately deploy your
      next step, your planned replacement, closing the window almost
      instantaneously.  


      The ability to immediate mitigate any breach not only protects your systems, but it has a profound physiological effect on those that would seek to attack your system.  You see it is quite difficult and time consuming to compromise a system that has been well architected.  Great time, energy and cost goes into such attacks.  Many years of dedicated effort might be necessary to breach a system.  If after all that effort, the system immediately “changes” and your exploit is no longer useful, then the “reward” for having spent all that effort is practically nothing.  This, quite frankly, is demoralizing to black hats and is exactly the benefit that having two steps ahead planned and architected provides.
relatedPapers:
  - security/whitestar-culture
  - security/supply-chain
  - security/security-architecture
  - networking/compliance-networking
  - iot/business-of-iot
---
