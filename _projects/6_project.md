---
layout: page
title: Medical Assistance Robots
description: including ultrasound and surgical robots
img: assets/img/project_img/hri/iros23.gif
importance: 1
category: work
related_publications: true
---

<!-- ## Overview -->

## Papers

- **A Unified Interaction Control Framework for Safe Robotic Ultrasound Scanning with Human-Intention-Aware Compliance**
  {% cite yan2023multimodal %}
  [[Website](https://yanseim.github.io/iros24ultrasound/)]

<!-- <iframe width="800" height="450" src="https://yanseim.github.io/iros24ultrasound/docs/iros24v2__.mp4" title="ultrasound" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe> -->

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="https://yanseim.github.io/iros24ultrasound/docs/iros24v2__.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

The ultrasound scanning robot commonly works in an environment where human-robot interactions frequently arise. Most control methods for ultrasound scanning only consider one specific interaction situation, or use hard switching between different controllers for different situations, which reduces safety and efficiency. In this paper, we propose a unified interaction control framework for ultrasound scanning robots capable of handling all common interactions, distinguishing both human-intended and unintended types, and adapting with appropriate compliance. Specifically, the robot suspends or modulates its ongoing main task if the interaction is intended, e.g., when the doctor grasps the robot to lead the end effector actively. Furthermore, it can identify unintended interactions and avoid potential collision in the null space beforehand. Even if the collision has happened, it can become compliant with the collision in the null space and try to reduce its impact on the main task (where the scan is ongoing) kinematically and dynamically. The multiple situations are integrated into a unified controller with a smooth transition to deal with the interactions by exhibiting human-intention-aware compliance. Experimental results demonstrate the framework’s ability to cope with all common interactions including intended intervention and unintended collision in a collaborative carotid artery ultrasound scanning task.

- **Multi-Modal Interaction Control of Ultrasound Scanning Robots with Safe Human Guidance and Contact Recovery**

<div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="assets/img/project_img/hri/icra2023_video_v5.mp4" class="img-fluid rounded z-depth-1" controls=true %}
</div>

Ultrasound scanning robots enable the automatic imaging of a patient's internal organs by maintaining close contact between the ultrasound probe and the patient's body during a scanning procedure. Comprehensive, high-quality ultrasound scans are essential for providing the patient with an accurate diagnosis and effective treatment plan. An ultrasound scanning robot usually works in a doctor-robot co-existing environment, hence both efficiency and safety during the collaboration should be considered. In this paper, we propose a novel multi-modal control scheme for ultrasound scanning robots, in which three interaction modes are integrated into a single control input. Specifically, the scanning mode drives the robot to track a time-varying trajectory on the patient's body under the desired impedance model; the recovery mode allows the robot to actively recontact the body whenever physical contact between the ultrasound probe and the patient's body is lost; the human-guided mode renders the robot passive such that the doctor can safely intervene to manually reposition the probe. The integration of multiple modes allows the doctor to intervene safely at any time during the task and also maximizes the robot's autonomous scanning ability. The performance of the robot is validated on a collaborative scanning task of a carotid artery examination.
