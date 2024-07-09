---
layout: profiles
permalink: /members/
title: Members
nav: true
nav_order: 7
display_categories: [PhD Students, Master's Students, Undergraduate Students, Alumni]
horizontal: true
profiles:
  # if you want to include more than one profile, just replicate the following block
  # and create one content file for each profile inside _pages/
  - align: right
    image: people/lixiang.jpg
    content: about_xiangli.md
    image_circular: false # crops the image to make it circular
---

---

<div class="row">
  {% for group in site.data.members %}
    {% if group.list.size > 0 %}
      {% if group.name %}
        <div class="w-100"></div>
          <h2>{{ group.name }}</h2>
        <div class="w-100"></div>
      {% endif %}
      {% if group.full %}
        <div style="margin-bottom:0.5rem"></div>
        <div class="row">
          {% for member in group.list %}
            <div class="col-xl-3 col-lg-3 col-md-4 text-center col-sm-6 col-xs-6">
              <a target="_blank" href="{{member.website}}">
                {% include figure.liquid loading="eager" path=member.image alt=member.alt class="img-fluid rounded" %} 
              </a>
              <p style="margin-bottom:1.5rem">{{ member.name }}</p>
              <!-- the figure has 1rem vertical margin -->
            </div>
          {% endfor %}
        </div>
      {% else %}
        <ul>
        {% for member in group.list %}
          {% if member.website %}
            <li><a target="_blank" href="{{member.website}}">{{ member.name }}</a></li>
          {% else %}
            <li>{{ member.name }}</li>
          {% endif %} 
        {% endfor %}
        </ul>
      {% endif %}
      <br>
    {% endif %}
  {% endfor %}
</div>