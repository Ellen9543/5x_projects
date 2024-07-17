document.addEventListener("DOMContentLoaded", () => {
  let oldMenuItem;
  document.querySelector(".menu").addEventListener("click", function (e) {
    const menuItem = e.target.closest("li"); // 取被點到的 li
    if (!menuItem) {
      // e.target 有可能是 ul
      return;
    }

    // 點到新的項目, 要移除前一個的 class
    if (oldMenuItem) {
      oldMenuItem.classList.remove("click");
      if (oldMenuItem.querySelector(".sub-menu")) {
        oldMenuItem.querySelector(".sub-menu").classList.add("hide");
      }
    }

    menuItem.classList.add("click"); // menu 下的 li 被點到要套 click class
    oldMenuItem = menuItem;
    if (menuItem.classList.contains("arrows")) {
      // 檢查 li 是否有 arrows class, 有表示有子選單
      const subMenu = menuItem.querySelector(".sub-menu");

      if (subMenu.classList.contains("hide")) {
        subMenu.classList.remove("hide"); // 隱藏 sub-menu
      } else {
        subMenu.classList.add("hide"); // 顯示 sub-menu
      }
    }
  });

  // 輪播
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  const nextSlide = () => {
    index = (index + 1) % items.length;
    carouselInner.style.transform = `translateX(-${index * 100}%)`; // 橫向移動一張圖的寬
  };

  setInterval(nextSlide, 3000); // 每3秒切換一次
});
