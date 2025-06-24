(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_sb_admin_2_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/sb-admin-2.css */ "./assets/styles/sb-admin-2.css");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs");
/* harmony import */ var datatables_net_bs4_css_dataTables_bootstrap4_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4/css/dataTables.bootstrap4.css */ "./node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css");
/* harmony import */ var _sb_admin_2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sb-admin-2.js */ "./assets/sb-admin-2.js");
/* harmony import */ var _sb_admin_2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sb_admin_2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n_datatables_datatables_fr_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n/datatables/datatables.fr.js */ "./assets/i18n/datatables/datatables.fr.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


window.$ = __webpack_provided_window_dot_jQuery = (jquery__WEBPACK_IMPORTED_MODULE_1___default());
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");







//TODO: gérer l'i18n

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.dataTable').DataTable({
    language: _i18n_datatables_datatables_fr_js__WEBPACK_IMPORTED_MODULE_8__.language
  });
});

/***/ }),

/***/ "./assets/i18n/datatables/datatables.fr.js":
/*!*************************************************!*\
  !*** ./assets/i18n/datatables/datatables.fr.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });
var language = {
  "emptyTable": "Aucune donnée disponible dans le tableau",
  "loadingRecords": "Chargement...",
  "processing": "Traitement...",
  "select": {
    "rows": {
      "_": "%d lignes sélectionnées",
      "1": "1 ligne sélectionnée"
    },
    "cells": {
      "1": "1 cellule sélectionnée",
      "_": "%d cellules sélectionnées"
    },
    "columns": {
      "1": "1 colonne sélectionnée",
      "_": "%d colonnes sélectionnées"
    }
  },
  "autoFill": {
    "cancel": "Annuler",
    "fill": "Remplir toutes les cellules avec <i>%d<\/i>",
    "fillHorizontal": "Remplir les cellules horizontalement",
    "fillVertical": "Remplir les cellules verticalement"
  },
  "searchBuilder": {
    "conditions": {
      "date": {
        "after": "Après le",
        "before": "Avant le",
        "between": "Entre",
        "empty": "Vide",
        "not": "Différent de",
        "notBetween": "Pas entre",
        "notEmpty": "Non vide",
        "equals": "Égal à"
      },
      "number": {
        "between": "Entre",
        "empty": "Vide",
        "gt": "Supérieur à",
        "gte": "Supérieur ou égal à",
        "lt": "Inférieur à",
        "lte": "Inférieur ou égal à",
        "not": "Différent de",
        "notBetween": "Pas entre",
        "notEmpty": "Non vide",
        "equals": "Égal à"
      },
      "string": {
        "contains": "Contient",
        "empty": "Vide",
        "endsWith": "Se termine par",
        "not": "Différent de",
        "notEmpty": "Non vide",
        "startsWith": "Commence par",
        "equals": "Égal à",
        "notContains": "Ne contient pas",
        "notEndsWith": "Ne termine pas par",
        "notStartsWith": "Ne commence pas par"
      },
      "array": {
        "empty": "Vide",
        "contains": "Contient",
        "not": "Différent de",
        "notEmpty": "Non vide",
        "without": "Sans",
        "equals": "Égal à"
      }
    },
    "add": "Ajouter une condition",
    "button": {
      "0": "Recherche avancée",
      "_": "Recherche avancée (%d)"
    },
    "clearAll": "Effacer tout",
    "condition": "Condition",
    "data": "Donnée",
    "deleteTitle": "Supprimer la règle de filtrage",
    "logicAnd": "Et",
    "logicOr": "Ou",
    "title": {
      "0": "Recherche avancée",
      "_": "Recherche avancée (%d)"
    },
    "value": "Valeur",
    "leftTitle": "Désindenter le critère",
    "rightTitle": "Indenter le critère"
  },
  "searchPanes": {
    "clearMessage": "Effacer tout",
    "count": "{total}",
    "title": "Filtres actifs - %d",
    "collapse": {
      "0": "Volet de recherche",
      "_": "Volet de recherche (%d)"
    },
    "countFiltered": "{shown} ({total})",
    "emptyPanes": "Pas de volet de recherche",
    "loadMessage": "Chargement du volet de recherche...",
    "collapseMessage": "Réduire tout",
    "showMessage": "Montrer tout"
  },
  "buttons": {
    "collection": "Collection",
    "colvis": "Visibilité colonnes",
    "colvisRestore": "Rétablir visibilité",
    "copy": "Copier",
    "copySuccess": {
      "1": "1 ligne copiée dans le presse-papier",
      "_": "%d lignes copiées dans le presse-papier"
    },
    "copyTitle": "Copier dans le presse-papier",
    "csv": "CSV",
    "excel": "Excel",
    "pageLength": {
      "-1": "Afficher toutes les lignes",
      "_": "Afficher %d lignes",
      "1": "Afficher 1 ligne"
    },
    "pdf": "PDF",
    "print": "Imprimer",
    "copyKeys": "Appuyez sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier.",
    "createState": "Créer un état",
    "removeAllStates": "Supprimer tous les états",
    "removeState": "Supprimer",
    "renameState": "Renommer",
    "savedStates": "États sauvegardés",
    "stateRestore": "État %d",
    "updateState": "Mettre à jour"
  },
  "decimal": ",",
  "datetime": {
    "previous": "Précédent",
    "next": "Suivant",
    "hours": "Heures",
    "minutes": "Minutes",
    "seconds": "Secondes",
    "unknown": "-",
    "amPm": ["am", "pm"],
    "months": {
      "0": "Janvier",
      "2": "Mars",
      "3": "Avril",
      "4": "Mai",
      "5": "Juin",
      "6": "Juillet",
      "8": "Septembre",
      "9": "Octobre",
      "10": "Novembre",
      "1": "Février",
      "11": "Décembre",
      "7": "Août"
    },
    "weekdays": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  },
  "editor": {
    "close": "Fermer",
    "create": {
      "title": "Créer une nouvelle entrée",
      "button": "Nouveau",
      "submit": "Créer"
    },
    "edit": {
      "button": "Editer",
      "title": "Editer Entrée",
      "submit": "Mettre à jour"
    },
    "remove": {
      "button": "Supprimer",
      "title": "Supprimer",
      "submit": "Supprimer",
      "confirm": {
        "_": "Êtes-vous sûr de vouloir supprimer %d lignes ?",
        "1": "Êtes-vous sûr de vouloir supprimer 1 ligne ?"
      }
    },
    "multi": {
      "title": "Valeurs multiples",
      "info": "Les éléments sélectionnés contiennent différentes valeurs pour cette entrée. Pour modifier et définir tous les éléments de cette entrée à la même valeur, cliquez ou tapez ici, sinon ils conserveront leurs valeurs individuelles.",
      "restore": "Annuler les modifications",
      "noMulti": "Ce champ peut être modifié individuellement, mais ne fait pas partie d'un groupe. "
    },
    "error": {
      "system": "Une erreur système s'est produite (<a target=\"\\\" rel=\"nofollow\" href=\"\\\">Plus d'information<\/a>)."
    }
  },
  "stateRestore": {
    "removeSubmit": "Supprimer",
    "creationModal": {
      "button": "Créer",
      "order": "Tri",
      "paging": "Pagination",
      "scroller": "Position du défilement",
      "search": "Recherche",
      "select": "Sélection",
      "columns": {
        "search": "Recherche par colonne",
        "visible": "Visibilité des colonnes"
      },
      "name": "Nom :",
      "searchBuilder": "Recherche avancée",
      "title": "Créer un nouvel état",
      "toggleLabel": "Inclus :"
    },
    "renameButton": "Renommer",
    "duplicateError": "Il existe déjà un état avec ce nom.",
    "emptyError": "Le nom ne peut pas être vide.",
    "emptyStates": "Aucun état sauvegardé",
    "removeConfirm": "Voulez vous vraiment supprimer %s ?",
    "removeError": "Échec de la suppression de l'état.",
    "removeJoiner": "et",
    "removeTitle": "Supprimer l'état",
    "renameLabel": "Nouveau nom pour %s :",
    "renameTitle": "Renommer l'état"
  },
  "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
  "infoEmpty": "Affichage de 0 à 0 sur 0 entrées",
  "infoFiltered": "(filtrées depuis un total de _MAX_ entrées)",
  "lengthMenu": "Afficher _MENU_ entrées",
  "paginate": {
    "first": "Première",
    "last": "Dernière",
    "next": "Suivante",
    "previous": "Précédente"
  },
  "zeroRecords": "Aucune entrée correspondante trouvée",
  "aria": {
    "sortAscending": " : activer pour trier la colonne par ordre croissant",
    "sortDescending": " : activer pour trier la colonne par ordre décroissant"
  },
  "infoThousands": " ",
  "search": "Rechercher :",
  "thousands": " ",
  "columnControl": {
    "colVis": "Visibilité colonnes",
    "colVisDropdown": "Visibilité colonnes",
    "dropdown": "Plus...",
    "orderAddAsc": "Ajouter tri croissant",
    "orderAddDesc": "Ajouter tri décroissant",
    "orderAsc": "Tri croissant",
    "orderDesc": "Tri décroissant",
    "orderRemove": "Supprimer du tri",
    "reorder": "Réorganiser les colonnes",
    "reorderLeft": "Déplacer la colonne vers la gauche",
    "reorderRight": "Déplacer la colonne vers la droite",
    "searchClear": "Effacer la recherche",
    "searchDropdown": "Rechercher",
    "list": {
      "add": "Tout sélectionner",
      "none": "Désélectionner",
      "search": "Rechercher...",
      "empty": "Vide"
    }
  },
  "orderClear": "Effacer le tri",
  "language": {
    "columnControl": {
      "search": {
        "datetime": {
          "equal": "Égal à",
          "notEqual": "Différent de",
          "greater": "Après le",
          "less": "Avant le",
          "empty": "Vide",
          "notEmpty": "Non vide"
        },
        "text": {
          "equal": "Égal à",
          "notEqual": "Différent de",
          "starts": "Commence par",
          "ends": "Se termine par",
          "empty": "Vide",
          "notEmpty": "Non vide"
        },
        "number": {
          "equal": "Égal à",
          "notEqual": "Différent de",
          "greater": "Supérieur à",
          "greaterOrEqual": "Supérieur ou égal à",
          "less": "Inférieur à",
          "lessOrEqual": "Inférieur ou égal à",
          "empty": "Vide",
          "notEmpty": "Non vide"
        }
      }
    }
  }
};

/***/ }),

