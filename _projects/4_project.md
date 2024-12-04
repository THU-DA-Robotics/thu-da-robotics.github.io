---
layout: page
title: Human-Robot Interaction
description: in manufacturing industry
img: assets/img/project_img/hri_teaser.gif
importance: 1
category: work
related_publications: true
---

## Overview

Human-robot interaction (HRI) is a multidisciplinary field that explores the dynamics between humans and robots, aiming to enhance the efficiency, safety, and naturalness of these interactions. Unlike traditional automation systems, HRI systems are designed to interact with humans in a socially intuitive manner, requiring sophisticated understanding of human behavior, intentions, and social norms. This necessitates advances in perception, communication, and decision-making capabilities of robots.

Our focus is on developing intelligent systems that facilitate seamless human-robot collaboration. By addressing critical scientific challenges such as real-time perception of human actions, adaptive interaction strategies, and intuitive communication methods, we aim to create robots that can understand and respond to human needs in a context-aware manner.

We establish a comprehensive framework for HRI, encompassing human behavior modeling, real-time interaction management, and multimodal communication. The primary research areas include accurate human intention recognition using machine learning and sensor fusion, adaptive interaction policies that consider human preferences and emotional states, and robust communication interfaces that leverage speech, gesture, and facial expression recognition. We aim to overcome significant challenges such as variability in human behavior, dynamic and unstructured environments, and the need for personalized interaction, thereby advancing the state of the art in human-robot collaboration.

## A Complementary Framework for Human–Robot Collaboration With a Mixed AR–Haptic Interface

{% cite yan2024complementary %}

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="https://yanseim.github.io/assets/videos/yan_tcst2024_compressed_1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include video.liquid path="https://yanseim.github.io/assets/videos/yan_tcst2024_compressed_2.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
There is invariably a tradeoff between safety and efficiency for collaborative robots (cobots) in human–robot collaborations (HRCs). Robots that interact minimally with humans can work with high speed and accuracy but cannot adapt to new tasks or respond to unforeseen changes, whereas robots that work closely with humans can but only by becoming passive to humans, meaning that their main tasks are suspended and efficiency compromised. Accordingly, this article proposes a new complementary framework for HRC that balances the safety of humans and the efficiency of robots. In this framework, the robot carries out given tasks using a vision-based adaptive controller, and the human expert collaborates with the robot in the null space. Such a decoupling drives the robot to deal with existing issues in task space [e.g., uncalibrated camera, limited field of view (FOV)] and null space (e.g., joint limits) by itself while allowing the expert to adjust the configuration of the robot body to respond to unforeseen changes (e.g., sudden invasion, change in environment) without affecting the robot’s main task. In addition, the robot can simultaneously learn the expert’s demonstration in task space and null space beforehand with dynamic movement primitives (DMPs). Therefore, an expert’s knowledge and a robot’s capability are explored and complement each other. Human demonstration and involvement are enabled via a mixed interaction interface, i.e., augmented reality (AR) and haptic devices. The stability of the closed-loop system is rigorously proved with Lyapunov methods. Experimental results in various scenarios are presented to illustrate the performance of the proposed method.

## Adaptive Vision-Based Control of Redundant Robots with Null-Space Interaction for Human-Robot Collaboration

{% cite yan2022adaptive %}

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="https://yanseim.github.io/assets/videos/yan_icra2022_video_final.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
Human-robot collaboration aims to extend human ability through cooperation with robots. This technology is currently helping people with physical disabilities, has transformed the manufacturing process of companies, improved surgical performance, and will likely revolutionize the daily lives of everyone in the future. Being able to enhance the performance of both sides, such that human-robot collaboration outperforms a single robot/human, remains an open issue. For safer and more effective collaboration, a new control scheme has been proposed for redundant robots in this paper, consisting of an adaptive vision-based control term in task space and an interactive control term in null space. Such a formulation allows the robot to autonomously carry out tasks in an unknown environment without prior calibration while also interacting with humans to deal with unforeseen changes (e.g., potential collision, temporary needs) under the redundant configuration. The decoupling between task space and null space helps to explore the collaboration safely and effectively without affecting the main task of the robot end-effector. The stability of the closed-loop system has been rigorously proved with Lyapunov methods, and both the convergence of the position error in task space and that of the damping model in null space are guaranteed. The experimental results of a robot manipulator guided with the technology of augmented reality (AR) are presented to illustrate the performance of the control scheme.
