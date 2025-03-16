---
layout: page
title: Exoskeleton Robots
description: rehabilitation and human augmentation
img: assets/img/project_img/exo_all.gif
importance: 1
category: work
related_publications: true
---

## Overview

Exoskeleton robots are a type of wearable robot primarily designed for two main functions: rehabilitation training and enhancing human motor functions. Depending on the assisted body part, they can be classified into lower limb exoskeletons and upper limb exoskeletons.
We focus on the interactive control and trajectory planning of exoskeleton robots. By integrating compliant actuators and generative models, we aim to develop safe, reliable lower limb and upper limb exoskeletons that can provide personalized assistance.

We have developed a unified interactive controller and a safety-based trajectory planning framework for lower limb exoskeletons with series elastic actuators (SEA) and upper limb exoskeletons with cable-driven SEA.

## Multi-Modal Anomaly Detection with Proprioceptive Perception

{% cite zhang2023multi %}

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://stan-32.github.io/files/zx2023.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

During the closely-coupled interaction, a mismatch between the wearer and the robot may result in physical conflict, which could affect assistance efficiency or even compromise safety. Therefore, such conflicts should be accurately detected and then properly relaxed by adjusting the robot's action. This work proposes a new learning scheme to detect physical conflicts between humans and robots.
The constructed learning network receives multi-modal information from proprioceptive sensors and then outputs the anomaly score to specify the physical conflict, which score is further used to continuously adjust the robot impedance to ensure a safe and efficient interaction.

## Individualized Human-In-the-Loop Adaption Framework for Lower-Limb Exoskeleton

{% cite chen2024learning %}

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://stan-32.github.io/files/chen2023indi.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

The generalizability of robots across different wearers in multiple tasks is important to ensure that the robot can provide correct and effective assistance in actual implementation. However, most lower-limb exoskeleton robots exhibit only limited generalizability. Therefore, we propose a human-in-the-loop learning and adaptation framework for exoskeleton robots to improve their performance in various tasks and for different wearers. To suit different wearers, an individualized walking trajectory is generated online using dynamic movement primitives and Bayes optimization. To accommodate various tasks, a task translator is constructed using a neural network to generalize a trajectory to more complex scenarios.

## Interactive Control for Cable-Driven Upper-Limb Exoskeleton Robots with Series Elastic Actuators

{% cite shu2023two %}

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://stan-32.github.io/files/sya2023.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

We propose a new trajectory-tracking control scheme for cable-driven upper-limb exoskeleton robots with series elastic actuators. The control objectives are achieved in two stages: Stage I is to approximate then compensate for unmodelled disturbances with iterative learning techniques; Stage II is to employ a suboptimal model predictive controller to drive the robot to track the desired trajectory. While controlling such a robot is not trivial, the proposed control scheme exhibits the advantages of force-sensorlessness, high accuracy, and low complexity compared with other methods in the real-world experiments.

## Safe and Individualized Motion Planning for Upper-limb Exoskeleton

{% cite chen2023safe %}

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://stan-32.github.io/files/chen2023safe.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>

We proposes a new motion planning scheme for upper-limb exoskeleton robots, which drives the robot to provide customized, safe, and individualized assistance using both
human demonstration and interactive learning.
Specifically, the robot first learns from a group of healthy subjects to generate a reference motion trajectory via probabilistic movement primitives (ProMP). It then learns from the patient during the training process to further shape the trajectory inside a moving safe region. The interactive data is fed back into the ProMP iteratively to enhance the individualized features for as long as the training process continues.
