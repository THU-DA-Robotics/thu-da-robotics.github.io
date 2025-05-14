---
layout: page
title: Dexterous Manipulation
description: contact-rich manipulation and in-hand manipulation
img: assets/img/project_img/dexterous_manipulation.jpg
importance: 1
category: work
related_publications: true
---

## Overview

Dexterous manipulation in robotics involves precise control of objects, crucial for manufacturing, healthcare, and daily tasks. It includes both prehensile (grasping) and non-prehensile (non-grasping) methods, each with unique challenges. Non-prehensile manipulation, using simple end effectors like single rods, often faces under-actuation and complex planning constraints. To address this, we developed a method for object retrieval in cluttered environments using a rod-like pusher, combining an improved Rapidly-Exploring Random Tree (RRT) planner and a Model Predictive Control (MPC) scheme. This method's contact-aware features enhance task feasibility and efficiency by enabling active obstacle removal and switching contact faces, validated through simulations and experiments.

Dexterous in-hand manipulation encounters difficulties with real-time contact discovery and inference. We propose a contact-implicit model predictive controller that generates real-time contact plans, allowing robust long-horizon in-hand tasks without pre-defined sequences. This approach enables efficient, large-displacement in-hand tasks and generalizes to various objects without pre-training. Additionally, we establish a comprehensive manipulation framework for deformable linear objects (DLOs) that includes large deformation modeling, whole-body shape control, and precise terminal manipulation. Our research addresses challenges like model uncertainty, high dimensionality, and multiple constraints, advancing robotic capabilities in complex, dynamic environments.

## Robotic In-Hand Manipulation for Large-Range Precise Object Movement

{% cite yu2025robotic %}
[[Website](https://rgmc-xl-team.github.io/ingrasp_manipulation/)]

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://rgmc-xl-team.github.io/ingrasp_manipulation/novel_objects.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Video of the in-grasp manipulation.
</div>

In-hand manipulation using multiple dexterous fingers is a critical robotic skill that can reduce the reliance on large arm motions, thereby saving space and energy. This letter focuses on in-grasp object movement, which refers to manipulating an object to a desired pose through only finger motions within a stable grasp. The key challenge lies in simultaneously achieving high precision and large-range movements while maintaining a constant stable grasp. To address this problem, we propose a simple and practical approach based on kinematic trajectory optimization with no need for pretraining or object geometries, which can be easily applied to novel objects in real-world scenarios. Adopting this approach, we won the championship for the in-hand manipulation track at the
9th Robotic Grasping and Manipulation Competition (RGMC) held at ICRA 2024. Implementation details, discussion, and further quantitative experimental results are presented in this letter, which aims to comprehensively evaluate our approach and share our key takeaways from the competition.

## Winner of ICRA 2024 Robotic Grasping and Manipulation Competition - In-Hand Manipulation Track

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://mingrui-yu.github.io/files/24_ICRA_RGMC.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Video of the in-hand manipulation competition.
</div>

The [Robotic Grasping and Manipulation Competition - In-Hand Manipulation Track](https://cse.usf.edu/~yusun/rgmc/2024.html) is focused on reconfiguring objects in robot dexterous hands. The competition tasks focus on two essential skills: in-hand precise manipulation and in-hand object re-orientation. Our solution involving an open-sourced Leap Hand, trajectory optimization, and reinforcement learning won the **1st place** of the in-hand manipulation competition, and also won the **Most Elegant Solution Award** among all tracks in the RGMC.

## Contact-Implicit Model Predictive Control for Dexterous In-hand Manipulation: A Long-Horizon and Robust Approach

{% cite jiang2024contact %}
[[Website](https://director-of-g.github.io/in_hand_manipulation/)]

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://director-of-g.github.io/in_hand_manipulation/video_short.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Video of the in-hand manipulation demo in simulation.
</div>

Inspired by recent advancements in contact-rich locomotion and manipulation, this paper proposes a novel model-based approach to control dexterous in-hand manipulation and overcome the current limitations.The proposed approach has the attractive feature, which allows the robot to robustly execute long-horizon in-hand manipulation without pre-defined contact sequences or separated planning procedures. Compared with other model-based methods, such a long-horizon feature enables replanning and robust execution of contact-rich motions to achieve large-displacement in-hand tasks more efficiently; Compared with existing learning-based methods, the proposed approach achieves the dexterity and also generalizes to different objects without any pre-training. Detailed simulations and ablation studies demonstrate the efficiency and effectiveness of our method. It runs at 20Hz on the 23-degree-of-freedom long-horizon in-hand object rotation task.

## Contact-Aware Non-prehensile Robotic Manipulation for Object Retrieval in Cluttered Environments

{% cite jiang2023contact %}
[[Website](https://director-of-g.github.io/push_in_clutter/)]

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://director-of-g.github.io/push_in_clutter/video_short.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
</div>
<div class="caption">
    Video of the nonprehensile pushing demo in real world.
</div>

This paper proposes a new non-prehensile manipulation method for the task of object retrieval in cluttered environments, using a rod-like pusher. Different from existing methods, the proposed approach is with the contact-aware feature, which enables the synthesized effect of active removal of obstacles, avoidance behavior, and switching contact face for improved dexterity. Hence both the feasibility and efficiency of the task are greatly promoted. The performance of the proposed method is validated in a planar object retrieval task, where the target object, surrounded by many fixed or movable obstacles, is manipulated and isolated. Both simulation and experimental results are presented.
