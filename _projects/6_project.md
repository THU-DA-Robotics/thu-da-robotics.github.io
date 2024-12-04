---
layout: page
title: Medical Assistance Robots
description: including ultrasound and surgical robots
img: assets/img/project_img/med_teaser.gif
importance: 1
category: work
related_publications: true
---

## Overview

Medical Assistance Robots are revolutionizing healthcare by enhancing precision, efficiency, and accessibility in various medical procedures and patient care scenarios. These robots are equipped with advanced technologies that allow them to perform tasks ranging from complex surgeries to routine caregiving, thereby reducing the burden on healthcare professionals and improving patient outcomes. Our research focuses on several key areas of medical assistance robotics, each addressing specific challenges and leveraging cutting-edge innovations.

Overall, our goal is to address the unique challenges posed by medical applications through the development of intelligent and autonomous robotic systems. By focusing on areas such as real-time dexterous manipulation, cognitive collaboration, and safe human-robot interaction, we aim to create robots that can operate effectively in dynamic and constrained environments. These advancements not only enhance the capabilities of medical professionals but also pave the way for more personalized and accessible healthcare solutions. Our works are currently related to quadriplegia, spinal surgery, and ultrasound scanning.

## Visual Attention Based Cognitive Human–Robot Collaboration for Pedicle Screw Placement in Robot-Assisted Orthopedic Surgery

{% cite chen2024visual %}

{% include figure.liquid loading="eager" path="assets/img/publication_preview/chen2024visual.png" class="img-fluid rounded z-depth-1" %}

Current orthopedic robotic systems largely focus on navigation, aiding surgeons in positioning a guiding tube but still requiring manual drilling and screw placement. The automation of this task not only demands high precision and safety due to the intricate physical interactions between the surgical tool and bone but also poses significant risks when executed without adequate human oversight. As it involves continuous physical interaction, the robot should collaborate with the surgeon, understand the human intent, and always include the surgeon in the loop. To achieve this, this paper proposes a new cognitive human-robot collaboration framework, including the intuitive AR-haptic human-robot interface, the visual-attention-based surgeon model, and the shared interaction control scheme for the robot. User studies on a robotic platform for orthopedic surgery are presented to illustrate the performance of the proposed method. The results demonstrate that the proposed human-robot collaboration framework outperforms full robot and full human control in terms of safety and ergonomics.

## A Unified Interaction Control Framework for Safe Robotic Ultrasound Scanning with Human-Intention-Aware Compliance

{% cite yan2024unified %}
[[Website](https://yanseim.github.io/iros24ultrasound/)]

<div class="row justify-content-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://yanseim.github.io/assets/videos/iros2024_long.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>

The ultrasound scanning robot commonly works in an environment where human-robot interactions frequently arise. Most control methods for ultrasound scanning only consider one specific interaction situation, or use hard switching between different controllers for different situations, which reduces safety and efficiency. In this paper, we propose a unified interaction control framework for ultrasound scanning robots capable of handling all common interactions, distinguishing both human-intended and unintended types, and adapting with appropriate compliance. Specifically, the robot suspends or modulates its ongoing main task if the interaction is intended, e.g., when the doctor grasps the robot to lead the end effector actively. Furthermore, it can identify unintended interactions and avoid potential collision in the null space beforehand. Even if the collision has happened, it can become compliant with the collision in the null space and try to reduce its impact on the main task (where the scan is ongoing) kinematically and dynamically. The multiple situations are integrated into a unified controller with a smooth transition to deal with the interactions by exhibiting human-intention-aware compliance. Experimental results demonstrate the framework’s ability to cope with all common interactions including intended intervention and unintended collision in a collaborative carotid artery ultrasound scanning task.
