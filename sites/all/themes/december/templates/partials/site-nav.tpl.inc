<?php
$absolute_path = $_GET['q'];
?>


<nav class="site-nav">
  <ul class="site-nav__list">
    <li class="site-nav__item<?php if ($absolute_path == 'products-list' || $absolute_path == 'products-gallery') echo ' active'; ?>">
      <a href="/products-gallery?tid=All">
        <div>
          <span>WORK</span>
          <span>作品展示</span>
        </div>
      </a>
    </li>
    <li class="site-nav__item<?php if ($absolute_path == 'service-process') echo ' active'; ?>"><a href="/service-process">
        <div>
          <span>SERVICE</span>
          <span>服务流程</span>
        </div>
      </a>
    </li>
    <li class="site-nav__logo">
      <a href="/">
      <img src="/sites/all/themes/december/images/logo.png">
      </a>
    </li>
    <li class="site-nav__logo--fix">
      <a href="/">
      <img src="/sites/all/themes/december/images/logo_small.png">
      </a>
    </li>
    <li class="site-nav__item<?php if ($absolute_path == 'about') echo ' active'; ?>">
      <a href="/about">
        <div>
          <span>ABOUT</span>
          <span>关于我们</span>
        </div>
      </a>
    </li>
    <li class="site-nav__item<?php if ($absolute_path == 'contact-us') echo ' active'; ?>">
      <a href="/contact-us">
        <div>
          <span>CONTACT</span>
          <span>联系我们</span>
        </div>
      </a>
    </li>
  </ul>
</nav>
