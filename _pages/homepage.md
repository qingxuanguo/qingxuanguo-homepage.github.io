---
permalink: /
title: "Home"
excerpt: ""
author_profile: true
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='home'></span>

<!-- Full-stack robotic system design and development, with a focus on surgical robotics and legged robots. -->

<span class='anchor' id='-educations'></span>


# 📖 Educations

**University of Illinois at Urbana-Champaign (UIUC)**, Urbana, IL  
Master of Engineering in Mechanical Engineering | Sep 2021 – Jan 2023 | GPA: 3.79/4.00

**Technion – Israel Institute of Technology**, Haifa, Israel  
Bachelor of Science in Mechanical Engineering | Aug 2017 – Jul 2021 | GPA: 86/100

<span class='anchor' id='-portfolio'></span>


# 🤖 Portfolio

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_bath.jpg' alt="project1" width="100%" class="project-static">
</div></div>
<div class='paper-box-text' markdown="1">

**Robotic Bathing System (internal codename: Triton)**

<!-- [**Code**](https://github.com/) [**Video**](https://youtube.com/) [**Demo**](https://demo.com/) -->
- Led end-to-end development of an assistive bathing robot, owning system architecture and technical roadmap
- Defined and drove multiple design approaches, conducting system-level trade-offs and selecting the final solution
- Personally designed and integrated the end-effector with brush module, motor drive, gearbox, and force sensing, and validated the overall mechanical structure

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_stewart.png' alt="project2" width="100%" class="project-static">
<video muted loop playsinline preload="auto" class="project-video">
  <source src="/videos/project_stewart.mp4" type="video/mp4">
</video>
</div></div>
<div class='paper-box-text' markdown="1">

**Robotic Microsurgery Platforms - Stewart platform-based microsurgical robot**

Designed and built a parallel manipulator for precision positioning, derived inverse kinematics and implemented coordinated multi-actuator control

<!-- [**Code**](https://github.com/) [**Video**](https://youtube.com/) -->
- Independently owned full-stack development across all prototypes, including electrical component selection, mechanical design, system integration, motor control development, kinematics modeling, and validation
- Demonstrated delicate manipulation by peeling a raw quail egg, showcased at WAIC 2025, selected as a Key Highlight of the Exhibition

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_cable.jpg' alt="project3" width="100%" class="project-static">
</div></div>
<div class='paper-box-text' markdown="1">

**Robotic Microsurgery Platforms -  Cable-driven microsurgical robot**

- Developed a tendon-driven system with optimized routing and tensioning strategies, enabling compliant behavior and inherent backdrivability for safe and precise manipulation
- Independently owned full-stack development across all prototypes, including electrical component selection, mechanical design, system integration, motor control development, kinematics modeling, and validation


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_direct.png' alt="project4" width="100%" class="project-static">
</div></div>
<div class='paper-box-text' markdown="1">

**Robotic Microsurgery Platforms - Direct-drive linear motor microsurgical robot**

- Built a high-bandwidth actuation system using linear motors, achieving ultra-fast response and high force transparency with direct force transmission between actuators and end-effector
- Independently owned full-stack development across all prototypes, including electrical component selection, mechanical design, system integration, motor control development, kinematics modeling, and validation


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_customizable.jpg' alt="project5" width="100%" class="project-static">
<video muted loop playsinline preload="auto" class="project-video">
  <source src="/videos/project_customizable.mp4" type="video/mp4">
</video>
</div></div>
<div class='paper-box-text' markdown="1">

**Fully Customizable Surgical Robotics Arm**

- Conducted tests on various commercial robot joints tailored for customized surgical robot arms, primarily utilized in dental and orthopedic surgeries
- Constructed a robotic arm using the chosen joints and developed a control interface from scratch for enhanced manipulation of parameters
- Completed the EtherCAT communication program utilizing PDO, achieving a communication rate of 2K Hz. The torque calculated from kinematic and dynamic relations demonstrated a relative mean error of 1.5% for a single joint

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div>
<img src='/images/project_minimally.jpg' alt="project6" width="100%" class="project-static">
<video muted loop playsinline preload="auto" class="project-video">
  <source src="/videos/project_minimally.mp4" type="video/mp4">
</video>
</div></div>
<div class='paper-box-text' markdown="1">

**Minimally Invasive Surgery Instrument Control**

- Implemented an end-effector control module for multi-arm minimally invasive robotic telesurgery, including the development of a primary-secondary controller algorithm
- Enhanced response times and positioning accuracy using torque control connecting the primary controller’s human hand motion with the instrument’s maneuvers


</div>
</div>

<div class='paper-box last-project'><div class='paper-box-image'><div>
<img src='/images/project_dental.jpg' alt="project7" width="100%" class="project-static">
</div></div>
<div class='paper-box-text' markdown="1">

**Dental Surgery Navigation System**

- Developed a dental surgery navigation system achieving low tracking errors of 0.2mm examined by the FARO Laser Tracker
- Designed and patented a calibration and optimization algorithm that utilizes calibration data to reduce tracking errors

</div>
</div>

<span class='anchor' id='-publications'></span>
# 📝 Publications 

<!-- Academic publication format template (currently no publications)

## Journal Papers

- **[Author Last Name, Initial.]**, Co-author, A., & Co-author, B. (Year). Title of the paper. *Journal Name*, *Volume*(Issue), Page range. https://doi.org/xx.xxxx/xxxxx
  - Status: Under Review / Received / Accepted / In Press

## Conference Papers

- **[Author Last Name, Initial.]**, Co-author, A., & Co-author, B. (Year, Month). Title of the paper. In *Proceedings of the Conference Name* (pp. Page range). Location: Publisher.
  - Status: Submitted / Under Review / Accepted

## Preprints

- **[Author Last Name, Initial.]**, Co-author, A., & Co-author, B. (Year). Title of the paper. *arXiv preprint arXiv:XXXX.XXXXX*. https://arxiv.org/abs/XXXX.XXXXX

-->

<!-- Example format:
- **He, K.**, Zhang, X., Ren, S., & Sun, J. (2016). Deep Residual Learning for Image Recognition. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition* (pp. 770-778).
  - Status: Published, CVPR 2016
-->

<span class='anchor' id='-honors-and-awards'></span>
# 🎖 Honors and Awards

- **2025** - Key Highlights of the Exhibition, World Artificial Intelligence Conference (WAIC) 2025
- **2021/2022** - Prof. Mark Darlo Award for Outstanding Project in Mechatronics
- **2020** - President's List: winter, spring semesters of 2019