/***/ "./assets/sb-admin-2.js":
/*!******************************!*\
  !*** ./assets/sb-admin-2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function ($) {
  "use strict";

  // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }
    ;
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    }
    ;

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    }
    ;
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
})(jQuery); // End of use strict

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/sb-admin-2.css":
/*!**************************************!*\
  !*** ./assets/styles/sb-admin-2.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_fortawesome_fontawesome--d4b886"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDOUIsQ0FBQyxNQUFNO01BQ0x4QixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3lCLE9BQU8sQ0FBQyxDQUFDO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0F6QixDQUFDLENBQUNLLFFBQVEsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVNDLENBQUMsRUFBRTtJQUNyRCxJQUFJaUIsT0FBTyxHQUFHMUIsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQkEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDMkIsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO01BQzdCUCxTQUFTLEVBQUdyQixDQUFDLENBQUMwQixPQUFPLENBQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDQztJQUMvQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQztJQUN6QnRCLENBQUMsQ0FBQ2EsY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxDQUFDO0FBRUosQ0FBQyxFQUFFcEIsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkRaOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pMThuL2RhdGF0YWJsZXMvZGF0YXRhYmxlcy5mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2ItYWRtaW4tMi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3NiLWFkbWluLTIuY3NzPzQ3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbndpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9ICQ7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3NiLWFkbWluLTIuY3NzJztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczQnO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNC9jc3MvZGF0YVRhYmxlcy5ib290c3RyYXA0LmNzcyc7XHJcbmltcG9ydCAnLi9zYi1hZG1pbi0yLmpzJ1xyXG5cclxuaW1wb3J0IHsgbGFuZ3VhZ2UgfSBmcm9tICcuL2kxOG4vZGF0YXRhYmxlcy9kYXRhdGFibGVzLmZyLmpzJztcclxuLy9UT0RPOiBnw6lyZXIgbCdpMThuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRhVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgbGFuZ3VhZ2UgPSB7XHJcbiAgXCJlbXB0eVRhYmxlXCI6IFwiQXVjdW5lIGRvbm7DqWUgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXVcIixcclxuICBcImxvYWRpbmdSZWNvcmRzXCI6IFwiQ2hhcmdlbWVudC4uLlwiLFxyXG4gIFwicHJvY2Vzc2luZ1wiOiBcIlRyYWl0ZW1lbnQuLi5cIixcclxuICBcInNlbGVjdFwiOiB7XHJcbiAgICBcInJvd3NcIjoge1xyXG4gICAgICBcIl9cIjogXCIlZCBsaWduZXMgc8OpbGVjdGlvbm7DqWVzXCIsXHJcbiAgICAgIFwiMVwiOiBcIjEgbGlnbmUgc8OpbGVjdGlvbm7DqWVcIlxyXG4gICAgfSxcclxuICAgIFwiY2VsbHNcIjoge1xyXG4gICAgICBcIjFcIjogXCIxIGNlbGx1bGUgc8OpbGVjdGlvbm7DqWVcIixcclxuICAgICAgXCJfXCI6IFwiJWQgY2VsbHVsZXMgc8OpbGVjdGlvbm7DqWVzXCJcclxuICAgIH0sXHJcbiAgICBcImNvbHVtbnNcIjoge1xyXG4gICAgICBcIjFcIjogXCIxIGNvbG9ubmUgc8OpbGVjdGlvbm7DqWVcIixcclxuICAgICAgXCJfXCI6IFwiJWQgY29sb25uZXMgc8OpbGVjdGlvbm7DqWVzXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwiYXV0b0ZpbGxcIjoge1xyXG4gICAgXCJjYW5jZWxcIjogXCJBbm51bGVyXCIsXHJcbiAgICBcImZpbGxcIjogXCJSZW1wbGlyIHRvdXRlcyBsZXMgY2VsbHVsZXMgYXZlYyA8aT4lZDxcXC9pPlwiLFxyXG4gICAgXCJmaWxsSG9yaXpvbnRhbFwiOiBcIlJlbXBsaXIgbGVzIGNlbGx1bGVzIGhvcml6b250YWxlbWVudFwiLFxyXG4gICAgXCJmaWxsVmVydGljYWxcIjogXCJSZW1wbGlyIGxlcyBjZWxsdWxlcyB2ZXJ0aWNhbGVtZW50XCJcclxuICB9LFxyXG4gIFwic2VhcmNoQnVpbGRlclwiOiB7XHJcbiAgICBcImNvbmRpdGlvbnNcIjoge1xyXG4gICAgICBcImRhdGVcIjoge1xyXG4gICAgICAgIFwiYWZ0ZXJcIjogXCJBcHLDqHMgbGVcIixcclxuICAgICAgICBcImJlZm9yZVwiOiBcIkF2YW50IGxlXCIsXHJcbiAgICAgICAgXCJiZXR3ZWVuXCI6IFwiRW50cmVcIixcclxuICAgICAgICBcImVtcHR5XCI6IFwiVmlkZVwiLFxyXG4gICAgICAgIFwibm90XCI6IFwiRGlmZsOpcmVudCBkZVwiLFxyXG4gICAgICAgIFwibm90QmV0d2VlblwiOiBcIlBhcyBlbnRyZVwiLFxyXG4gICAgICAgIFwibm90RW1wdHlcIjogXCJOb24gdmlkZVwiLFxyXG4gICAgICAgIFwiZXF1YWxzXCI6IFwiw4lnYWwgw6BcIlxyXG4gICAgICB9LFxyXG4gICAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgICAgXCJiZXR3ZWVuXCI6IFwiRW50cmVcIixcclxuICAgICAgICBcImVtcHR5XCI6IFwiVmlkZVwiLFxyXG4gICAgICAgIFwiZ3RcIjogXCJTdXDDqXJpZXVyIMOgXCIsXHJcbiAgICAgICAgXCJndGVcIjogXCJTdXDDqXJpZXVyIG91IMOpZ2FsIMOgXCIsXHJcbiAgICAgICAgXCJsdFwiOiBcIkluZsOpcmlldXIgw6BcIixcclxuICAgICAgICBcImx0ZVwiOiBcIkluZsOpcmlldXIgb3Ugw6lnYWwgw6BcIixcclxuICAgICAgICBcIm5vdFwiOiBcIkRpZmbDqXJlbnQgZGVcIixcclxuICAgICAgICBcIm5vdEJldHdlZW5cIjogXCJQYXMgZW50cmVcIixcclxuICAgICAgICBcIm5vdEVtcHR5XCI6IFwiTm9uIHZpZGVcIixcclxuICAgICAgICBcImVxdWFsc1wiOiBcIsOJZ2FsIMOgXCJcclxuICAgICAgfSxcclxuICAgICAgXCJzdHJpbmdcIjoge1xyXG4gICAgICAgIFwiY29udGFpbnNcIjogXCJDb250aWVudFwiLFxyXG4gICAgICAgIFwiZW1wdHlcIjogXCJWaWRlXCIsXHJcbiAgICAgICAgXCJlbmRzV2l0aFwiOiBcIlNlIHRlcm1pbmUgcGFyXCIsXHJcbiAgICAgICAgXCJub3RcIjogXCJEaWZmw6lyZW50IGRlXCIsXHJcbiAgICAgICAgXCJub3RFbXB0eVwiOiBcIk5vbiB2aWRlXCIsXHJcbiAgICAgICAgXCJzdGFydHNXaXRoXCI6IFwiQ29tbWVuY2UgcGFyXCIsXHJcbiAgICAgICAgXCJlcXVhbHNcIjogXCLDiWdhbCDDoFwiLFxyXG4gICAgICAgIFwibm90Q29udGFpbnNcIjogXCJOZSBjb250aWVudCBwYXNcIixcclxuICAgICAgICBcIm5vdEVuZHNXaXRoXCI6IFwiTmUgdGVybWluZSBwYXMgcGFyXCIsXHJcbiAgICAgICAgXCJub3RTdGFydHNXaXRoXCI6IFwiTmUgY29tbWVuY2UgcGFzIHBhclwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiYXJyYXlcIjoge1xyXG4gICAgICAgIFwiZW1wdHlcIjogXCJWaWRlXCIsXHJcbiAgICAgICAgXCJjb250YWluc1wiOiBcIkNvbnRpZW50XCIsXHJcbiAgICAgICAgXCJub3RcIjogXCJEaWZmw6lyZW50IGRlXCIsXHJcbiAgICAgICAgXCJub3RFbXB0eVwiOiBcIk5vbiB2aWRlXCIsXHJcbiAgICAgICAgXCJ3aXRob3V0XCI6IFwiU2Fuc1wiLFxyXG4gICAgICAgIFwiZXF1YWxzXCI6IFwiw4lnYWwgw6BcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJhZGRcIjogXCJBam91dGVyIHVuZSBjb25kaXRpb25cIixcclxuICAgIFwiYnV0dG9uXCI6IHtcclxuICAgICAgXCIwXCI6IFwiUmVjaGVyY2hlIGF2YW5jw6llXCIsXHJcbiAgICAgIFwiX1wiOiBcIlJlY2hlcmNoZSBhdmFuY8OpZSAoJWQpXCJcclxuICAgIH0sXHJcbiAgICBcImNsZWFyQWxsXCI6IFwiRWZmYWNlciB0b3V0XCIsXHJcbiAgICBcImNvbmRpdGlvblwiOiBcIkNvbmRpdGlvblwiLFxyXG4gICAgXCJkYXRhXCI6IFwiRG9ubsOpZVwiLFxyXG4gICAgXCJkZWxldGVUaXRsZVwiOiBcIlN1cHByaW1lciBsYSByw6hnbGUgZGUgZmlsdHJhZ2VcIixcclxuICAgIFwibG9naWNBbmRcIjogXCJFdFwiLFxyXG4gICAgXCJsb2dpY09yXCI6IFwiT3VcIixcclxuICAgIFwidGl0bGVcIjoge1xyXG4gICAgICBcIjBcIjogXCJSZWNoZXJjaGUgYXZhbmPDqWVcIixcclxuICAgICAgXCJfXCI6IFwiUmVjaGVyY2hlIGF2YW5jw6llICglZClcIlxyXG4gICAgfSxcclxuICAgIFwidmFsdWVcIjogXCJWYWxldXJcIixcclxuICAgIFwibGVmdFRpdGxlXCI6IFwiRMOpc2luZGVudGVyIGxlIGNyaXTDqHJlXCIsXHJcbiAgICBcInJpZ2h0VGl0bGVcIjogXCJJbmRlbnRlciBsZSBjcml0w6hyZVwiXHJcbiAgfSxcclxuICBcInNlYXJjaFBhbmVzXCI6IHtcclxuICAgIFwiY2xlYXJNZXNzYWdlXCI6IFwiRWZmYWNlciB0b3V0XCIsXHJcbiAgICBcImNvdW50XCI6IFwie3RvdGFsfVwiLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkZpbHRyZXMgYWN0aWZzIC0gJWRcIixcclxuICAgIFwiY29sbGFwc2VcIjoge1xyXG4gICAgICBcIjBcIjogXCJWb2xldCBkZSByZWNoZXJjaGVcIixcclxuICAgICAgXCJfXCI6IFwiVm9sZXQgZGUgcmVjaGVyY2hlICglZClcIlxyXG4gICAgfSxcclxuICAgIFwiY291bnRGaWx0ZXJlZFwiOiBcIntzaG93bn0gKHt0b3RhbH0pXCIsXHJcbiAgICBcImVtcHR5UGFuZXNcIjogXCJQYXMgZGUgdm9sZXQgZGUgcmVjaGVyY2hlXCIsXHJcbiAgICBcImxvYWRNZXNzYWdlXCI6IFwiQ2hhcmdlbWVudCBkdSB2b2xldCBkZSByZWNoZXJjaGUuLi5cIixcclxuICAgIFwiY29sbGFwc2VNZXNzYWdlXCI6IFwiUsOpZHVpcmUgdG91dFwiLFxyXG4gICAgXCJzaG93TWVzc2FnZVwiOiBcIk1vbnRyZXIgdG91dFwiXHJcbiAgfSxcclxuICBcImJ1dHRvbnNcIjoge1xyXG4gICAgXCJjb2xsZWN0aW9uXCI6IFwiQ29sbGVjdGlvblwiLFxyXG4gICAgXCJjb2x2aXNcIjogXCJWaXNpYmlsaXTDqSBjb2xvbm5lc1wiLFxyXG4gICAgXCJjb2x2aXNSZXN0b3JlXCI6IFwiUsOpdGFibGlyIHZpc2liaWxpdMOpXCIsXHJcbiAgICBcImNvcHlcIjogXCJDb3BpZXJcIixcclxuICAgIFwiY29weVN1Y2Nlc3NcIjoge1xyXG4gICAgICBcIjFcIjogXCIxIGxpZ25lIGNvcGnDqWUgZGFucyBsZSBwcmVzc2UtcGFwaWVyXCIsXHJcbiAgICAgIFwiX1wiOiBcIiVkIGxpZ25lcyBjb3Bpw6llcyBkYW5zIGxlIHByZXNzZS1wYXBpZXJcIlxyXG4gICAgfSxcclxuICAgIFwiY29weVRpdGxlXCI6IFwiQ29waWVyIGRhbnMgbGUgcHJlc3NlLXBhcGllclwiLFxyXG4gICAgXCJjc3ZcIjogXCJDU1ZcIixcclxuICAgIFwiZXhjZWxcIjogXCJFeGNlbFwiLFxyXG4gICAgXCJwYWdlTGVuZ3RoXCI6IHtcclxuICAgICAgXCItMVwiOiBcIkFmZmljaGVyIHRvdXRlcyBsZXMgbGlnbmVzXCIsXHJcbiAgICAgIFwiX1wiOiBcIkFmZmljaGVyICVkIGxpZ25lc1wiLFxyXG4gICAgICBcIjFcIjogXCJBZmZpY2hlciAxIGxpZ25lXCJcclxuICAgIH0sXHJcbiAgICBcInBkZlwiOiBcIlBERlwiLFxyXG4gICAgXCJwcmludFwiOiBcIkltcHJpbWVyXCIsXHJcbiAgICBcImNvcHlLZXlzXCI6IFwiQXBwdXlleiBzdXIgY3RybCBvdSB1MjMxOCArIEMgcG91ciBjb3BpZXIgbGVzIGRvbm7DqWVzIGR1IHRhYmxlYXUgZGFucyB2b3RyZSBwcmVzc2UtcGFwaWVyLlwiLFxyXG4gICAgXCJjcmVhdGVTdGF0ZVwiOiBcIkNyw6llciB1biDDqXRhdFwiLFxyXG4gICAgXCJyZW1vdmVBbGxTdGF0ZXNcIjogXCJTdXBwcmltZXIgdG91cyBsZXMgw6l0YXRzXCIsXHJcbiAgICBcInJlbW92ZVN0YXRlXCI6IFwiU3VwcHJpbWVyXCIsXHJcbiAgICBcInJlbmFtZVN0YXRlXCI6IFwiUmVub21tZXJcIixcclxuICAgIFwic2F2ZWRTdGF0ZXNcIjogXCLDiXRhdHMgc2F1dmVnYXJkw6lzXCIsXHJcbiAgICBcInN0YXRlUmVzdG9yZVwiOiBcIsOJdGF0ICVkXCIsXHJcbiAgICBcInVwZGF0ZVN0YXRlXCI6IFwiTWV0dHJlIMOgIGpvdXJcIlxyXG4gIH0sXHJcbiAgXCJkZWNpbWFsXCI6IFwiLFwiLFxyXG4gIFwiZGF0ZXRpbWVcIjoge1xyXG4gICAgXCJwcmV2aW91c1wiOiBcIlByw6ljw6lkZW50XCIsXHJcbiAgICBcIm5leHRcIjogXCJTdWl2YW50XCIsXHJcbiAgICBcImhvdXJzXCI6IFwiSGV1cmVzXCIsXHJcbiAgICBcIm1pbnV0ZXNcIjogXCJNaW51dGVzXCIsXHJcbiAgICBcInNlY29uZHNcIjogXCJTZWNvbmRlc1wiLFxyXG4gICAgXCJ1bmtub3duXCI6IFwiLVwiLFxyXG4gICAgXCJhbVBtXCI6IFtcclxuICAgICAgXCJhbVwiLFxyXG4gICAgICBcInBtXCJcclxuICAgIF0sXHJcbiAgICBcIm1vbnRoc1wiOiB7XHJcbiAgICAgIFwiMFwiOiBcIkphbnZpZXJcIixcclxuICAgICAgXCIyXCI6IFwiTWFyc1wiLFxyXG4gICAgICBcIjNcIjogXCJBdnJpbFwiLFxyXG4gICAgICBcIjRcIjogXCJNYWlcIixcclxuICAgICAgXCI1XCI6IFwiSnVpblwiLFxyXG4gICAgICBcIjZcIjogXCJKdWlsbGV0XCIsXHJcbiAgICAgIFwiOFwiOiBcIlNlcHRlbWJyZVwiLFxyXG4gICAgICBcIjlcIjogXCJPY3RvYnJlXCIsXHJcbiAgICAgIFwiMTBcIjogXCJOb3ZlbWJyZVwiLFxyXG4gICAgICBcIjFcIjogXCJGw6l2cmllclwiLFxyXG4gICAgICBcIjExXCI6IFwiRMOpY2VtYnJlXCIsXHJcbiAgICAgIFwiN1wiOiBcIkFvw7t0XCJcclxuICAgIH0sXHJcbiAgICBcIndlZWtkYXlzXCI6IFtcclxuICAgICAgXCJEaW1cIixcclxuICAgICAgXCJMdW5cIixcclxuICAgICAgXCJNYXJcIixcclxuICAgICAgXCJNZXJcIixcclxuICAgICAgXCJKZXVcIixcclxuICAgICAgXCJWZW5cIixcclxuICAgICAgXCJTYW1cIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgXCJlZGl0b3JcIjoge1xyXG4gICAgXCJjbG9zZVwiOiBcIkZlcm1lclwiLFxyXG4gICAgXCJjcmVhdGVcIjoge1xyXG4gICAgICBcInRpdGxlXCI6IFwiQ3LDqWVyIHVuZSBub3V2ZWxsZSBlbnRyw6llXCIsXHJcbiAgICAgIFwiYnV0dG9uXCI6IFwiTm91dmVhdVwiLFxyXG4gICAgICBcInN1Ym1pdFwiOiBcIkNyw6llclwiXHJcbiAgICB9LFxyXG4gICAgXCJlZGl0XCI6IHtcclxuICAgICAgXCJidXR0b25cIjogXCJFZGl0ZXJcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIkVkaXRlciBFbnRyw6llXCIsXHJcbiAgICAgIFwic3VibWl0XCI6IFwiTWV0dHJlIMOgIGpvdXJcIlxyXG4gICAgfSxcclxuICAgIFwicmVtb3ZlXCI6IHtcclxuICAgICAgXCJidXR0b25cIjogXCJTdXBwcmltZXJcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIlN1cHByaW1lclwiLFxyXG4gICAgICBcInN1Ym1pdFwiOiBcIlN1cHByaW1lclwiLFxyXG4gICAgICBcImNvbmZpcm1cIjoge1xyXG4gICAgICAgIFwiX1wiOiBcIsOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciAlZCBsaWduZXMgP1wiLFxyXG4gICAgICAgIFwiMVwiOiBcIsOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciAxIGxpZ25lID9cIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJtdWx0aVwiOiB7XHJcbiAgICAgIFwidGl0bGVcIjogXCJWYWxldXJzIG11bHRpcGxlc1wiLFxyXG4gICAgICBcImluZm9cIjogXCJMZXMgw6lsw6ltZW50cyBzw6lsZWN0aW9ubsOpcyBjb250aWVubmVudCBkaWZmw6lyZW50ZXMgdmFsZXVycyBwb3VyIGNldHRlIGVudHLDqWUuIFBvdXIgbW9kaWZpZXIgZXQgZMOpZmluaXIgdG91cyBsZXMgw6lsw6ltZW50cyBkZSBjZXR0ZSBlbnRyw6llIMOgIGxhIG3Dqm1lIHZhbGV1ciwgY2xpcXVleiBvdSB0YXBleiBpY2ksIHNpbm9uIGlscyBjb25zZXJ2ZXJvbnQgbGV1cnMgdmFsZXVycyBpbmRpdmlkdWVsbGVzLlwiLFxyXG4gICAgICBcInJlc3RvcmVcIjogXCJBbm51bGVyIGxlcyBtb2RpZmljYXRpb25zXCIsXHJcbiAgICAgIFwibm9NdWx0aVwiOiBcIkNlIGNoYW1wIHBldXQgw6p0cmUgbW9kaWZpw6kgaW5kaXZpZHVlbGxlbWVudCwgbWFpcyBuZSBmYWl0IHBhcyBwYXJ0aWUgZCd1biBncm91cGUuIFwiXHJcbiAgICB9LFxyXG4gICAgXCJlcnJvclwiOiB7XHJcbiAgICAgIFwic3lzdGVtXCI6IFwiVW5lIGVycmV1ciBzeXN0w6htZSBzJ2VzdCBwcm9kdWl0ZSAoPGEgdGFyZ2V0PVxcXCJcXFxcXFxcIiByZWw9XFxcIm5vZm9sbG93XFxcIiBocmVmPVxcXCJcXFxcXFxcIj5QbHVzIGQnaW5mb3JtYXRpb248XFwvYT4pLlwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBcInN0YXRlUmVzdG9yZVwiOiB7XHJcbiAgICBcInJlbW92ZVN1Ym1pdFwiOiBcIlN1cHByaW1lclwiLFxyXG4gICAgXCJjcmVhdGlvbk1vZGFsXCI6IHtcclxuICAgICAgXCJidXR0b25cIjogXCJDcsOpZXJcIixcclxuICAgICAgXCJvcmRlclwiOiBcIlRyaVwiLFxyXG4gICAgICBcInBhZ2luZ1wiOiBcIlBhZ2luYXRpb25cIixcclxuICAgICAgXCJzY3JvbGxlclwiOiBcIlBvc2l0aW9uIGR1IGTDqWZpbGVtZW50XCIsXHJcbiAgICAgIFwic2VhcmNoXCI6IFwiUmVjaGVyY2hlXCIsXHJcbiAgICAgIFwic2VsZWN0XCI6IFwiU8OpbGVjdGlvblwiLFxyXG4gICAgICBcImNvbHVtbnNcIjoge1xyXG4gICAgICAgIFwic2VhcmNoXCI6IFwiUmVjaGVyY2hlIHBhciBjb2xvbm5lXCIsXHJcbiAgICAgICAgXCJ2aXNpYmxlXCI6IFwiVmlzaWJpbGl0w6kgZGVzIGNvbG9ubmVzXCJcclxuICAgICAgfSxcclxuICAgICAgXCJuYW1lXCI6IFwiTm9tIDpcIixcclxuICAgICAgXCJzZWFyY2hCdWlsZGVyXCI6IFwiUmVjaGVyY2hlIGF2YW5jw6llXCIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJDcsOpZXIgdW4gbm91dmVsIMOpdGF0XCIsXHJcbiAgICAgIFwidG9nZ2xlTGFiZWxcIjogXCJJbmNsdXMgOlwiXHJcbiAgICB9LFxyXG4gICAgXCJyZW5hbWVCdXR0b25cIjogXCJSZW5vbW1lclwiLFxyXG4gICAgXCJkdXBsaWNhdGVFcnJvclwiOiBcIklsIGV4aXN0ZSBkw6lqw6AgdW4gw6l0YXQgYXZlYyBjZSBub20uXCIsXHJcbiAgICBcImVtcHR5RXJyb3JcIjogXCJMZSBub20gbmUgcGV1dCBwYXMgw6p0cmUgdmlkZS5cIixcclxuICAgIFwiZW1wdHlTdGF0ZXNcIjogXCJBdWN1biDDqXRhdCBzYXV2ZWdhcmTDqVwiLFxyXG4gICAgXCJyZW1vdmVDb25maXJtXCI6IFwiVm91bGV6IHZvdXMgdnJhaW1lbnQgc3VwcHJpbWVyICVzID9cIixcclxuICAgIFwicmVtb3ZlRXJyb3JcIjogXCLDiWNoZWMgZGUgbGEgc3VwcHJlc3Npb24gZGUgbCfDqXRhdC5cIixcclxuICAgIFwicmVtb3ZlSm9pbmVyXCI6IFwiZXRcIixcclxuICAgIFwicmVtb3ZlVGl0bGVcIjogXCJTdXBwcmltZXIgbCfDqXRhdFwiLFxyXG4gICAgXCJyZW5hbWVMYWJlbFwiOiBcIk5vdXZlYXUgbm9tIHBvdXIgJXMgOlwiLFxyXG4gICAgXCJyZW5hbWVUaXRsZVwiOiBcIlJlbm9tbWVyIGwnw6l0YXRcIlxyXG4gIH0sXHJcbiAgXCJpbmZvXCI6IFwiQWZmaWNoYWdlIGRlIF9TVEFSVF8gw6AgX0VORF8gc3VyIF9UT1RBTF8gZW50csOpZXNcIixcclxuICBcImluZm9FbXB0eVwiOiBcIkFmZmljaGFnZSBkZSAwIMOgIDAgc3VyIDAgZW50csOpZXNcIixcclxuICBcImluZm9GaWx0ZXJlZFwiOiBcIihmaWx0csOpZXMgZGVwdWlzIHVuIHRvdGFsIGRlIF9NQVhfIGVudHLDqWVzKVwiLFxyXG4gIFwibGVuZ3RoTWVudVwiOiBcIkFmZmljaGVyIF9NRU5VXyBlbnRyw6llc1wiLFxyXG4gIFwicGFnaW5hdGVcIjoge1xyXG4gICAgXCJmaXJzdFwiOiBcIlByZW1pw6hyZVwiLFxyXG4gICAgXCJsYXN0XCI6IFwiRGVybmnDqHJlXCIsXHJcbiAgICBcIm5leHRcIjogXCJTdWl2YW50ZVwiLFxyXG4gICAgXCJwcmV2aW91c1wiOiBcIlByw6ljw6lkZW50ZVwiXHJcbiAgfSxcclxuICBcInplcm9SZWNvcmRzXCI6IFwiQXVjdW5lIGVudHLDqWUgY29ycmVzcG9uZGFudGUgdHJvdXbDqWVcIixcclxuICBcImFyaWFcIjoge1xyXG4gICAgXCJzb3J0QXNjZW5kaW5nXCI6IFwiIDogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudFwiLFxyXG4gICAgXCJzb3J0RGVzY2VuZGluZ1wiOiBcIiA6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBkw6ljcm9pc3NhbnRcIlxyXG4gIH0sXHJcbiAgXCJpbmZvVGhvdXNhbmRzXCI6IFwiIFwiLFxyXG4gIFwic2VhcmNoXCI6IFwiUmVjaGVyY2hlciA6XCIsXHJcbiAgXCJ0aG91c2FuZHNcIjogXCIgXCIsXHJcbiAgXCJjb2x1bW5Db250cm9sXCI6IHtcclxuICAgIFwiY29sVmlzXCI6IFwiVmlzaWJpbGl0w6kgY29sb25uZXNcIixcclxuICAgIFwiY29sVmlzRHJvcGRvd25cIjogXCJWaXNpYmlsaXTDqSBjb2xvbm5lc1wiLFxyXG4gICAgXCJkcm9wZG93blwiOiBcIlBsdXMuLi5cIixcclxuICAgIFwib3JkZXJBZGRBc2NcIjogXCJBam91dGVyIHRyaSBjcm9pc3NhbnRcIixcclxuICAgIFwib3JkZXJBZGREZXNjXCI6IFwiQWpvdXRlciB0cmkgZMOpY3JvaXNzYW50XCIsXHJcbiAgICBcIm9yZGVyQXNjXCI6IFwiVHJpIGNyb2lzc2FudFwiLFxyXG4gICAgXCJvcmRlckRlc2NcIjogXCJUcmkgZMOpY3JvaXNzYW50XCIsXHJcbiAgICBcIm9yZGVyUmVtb3ZlXCI6IFwiU3VwcHJpbWVyIGR1IHRyaVwiLFxyXG4gICAgXCJyZW9yZGVyXCI6IFwiUsOpb3JnYW5pc2VyIGxlcyBjb2xvbm5lc1wiLFxyXG4gICAgXCJyZW9yZGVyTGVmdFwiOiBcIkTDqXBsYWNlciBsYSBjb2xvbm5lIHZlcnMgbGEgZ2F1Y2hlXCIsXHJcbiAgICBcInJlb3JkZXJSaWdodFwiOiBcIkTDqXBsYWNlciBsYSBjb2xvbm5lIHZlcnMgbGEgZHJvaXRlXCIsXHJcbiAgICBcInNlYXJjaENsZWFyXCI6IFwiRWZmYWNlciBsYSByZWNoZXJjaGVcIixcclxuICAgIFwic2VhcmNoRHJvcGRvd25cIjogXCJSZWNoZXJjaGVyXCIsXHJcbiAgICBcImxpc3RcIjoge1xyXG4gICAgICBcImFkZFwiOiBcIlRvdXQgc8OpbGVjdGlvbm5lclwiLFxyXG4gICAgICBcIm5vbmVcIjogXCJEw6lzw6lsZWN0aW9ubmVyXCIsXHJcbiAgICAgIFwic2VhcmNoXCI6IFwiUmVjaGVyY2hlci4uLlwiLFxyXG4gICAgICBcImVtcHR5XCI6IFwiVmlkZVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBcIm9yZGVyQ2xlYXJcIjogXCJFZmZhY2VyIGxlIHRyaVwiLFxyXG4gIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgXCJjb2x1bW5Db250cm9sXCI6IHtcclxuICAgICAgXCJzZWFyY2hcIjoge1xyXG4gICAgICAgIFwiZGF0ZXRpbWVcIjoge1xyXG4gICAgICAgICAgXCJlcXVhbFwiOiBcIsOJZ2FsIMOgXCIsXHJcbiAgICAgICAgICBcIm5vdEVxdWFsXCI6IFwiRGlmZsOpcmVudCBkZVwiLFxyXG4gICAgICAgICAgXCJncmVhdGVyXCI6IFwiQXByw6hzIGxlXCIsXHJcbiAgICAgICAgICBcImxlc3NcIjogXCJBdmFudCBsZVwiLFxyXG4gICAgICAgICAgXCJlbXB0eVwiOiBcIlZpZGVcIixcclxuICAgICAgICAgIFwibm90RW1wdHlcIjogXCJOb24gdmlkZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRleHRcIjoge1xyXG4gICAgICAgICAgXCJlcXVhbFwiOiBcIsOJZ2FsIMOgXCIsXHJcbiAgICAgICAgICBcIm5vdEVxdWFsXCI6IFwiRGlmZsOpcmVudCBkZVwiLFxyXG4gICAgICAgICAgXCJzdGFydHNcIjogXCJDb21tZW5jZSBwYXJcIixcclxuICAgICAgICAgIFwiZW5kc1wiOiBcIlNlIHRlcm1pbmUgcGFyXCIsXHJcbiAgICAgICAgICBcImVtcHR5XCI6IFwiVmlkZVwiLFxyXG4gICAgICAgICAgXCJub3RFbXB0eVwiOiBcIk5vbiB2aWRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICAgIFwiZXF1YWxcIjogXCLDiWdhbCDDoFwiLFxyXG4gICAgICAgICAgXCJub3RFcXVhbFwiOiBcIkRpZmbDqXJlbnQgZGVcIixcclxuICAgICAgICAgIFwiZ3JlYXRlclwiOiBcIlN1cMOpcmlldXIgw6BcIixcclxuICAgICAgICAgIFwiZ3JlYXRlck9yRXF1YWxcIjogXCJTdXDDqXJpZXVyIG91IMOpZ2FsIMOgXCIsXHJcbiAgICAgICAgICBcImxlc3NcIjogXCJJbmbDqXJpZXVyIMOgXCIsXHJcbiAgICAgICAgICBcImxlc3NPckVxdWFsXCI6IFwiSW5mw6lyaWV1ciBvdSDDqWdhbCDDoFwiLFxyXG4gICAgICAgICAgXCJlbXB0eVwiOiBcIlZpZGVcIixcclxuICAgICAgICAgIFwibm90RW1wdHlcIjogXCJOb24gdmlkZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIihmdW5jdGlvbigkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcclxuXHJcbiAgLy8gVG9nZ2xlIHRoZSBzaWRlIG5hdmlnYXRpb25cclxuICAkKFwiI3NpZGViYXJUb2dnbGUsICNzaWRlYmFyVG9nZ2xlVG9wXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci10b2dnbGVkXCIpO1xyXG4gICAgJChcIi5zaWRlYmFyXCIpLnRvZ2dsZUNsYXNzKFwidG9nZ2xlZFwiKTtcclxuICAgIGlmICgkKFwiLnNpZGViYXJcIikuaGFzQ2xhc3MoXCJ0b2dnbGVkXCIpKSB7XHJcbiAgICAgICQoJy5zaWRlYmFyIC5jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICAvLyBDbG9zZSBhbnkgb3BlbiBtZW51IGFjY29yZGlvbnMgd2hlbiB3aW5kb3cgaXMgcmVzaXplZCBiZWxvdyA3NjhweFxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcclxuICAgICAgJCgnLnNpZGViYXIgLmNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIFRvZ2dsZSB0aGUgc2lkZSBuYXZpZ2F0aW9uIHdoZW4gd2luZG93IGlzIHJlc2l6ZWQgYmVsb3cgNDgwcHhcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDQ4MCAmJiAhJChcIi5zaWRlYmFyXCIpLmhhc0NsYXNzKFwidG9nZ2xlZFwiKSkge1xyXG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInNpZGViYXItdG9nZ2xlZFwiKTtcclxuICAgICAgJChcIi5zaWRlYmFyXCIpLmFkZENsYXNzKFwidG9nZ2xlZFwiKTtcclxuICAgICAgJCgnLnNpZGViYXIgLmNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIC8vIFByZXZlbnQgdGhlIGNvbnRlbnQgd3JhcHBlciBmcm9tIHNjcm9sbGluZyB3aGVuIHRoZSBmaXhlZCBzaWRlIG5hdmlnYXRpb24gaG92ZXJlZCBvdmVyXHJcbiAgJCgnYm9keS5maXhlZC1uYXYgLnNpZGViYXInKS5vbignbW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbCB3aGVlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xyXG4gICAgICB2YXIgZTAgPSBlLm9yaWdpbmFsRXZlbnQsXHJcbiAgICAgICAgZGVsdGEgPSBlMC53aGVlbERlbHRhIHx8IC1lMC5kZXRhaWw7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9wICs9IChkZWx0YSA8IDAgPyAxIDogLTEpICogMzA7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gU2Nyb2xsIHRvIHRvcCBidXR0b24gYXBwZWFyXHJcbiAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNjcm9sbERpc3RhbmNlID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgIGlmIChzY3JvbGxEaXN0YW5jZSA+IDEwMCkge1xyXG4gICAgICAkKCcuc2Nyb2xsLXRvLXRvcCcpLmZhZGVJbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnNjcm9sbC10by10b3AnKS5mYWRlT3V0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFNtb290aCBzY3JvbGxpbmcgdXNpbmcgalF1ZXJ5IGVhc2luZ1xyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhLnNjcm9sbC10by10b3AnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGFuY2hvciA9ICQodGhpcyk7XHJcbiAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3A6ICgkKCRhbmNob3IuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3ApXHJcbiAgICB9LCAxMDAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJqUXVlcnkiLCJyZXF1aXJlIiwibGFuZ3VhZ2UiLCJkb2N1bWVudCIsInJlYWR5IiwiRGF0YVRhYmxlIiwib24iLCJlIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbGxhcHNlIiwicmVzaXplIiwid2lkdGgiLCJhZGRDbGFzcyIsImUwIiwib3JpZ2luYWxFdmVudCIsImRlbHRhIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInNjcm9sbFRvcCIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsRGlzdGFuY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiJGFuY2hvciIsInN0b3AiLCJhbmltYXRlIiwiYXR0ciIsIm9mZnNldCIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=