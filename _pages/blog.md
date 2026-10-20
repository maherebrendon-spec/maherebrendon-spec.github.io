---
layout: page
permalink: /reflections/
title: reflections
nav: true
nav_order: 3
description: Weekly reflections on the ideas, places and experiences shaping my thinking.
---

{% assign reflection_pdfs = site.static_files | where_exp: "file", "file.path contains '/assets/pdf/reflections/'" | where_exp: "file", "file.extname == '.pdf'" | sort: "name" | reverse %}

{% if reflection_pdfs.size > 0 %}
<ul class="reflections-list">
  {% for reflection in reflection_pdfs %}
    {% assign filename = reflection.name | remove: '.pdf' %}
    {% assign parts = filename | split: '-' %}
    {% assign published_on = parts | slice: 0, 3 | join: '-' %}
    {% assign reflection_title = parts | slice: 3, 100 | join: ' ' | replace: '_', ' ' %}
    <li>
      <time datetime="{{ published_on }}">{{ published_on | date: "%-d %B %Y" }}</time>
      <a href="{{ reflection.path | relative_url }}" target="_blank" rel="noopener noreferrer">
        {{ reflection_title | default: filename | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No reflections published yet. My writing will appear here as it is published.</p>
{% endif %}

<style>
.reflections-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.reflections-list li {
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--global-divider-color);
}
.reflections-list time {
  display: block;
  margin-bottom: 0.3rem;
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}
.reflections-list a {
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
