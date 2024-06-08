---
layout: page
title: Medical Assistance Robots
description: including ultrasound and surgical robots
img: assets/img/project_img/hri/iros23.gif
importance: 1
category: work
related_publications: true
---

## Overview

Medical Assistance Robots are revolutionizing healthcare by enhancing precision, efficiency, and accessibility in various medical procedures and patient care scenarios. These robots are equipped with advanced technologies that allow them to perform tasks ranging from complex surgeries to routine caregiving, thereby reducing the burden on healthcare professionals and improving patient outcomes. Our research focuses on several key areas of medical assistance robotics, each addressing specific challenges and leveraging cutting-edge innovations.

Overall, our goal is to address the unique challenges posed by medical applications through the development of intelligent and autonomous robotic systems. By focusing on areas such as real-time dexterous manipulation, cognitive collaboration, and safe human-robot interaction, we aim to create robots that can operate effectively in dynamic and constrained environments. These advancements not only enhance the capabilities of medical professionals but also pave the way for more personalized and accessible healthcare solutions. Our works are currently related to quadriplegia, spinal surgery, and ultrasound scanning.

## Papers

<!-- - **Independence in the Home: A Wearable Interface for a Person with Quadriplegia to Teleoperate a Mobile Manipulator**
  [[Website](https://sites.google.com/view/hat2-teleop/home)]

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/watch?v=XuQKCFJ3-V8" class="img-fluid rounded z-depth-1" %}
</div>

Teleoperation of mobile manipulators within a home environment can significantly enhance the independence of individuals with severe motor impairments, allowing them to regain the ability to perform self-care and household tasks. There is a critical need for novel teleoperation interfaces to offer effective alternatives for individuals with impairments who may encounter challenges in using existing interfaces due to physical limitations. In this work, we iterate on one such interface, HAT (Head-Worn Assistive Teleoperation), an inertial-based wearable integrated into any head-worn garment. We evaluate HAT through a 7-day in-home study with Henry Evans, a non-speaking individual with quadriplegia who has participated extensively in assistive robotics studies. We additionally evaluate HAT with a proposed shared control method for mobile manipulators termed Driver Assistance and demonstrate how the interface generalizes to other physical devices and contexts. Our results show that HAT is a strong teleoperation interface across key metrics including efficiency, errors, learning curve, and workload. Code and videos are located on our project website. -->

- **Visual Attention Based Cognitive Human–Robot Collaboration for Pedicle Screw Placement in Robot-Assisted Orthopedic Surgery**

{% cite chen2024visual %}

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/project_img/med/iros2024.png" class="img-fluid rounded z-depth-1" %}
</div>

Current orthopedic robotic systems largely focus on navigation, aiding surgeons in positioning a guiding tube but still requiring manual drilling and screw placement. The automation of this task not only demands high precision and safety due to the intricate physical interactions between the surgical tool and bone but also poses significant risks when executed without adequate human oversight. As it involves continuous physical interaction, the robot should collaborate with the surgeon, understand the human intent, and always include the surgeon in the loop. To achieve this, this paper proposes a new cognitive human-robot collaboration framework, including the intuitive AR-haptic human-robot interface, the visual-attention-based surgeon model, and the shared interaction control scheme for the robot. User studies on a robotic platform for orthopedic surgery are presented to illustrate the performance of the proposed method. The results demonstrate that the proposed human-robot collaboration framework outperforms full robot and full human control in terms of safety and ergonomics.

- **A Unified Interaction Control Framework for Safe Robotic Ultrasound Scanning with Human-Intention-Aware Compliance**
  {% cite yan2023multimodal %}
  [[Website](https://yanseim.github.io/iros24ultrasound/)]

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="https://yanseim.github.io/iros24ultrasound/iros24v2__.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

The ultrasound scanning robot commonly works in an environment where human-robot interactions frequently arise. Most control methods for ultrasound scanning only consider one specific interaction situation, or use hard switching between different controllers for different situations, which reduces safety and efficiency. In this paper, we propose a unified interaction control framework for ultrasound scanning robots capable of handling all common interactions, distinguishing both human-intended and unintended types, and adapting with appropriate compliance. Specifically, the robot suspends or modulates its ongoing main task if the interaction is intended, e.g., when the doctor grasps the robot to lead the end effector actively. Furthermore, it can identify unintended interactions and avoid potential collision in the null space beforehand. Even if the collision has happened, it can become compliant with the collision in the null space and try to reduce its impact on the main task (where the scan is ongoing) kinematically and dynamically. The multiple situations are integrated into a unified controller with a smooth transition to deal with the interactions by exhibiting human-intention-aware compliance. Experimental results demonstrate the framework’s ability to cope with all common interactions including intended intervention and unintended collision in a collaborative carotid artery ultrasound scanning task.

- **Multi-Modal Interaction Control of Ultrasound Scanning Robots with Safe Human Guidance and Contact Recovery**

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/img/project_img/hri/icra2023_video_v5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

Ultrasound scanning robots enable the automatic imaging of a patient's internal organs by maintaining close contact between the ultrasound probe and the patient's body during a scanning procedure. Comprehensive, high-quality ultrasound scans are essential for providing the patient with an accurate diagnosis and effective treatment plan. An ultrasound scanning robot usually works in a doctor-robot co-existing environment, hence both efficiency and safety during the collaboration should be considered. In this paper, we propose a novel multi-modal control scheme for ultrasound scanning robots, in which three interaction modes are integrated into a single control input. Specifically, the scanning mode drives the robot to track a time-varying trajectory on the patient's body under the desired impedance model; the recovery mode allows the robot to actively recontact the body whenever physical contact between the ultrasound probe and the patient's body is lost; the human-guided mode renders the robot passive such that the doctor can safely intervene to manually reposition the probe. The integration of multiple modes allows the doctor to intervene safely at any time during the task and also maximizes the robot's autonomous scanning ability. The performance of the robot is validated on a collaborative scanning task of a carotid artery examination.
