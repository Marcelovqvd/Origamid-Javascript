export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  tabContent[0].classList.add("ativo")

  function activeTab(index) {
    tabContent.forEach((section) => section.classList.remove("ativo"))
    const direcao = tabContent[index].dataset.anime
    tabContent[index].classList.add("ativo", direcao)
  }

  tabMenu.forEach((itenMenu, index) => {
    itenMenu.addEventListener("click", () => activeTab(index))
  })
}
