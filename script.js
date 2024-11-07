function openModal() {
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  // Exibir o conteúdo principal após 4 segundos e ocultar o splash screen
  window.addEventListener("load", function () {
    setTimeout(function () {
      const splashScreen = document.getElementById("splash-screen");
      splashScreen.classList.add("fade-out"); // Adiciona a classe de fade-out

      setTimeout(function () {
        splashScreen.style.display = "none";
        document.getElementById("main-content").style.display = "block";
      }, 800); // Tempo da animação de fade-out
    }, 1000);
  });

  function toggleDropdown(button) {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('open');
  }

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  function filterVersions() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const versionList = document.getElementById('versionList');
    const dropdowns = versionList.getElementsByClassName('dropdown');

    for (let i = 0; i < dropdowns.length; i++) {
      const button = dropdowns[i].getElementsByTagName("button")[0];
      if (button.innerText.toUpperCase().indexOf(filter) > -1) {
        dropdowns[i].style.display = "";
      } else {
        dropdowns[i].style.display = "none";
      }
    }
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      filterVersions();
    }
  }
