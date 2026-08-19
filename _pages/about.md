---
layout: about
title: about
permalink: /
subtitle: Working toward a world where everyone has access to clean, affordable and reliable energy.

profile:
  align: right
  image: prof_pic.JPG
  image_circular: true # crops the image to make it circular
  more_info: >
    <p><i class="fa-solid fa-location-dot"></i> United Kingdom</p>
    
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit:  # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>

/* -------------------------------------------------
   HOMEPAGE LAYOUT
-------------------------------------------------- */

/* Make the line under my name more prominent */
.post-header .desc {
  font-size: 1rem;
  line-height: 1.5;
}

@media (min-width: 576px) {
  .post-header .desc {
    width: 68%;
  }
}

/* Centre the location directly underneath the photograph */
.profile .more-info {
  width: 100%;
  text-align: center;
  margin-top: 0.75rem;
}

.profile .more-info p {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0;
}

/* Lift the photograph so its top aligns better with the intro */
@media (min-width: 576px) {
  .profile.float-right {
    margin-top: -2.25rem;
  }
}


/* -------------------------------------------------
   SUBTLE ANIMATED BACKGROUND
-------------------------------------------------- */

/*
   Uses the existing al-folio background colour as the base.
   The gradients move very slowly behind the page.
*/
body {
  background-color: var(--global-bg-color);

  background-image:
    radial-gradient(
      circle at 15% 20%,
      rgba(70, 120, 255, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 25%,
      rgba(0, 180, 160, 0.06),
      transparent 28%
    ),
    radial-gradient(
      circle at 65% 85%,
      rgba(150, 90, 220, 0.05),
      transparent 32%
    );

  background-size:
    120% 120%,
    130% 130%,
    125% 125%;

  animation: background-drift 20s ease-in-out infinite alternate;
}


/* Slowly move the three background forms */
@keyframes background-drift {
  0% {
    background-position:
      0% 0%,
      100% 0%,
      50% 100%;
  }

  100% {
    background-position:
      8% 5%,
      92% 8%,
      55% 92%;
  }
}


/* Turn animation off for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  body {
    animation: none;
  }
}

</style>


