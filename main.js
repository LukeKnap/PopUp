
/* Tento kód obsahuje posluchače událostí, které reagují na kliknutí na tlačítka s třídou 'popup-button' a otevírají/zavírají modální okna na stránce. Modální okno, které se má otevřít nebo zavřít, je určeno pomocí data-target atributu na tlačítku. */
window.onload = () => {
    // Tento kód spustí události až poté, co se načte celá stránka. To zajišťuje, že všechny prvky stránky jsou připraveny k interakci.
    const popup_btns = document.querySelectorAll('.popup-button')
    // Získání všech prvků s třídou 'popup-button' na stránce a uložení těchto prvků do proměnné popup_btns.
    popup_btns.forEach(button => {
        // Pro každé tlačítko s třídou 'popup-button' se přidává posluchač události 'click', který reaguje na kliknutí na tlačítko.
        button.addEventListener('click', e => {
            // Toto je posluchač události 'click', který se spustí při kliknutí na tlačítko.
            const target = e.target.dataset.target
// Tento řádek kódu získá hodnotu data-target atributu tlačítka, na které bylo kliknuto. Tento atribut určuje cílové modální okno, které má být otevřeno nebo zavřeno.
            const popup_el = document.querySelector(target)
            // Zde se hledá element s tímto data-target identifikátorem (hodnotou) v celém dokumentu. Pokud element existuje, je uložen do proměnné popup_el.
            if (popup_el != null) {
            // Tento blok kódu kontroluje, zda byl nalezen cílový element (modální okno) s daným data-target. Pokud ano, pokračuje se v kódu.
                popup_el.classList.toggle('is-active')
            // Zde se na cílovém elementu (modálním okně) přepíná třída 'is-active' pomocí metody toggle. To způsobí, že se třída přidá, pokud na elementu chybí, a odstraní se, pokud je přítomná. Tím se otevře nebo zavře modální okno na základě kliknutí na tlačítko.
            }
        })
    })
}

// Celkově tento kód umožňuje otevírat a zavírat modální okna na stránce pomocí tlačítek s třídou 'popup-button' a atributem data-target, který určuje, které modální okno má být ovládáno.