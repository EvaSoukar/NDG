const tabs = () => {
    const tabButtons = document.querySelectorAll('.food-menu__button')
    const tabMenus = document.querySelectorAll('.food-menu__list')

    const changeFoodMenu = (event) => {
        const currentTab = event.target
        const currentTabId = event.target.dataset.tabId
        const className = `.food-menu__list[data-tab-id="${currentTabId}"]`
       // const className = `${currentTabId}-menu`
        const currentFoodMenu = document.querySelector(className)

        tabButtons.forEach(button => button.classList.remove('food-menu__button--current'))
        tabMenus.forEach(menu => menu.classList.remove('food-menu__list--current'))

        currentTab.classList.add('food-menu__button--current')
        currentFoodMenu.classList.add('food-menu__list--current')
    }
    tabButtons.forEach( button => button.addEventListener('click', changeFoodMenu))
}
tabs()