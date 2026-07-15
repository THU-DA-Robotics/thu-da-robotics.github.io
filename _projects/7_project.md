---
layout: page
title: Multi-Agent System
description: robot soccer
img: assets/img/project_img/robotsoccer.png
importance: 1
category: work
related_publications: true
---

## Dynamic Legged Ball Manipulation on Rugged Terrains with Hierarchical Reinforcement Learning

{% cite zhu2026dynamic %}
[[Website](https://dribble-hrl.github.io/)]

<div class="embed-responsive embed-responsive-16by9 rounded z-depth-1 mt-3 mb-3">
    <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/4sewohsXct8?si=fyTsBPm35-4HJ76q"
        title="Dynamic Legged Ball Manipulation on Rugged Terrains with Hierarchical Reinforcement Learning"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
</div>

Dynamic ball manipulation in rugged environments requires legged robots to coordinate terrain traversal and ball control under sparse learning rewards. This work proposes a hierarchical reinforcement learning framework in which a high-level policy switches among pre-trained low-level skills for ball dribbling and rough-terrain navigation. It also introduces Dynamic Skill-Focused Policy Optimization to improve learning efficiency for mixed discrete-continuous action spaces. Simulation and real-world experiments on a quadruped robot validate dynamic ball manipulation across challenging terrains.

## Dynamic Formation Planning and Control for Robot Soccer Game with Multi-Agent Reinforcement Learning and Behavioral Model

{% include video.liquid path="assets/video/robotsoccer.mp4" class="img-fluid rounded z-depth-1" controls=true %}

The robot soccer game has been considered as an illustrative scenario to test the performance of research outcomes on multi-agent systems (MAS). While various algorithm has been developed for a robot soccer game and implemented in the RoboCup competition, relatively little collaboration can be found in existing results, e.g., the formation for passing and dribbling during the offense or the collaborative obstruction during defense, which are very common in the teamwork of human soccer game.
